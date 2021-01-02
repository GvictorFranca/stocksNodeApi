const axios = require('axios').default;
require('dotenv').config();

const getTimeSeriesDaily = async (symbol, outputsize) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'TIME_SERIES_DAILY';
    symbol = 'VVAR3.SA'
    outputsize = 'full'

    try {
     const data = await axios.get( url, {
                params: {
                    function: requestfunction,
                    symbol: symbol,
                    outputsize: outputsize,
                    apikey: 'JXKL6Z5ZBERI886Z'
                }
            } 
        )

    return data.data;  

    } catch (e) {
        console.log(e);
    }
}

getTimeSeriesDaily();