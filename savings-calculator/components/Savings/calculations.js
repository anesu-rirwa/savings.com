"use client"
import React, {useState} from 'react'
import { Box, Heading, Text, Input, Stack, Select, Flex, Button, Stat,StatLabel, StatNumber, StatHelpText, StatArrow, StatGroup, useColorModeValue } from '@chakra-ui/react';
import { InfoIcon } from '@chakra-ui/icons';
import { calculateHowMuchIsSaved } from '@/utils/calc';
import SavedLineChart from '../Charts/LineChart';

const Calculations = () => {
    const [initialSavings, setInitialSavings] = useState(0)
    const [deposit, setDeposit] = useState(0);
    const [depositFreq, setDepositFreq] = useState();
    const [duration, setDuration] = useState();
    const [saved, setSaved] = useState();

    const handleCalculate = () => {
        const data = calculateHowMuchIsSaved(initialSavings, deposit, depositFreq, duration);
        setSaved(
            data
        )
    }

    return (
    <Flex border={'green solid thick'} justify={{base: 'center', lg: 'space-around'}} flexDirection={{base: 'column', lg: 'row'}} align={'center'}>
        <Box maxW={{base: '80%', lg: '50%'}} width={'50%'} border={'red solid thin'}>

            <Stack spacing={5}>
                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Initial Savings <InfoIcon /></Text>
                    <Input htmlSize={4} width='auto' borderColor={"black"} placeholder='0.00' textAlign={'end'}  onChange={(e) => setInitialSavings(e.target.value)}/>
                </Flex>

                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Deposits</Text>

                    <Input htmlSize={4} width='auto' borderColor={"black"} placeholder='0.00' textAlign={'end'} onChange={(e) => setDeposit(e.target.value)}/>
                </Flex>

                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Frequency</Text>

                    <Stack spacing={3} >                        
                        <Select size='md' onChange={(e) => setDepositFreq(e.target.value)}>
                            <option value='weekly'>Weekly</option>
                            <option value='monthly'>Monthly</option>
                            <option value='yearly'>Yearly</option>
                        </Select>
                    </Stack>
                </Flex>

                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Duration</Text>
                    
                    <Input placeholder='Select Date' size='md' width='auto' type='datetime-local' onChange={(e) => setDuration(e.target.value)} />
                </Flex>

                <Flex align={'center'} justify={'space-between'}>
                    <Text as={'span'}>Interest Rate</Text>

                    <Input htmlSize={4} width='auto' borderColor={"black"}/>
                </Flex>

                <Flex align={'center'} justify={'center'}>
                    <Button onClick={handleCalculate}>Calculate</Button>
                </Flex>
            </Stack>
        </Box>

        <Box border={'solid purple '}>
            {saved && (
                <Flex justify={'end'}>
                    <StatGroup width={'30%'}>
                        <Stat
                            px={{ base: 2, md: 4 }}
                            py={'3'}
                            mb={5}
                            border={'1px solid'}
                            borderColor={useColorModeValue('gray.800', 'gray.500')}
                            rounded={'lg'}>
                            <Flex justifyContent={'space-between'} flexDirection={'column'}>
                                <StatLabel>Total Savings</StatLabel>
                                <StatNumber>$ {saved.amountSaved}</StatNumber>
                                
                                <StatHelpText>
                                    <StatArrow type={saved.percentageIncrease > 0 ? 'increase' : 'decrease'} />
                                    {saved.percentageIncrease}%
                                </StatHelpText>
                            </Flex>
                        </Stat>
                    </StatGroup>

                </Flex>                
            )}

            {saved && (
                <SavedLineChart initialSavings={initialSavings} saved={saved.amountSaved} />
            )}

        </Box>
    </Flex>
  )
}

export default Calculations