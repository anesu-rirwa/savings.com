"use client"
import { Text } from '@chakra-ui/react';
import React from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';


const SavedLineChart = ({initialSavings, saved}) => {
    const data = [
        {
          name: 'Current Savings',
          savings: initialSavings
        },
      
        {
          name: 'Estimated Savings',
          savings: parseInt(saved) + parseInt(initialSavings)
        },
      ];

  return (
    <>
        <LineChart
            stroke='#8884d8'
            width={500}
            height={300}
            data={data}
            margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
            }}
        >
          <CartesianGrid strokeDasharray="3 3"  />
          <XAxis dataKey="name" />
          <YAxis  dataKey=""/>
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="savings" stroke="#8884d8" activeDot={{ r: 8 }} />
        </LineChart>

    </>
  )
}

export default SavedLineChart
