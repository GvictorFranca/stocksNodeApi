const axios = require('axios').default;
require('dotenv').config();

const getTimeSeriesDaily = async (symbol, outputsize) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'TIME_SERIES_DAILY_ADJUSTED';

    
    try {
     const data = await axios.get( url, {
                params: {
                    function: requestfunction,
                    symbol: symbol,
                    outputsize: outputsize,
                    apikey: 'JXKL6Z5ZBERI886Z'
                }
            } 
        );
        const rawSeries = data.data["Time Series (Daily)"];

        const series = Object.keys(rawSeries).reverse().map(date => {
            return {date, 
                open: parseFloat(rawSeries[date]['1. open']),
                high: parseFloat(rawSeries[date]['2. high']),
                low: parseFloat(rawSeries[date]['3. low']),
                close: parseFloat(rawSeries[date]['4. close']),
                adjustedClose: parseFloat(rawSeries[date]['5. adjusted close']),
                volume: parseFloat(rawSeries[date]['6. volume']),
                dividendAmount: parseFloat(rawSeries[date]['7. dividend amount']),
                splitCoeficient: parseFloat(rawSeries[date]['8. split coefficient'])
            }
        });
        return series;

    } catch (e) {
        console.log(e);
    }
}

module.exports = { getTimeSeriesDaily }