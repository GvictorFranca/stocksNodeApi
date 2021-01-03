const axios = require('axios').default;
require('dotenv').config();

const getCurrencyExchangeRate = async (fromCurrency, toCurrency) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'CURRENCY_EXCHANGE_RATE';
    fromCurrency = 'BTC';
    toCurrency = 'BRL'
    
    try {
     const data = await axios.get( url, {
                params: {
                    function: requestfunction,
                    from_currency: fromCurrency,
                    to_currency: toCurrency,
                    apikey: 'JXKL6Z5ZBERI886Z'
                }
            } 
        );
        const rawSeries = data.data;

            console.log(rawSeries)

    } catch (e) {
        console.log(e);
    }
}

const getCryptoRating = async (symbol) => {
    const url = 'https://www.alphavantage.co/query';
    const requestfunction = 'CRYPTO_RATING';
    symbol = 'LTC';

    
    try {
     const data = await axios.get( url, {
                params: {
                    function: requestfunction,
                    symbol: symbol,
                    apikey: 'JXKL6Z5ZBERI886Z'
                }
            } 
        );
        const rawSeries = data.data;

            console.log(rawSeries)

    } catch (e) {
        console.log(e);
    }
}

// getCurrencyExchangeRate();
getCryptoRating();
module.exports = { getCurrencyExchangeRate }