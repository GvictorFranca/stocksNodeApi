const axios = require('axios').default;
require('dotenv').config();

// FUNDAMENTALS DOESNT WORK WITH BRAZILLIAN STOCKS

const getCompanyOverview = async (symbol) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'OVERVIEW';
    symbol = 'IBM'

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

const searchBySymbol = async (keywords) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'SYMBOL_SEARCH';
    keywords = 'vvar'

    try {
     const request = await axios.get( url, {
                params: {
                    function: requestfunction,
                    keywords: keywords,
                    datatype: 'json',
                    apikey: 'JXKL6Z5ZBERI886Z'
                }
            } 
        )
     console.log(request.data);   
    } catch (e) {
        console.log(e);
    }
}

getCompanyOverview();
// searchBySymbol();