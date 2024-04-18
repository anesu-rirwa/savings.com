import React from 'react'
import Calculations from './calculations'
import { Heading } from '@chakra-ui/react'

const Savings = () => {
  return (
    <>
      <Heading  my={5} textAlign={'center'}>How Much Will I Save?</Heading>
      <Calculations />
    </>
  )
}

export default Savings