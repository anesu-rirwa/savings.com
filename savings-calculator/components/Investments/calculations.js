"use client"
import React, {useState} from 'react'
import { Box, Heading, Text, Input, Stack, Select, Flex, Button, Stat,StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, useColorModeValue } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { calculateInvestmentReturn } from '@/utils/calc';
import InvestmentPieChart from '../Charts/InvestmentPieChart';

const Calculations = () => {
    const [investmentAmount, setInvestmentAmount] = useState(0)
    const [expectedAnnualReturn, setExpectedAnnualReturn] = useState();
    const [duration, setDuration] = useState();
    const [data, setData] = useState();

    const handleCalculate = () => {
        const calculationsData = calculateInvestmentReturn(investmentAmount, expectedAnnualReturn, duration);

        setData(
            calculationsData
        )

        console.log(data)
    }

    return (
    <Flex border={'green solid thick'} justify={{base: 'center', lg: 'space-around'}} flexDirection={{base: 'column', lg: 'row'}} align={'center'}>
        <Box maxW={{base: '80%', lg: '50%'}} width={'70%'} border={'red solid thin'}>

            <Stack spacing={5}>
                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Initial Investment<InfoIcon /></Text>
                
                    <Input htmlSize={4} width='auto' placeholder='0.00' textAlign={'end'}  onChange={(e) => setInvestmentAmount(e.target.value)}/>
                </Flex>

                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Duration</Text>

                    <Input htmlSize={4} width='auto' placeholder='0.00' textAlign={'end'}  onChange={(e) => setDuration(e.target.value)}/>
                </Flex>

                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Expected Annual Return (%)</Text>

                    <Input htmlSize={4} width='auto' placeholder='0.00' textAlign={'end'}  onChange={(e) => setExpectedAnnualReturn(e.target.value)}/>
                </Flex>

                <Flex align={'center'} justify={'center'}>
                    <Button onClick={handleCalculate}>Calculate</Button>
                </Flex>
            </Stack>
        </Box>

        <Box border={'solid purple '}>
            {data && (
                <Flex justify={'end'}>
                    <StatGroup width={'40%'}>
                        <Stat
                            px={{ base: 2, md: 4 }}
                            py={'3'}
                            mb={5}
                            border={'1px solid'}
                            borderColor={useColorModeValue('gray.800', 'gray.500')}
                            rounded={'lg'}>
                            <Flex justifyContent={'space-between'} flexDirection={'column'}>
                                <StatLabel>Estimated Return</StatLabel>
                                <StatNumber>$ {data.investmentReturn}</StatNumber>
                                
                                <StatHelpText>
                                    <StatArrow type={data.roi > 0 ? 'increase' : 'decrease'} />
                                    {data.roi}%
                                </StatHelpText>
                            </Flex>
                        </Stat>
                    </StatGroup>
                </Flex>                
            )}

            {data && (
                <InvestmentPieChart investmentReturn={data.investmentReturn} investmentAmount={investmentAmount}/>
            )}

        </Box>
    </Flex>
  )
}

export default Calculations