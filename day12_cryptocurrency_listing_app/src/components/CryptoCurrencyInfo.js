import axios from 'axios'
import React, { useEffect, useState } from 'react'

export const CryptoCurrencyInfo = () => {
    const [cryptoData, setCryptoData] = useState([]);
    const [isFetchingData, setIsFetchingData] = useState(false);
    const fetchData = () => {
        setIsFetchingData(true);
        axios.get('https://api.coinlore.net/api/tickers/')
            .then(result => {
                setCryptoData(result.data.data)
                setIsFetchingData(false);
                console.log(cryptoData)
            })
            .catch(err => {
                console.log(err);
            })
    }
    useEffect(() => {
        fetchData();
    }, []);
    const renderCryptoTable = () => {
        const selectedKeys = ['symbol', 'name', 'price_usd', 'price_btc']
        if (cryptoData.length) {
            const tableHeading = [];
            const tableRows = [];
            cryptoData.map((item, index) => {
                const rowItems = [];
                for (let key in item) {
                    if (selectedKeys.includes(key)) {
                        if (index === 0) {
                            tableHeading.push(
                                <th scope='col' className={"text-capitalize"} key={key}>
                                    {key.replace('_', ' ')}
                                </th>
                            );
                        }
                        rowItems.push(<td key={item[key] + Math.random()}>{item[key]}</td>)
                    }
                }
                tableRows.push(
                    <tr>
                        {rowItems}
                    </tr>
                )
            });
            return (
                <table className='table table-striped table-dark'>
                    <thead className='thead-dark'>
                        <tr>
                            {tableHeading}
                        </tr>
                    </thead>
                    <tbody>
                        {tableRows}
                    </tbody>
                </table>
            )
        }
    }
    if (isFetchingData) {
        return (
            <div className='spinner-border' role='status'>
                <span className='sr-only'>Loading...</span>
            </div>
        )
    }
    return (
        <div className="container">
            {renderCryptoTable()}
        </div>
    )
}
