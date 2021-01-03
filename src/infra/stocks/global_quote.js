const axios = require('axios').default;
require('dotenv').config();


const getGlobalQuote = async (symbol) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'GLOBAL_QUOTE';
    symbol = 'VVAR3.SA'

    try {
     const request = await axios.get( url, {
                params: {
                    function: requestfunction,
                    symbol: symbol,
                    apikey: 'JXKL6Z5ZBERI886Z'
                }
            } 
        )
     console.log(request.data);   
    } catch (e) {
        console.log(e);
    }
}

getGlobalQuote();