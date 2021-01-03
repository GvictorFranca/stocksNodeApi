const TimeSeriesDaily = require('../../infra/stocks/alpha_vantage_time_series');

const dailyHistoricAverageQuotation = async (ctx) => {
    const { symbol = null, outputsize = null } = ctx.request.body;
    const series = await TimeSeriesDaily.getTimeSeriesDaily(symbol, outputsize);
    
    let openTotal = 0;
    let highTotal = 0;
    let lowTotal = 0;
    let closeTotal = 0;
    let adjustedTotal = 0;
    let volumeTotal = 0;
    let dividendTotal = 0;
    let coeficientTotal = 0;

    const array = []

    for(let i = 0; i < series.length; i++) {
        openTotal += series[i].open
        highTotal += series[i].high
        lowTotal += series[i].low
        closeTotal += series[i].close
        adjustedTotal += series[i].adjustedClose
        volumeTotal += series[i].volume
        dividendTotal += series[i].dividendAmount
        coeficientTotal += series[i].splitCoeficient
    }

    array.push({
        open: openTotal / series.length,
        high: highTotal / series.length,
        low: lowTotal / series.length,
        close: closeTotal / series.length,
        adjustedClose: adjustedTotal / series.length,
        volume: volumeTotal / series.length,
        dividendAmount: dividendTotal / series.length,
        coeficientTotal: coeficientTotal / series.length,
    })

    console.log(array)
}


module.exports = { dailyHistoricAverageQuotation }