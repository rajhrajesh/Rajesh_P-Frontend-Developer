import React from 'react'
import { Pie, PieChart, Legend, Cell, ResponsiveContainer } from "recharts"

const data = [
    { name: 'Team', percentage: 35 },
    { name: 'Markenting', percentage: 5 },
    { name: 'Liquidity Pool', percentage: 90 }
];


const BieChart = () => {
    return (
        <ResponsiveContainer width="90%" height={200}>
            <PieChart>
                <Pie
                    cx="50%"
                    cy="50%"
                    data={data}
                    startAngle={0}
                    endAngle={360}
                    innerRadius="40%"
                    outerRadius="70%"
                    dataKey="percentage">
                    <Cell name="Team" fill="#198FB5"></Cell>
                    <Cell name="Marketing" fill="#21687F"></Cell>
                    <Cell name="Liquidity Pool" fill="#80E0FF"></Cell>
                </Pie>
                <Legend
                    iconType="diamond"
                    layout="horizontal"
                    verticalAlign="bottom"
                    align="center"
                />
            </PieChart>
        </ResponsiveContainer>
    )
}

export default BieChart