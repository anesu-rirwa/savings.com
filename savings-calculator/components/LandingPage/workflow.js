'use client'

import {
  Box,
  Container,
  Heading,
  SimpleGrid,
  Icon,
  Text,
  Stack,
  HStack,
  VStack,
} from '@chakra-ui/react'
import { CheckIcon } from '@chakra-ui/icons'

// Replace test data with your own
const features = [    
    {
        id: 1,
        title: 'pic 1',
        text: 'Enter your desired savings amount and time frame.',
    },
    {
        id: 2,
        title: 'pic 2',
        text: 'Input your monthly expenses, including rent, utilities, groceries, and other costs.',
    },
    {
        id: 3,
        title: 'pic 3',
        text: 'Our calculator will instantly generate the income needed to save your target amount after expenses each month.',
    }
]

export default function Workflow() {
  return (
    <Box p={4}>
      <Stack spacing={4} as={Container} maxW={'3xl'} textAlign={'center'}>
        <Heading fontSize={'3xl'}>How It Works</Heading>
      </Stack>

      <Container maxW={'6xl'} mt={10}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={10}>
          {features.map((feature) => (
            <HStack key={feature.id} align={'top'}>
              <Box color={'green.400'} px={2}>
                <Icon as={CheckIcon} />
              </Box>
              <VStack align={'start'}>
                <Text fontWeight={600}>{feature.title}</Text>
                <Text color={'gray.600'}>{feature.text}</Text>
              </VStack>
            </HStack>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  )
}