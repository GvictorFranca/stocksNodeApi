const Router = require('koa-router');
const QuotesController = require('./controllers/stocks/daily_quotes')

const router = new Router();
// CRIACÃO DE USUARIO
router.get(
    '/average',
    QuotesController.dailyHistoricAverageQuotation
);



module.exports = router;