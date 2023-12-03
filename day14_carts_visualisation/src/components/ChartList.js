import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Area, AreaChart, Bar, BarChart, CartesianGrid, Legend, Tooltip, XAxis, YAxis } from 'recharts';

const ChartList = () => {
    const [chartData, updateChartData] = useState([]);
    useEffect(() => {
        fetchChartData();
    })
    async function fetchChartData() {
        try {
            const request = await axios.get('https://api.worldbank.org/v2/countries/IN/indicators/NY.GDP.MKTP.KD.ZG?per_page=30&MRV=30&format=json');
            updateChartData(request.data[1]);
        } catch (error) {
            console.log(error);
        }
    }
    const renderBarChartData = (barChartData) => {
        return (
            <BarChart
                width={800}
                height={400}
                data={barChartData}
                margin={{
                    top: 5, right: 30, left: 20, bottom: 5,
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey='gdp' fill='#8884d8' name='GDP of India' />
            </BarChart>
        )
    }
    const renderAreaChartData = (chartData) => {
        return (
            <AreaChart
                width={800}
                height={400}
                data={chartData}
                margin={{
                    top: 10,
                    right: 30,
                    left: 0,
                    bottom: 0
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip />
                <Area type="monotone" dataKey="gdp" stroke='#8884d8' fill='#8884d8' name='GDP of India' />
            </AreaChart>
        )
    }
    function renderChartData() {
        if (chartData.length) {
            const chartGenData = chartData.map((item) => {
                return {
                    'name': item.date,
                    'gdp': item.value
                }
            }).reverse();
            return (
                <div className='d-flex flex-column align-item-center mt-2'>
                    {renderBarChartData(chartGenData)}
                    {renderAreaChartData(chartGenData)}
                </div>
            )
        }
    }
    return (
        <div className='container'>
            {renderChartData()}
        </div>
    )
}

export default ChartList