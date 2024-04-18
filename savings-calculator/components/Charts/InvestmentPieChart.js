import React from 'react'
import { PieChart, Pie, Cell, Label } from 'recharts';

const InvestmentPieChart = ({investmentAmount, investmentReturn}) => {
    const data = [
        { name: "Invested Amount", value: 10 },
        { name: "Investment Return ", value: 20 },
    ];

    return (
        <>

            <PieChart width={730} height={250}>
                <Pie
                    data={data}
                    cx="50%"
                    cy="50%"
                    dataKey="value" // make sure to map the dataKey to "value"
                    innerRadius={0} // the inner and outer radius helps to create the progress look
                    outerRadius={80}
                    label
                >
                    {data.map((entry, index) => {
                    if (index === 1) {
                        return <Cell key={`cell-${index}`} fill="#8884d8" />; // make sure to map the index to the colour you want
                    }
                    return <Cell key={`cell-${index}`} fill="#82ca9d" />;
                    })}
                    <Label
                    position="center"
                    fill="grey"
                    style={{
                        fontSize: "32px",
                        fontWeight: "bold",
                        fontFamily: "Roboto"
                    }}
                    />
                </Pie>
                </PieChart>

        </>
    )
}

export default InvestmentPieChart