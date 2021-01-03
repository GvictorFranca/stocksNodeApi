const Koa = require('koa');
const bodyparser = require('koa-bodyparser');


const server = new Koa();

const router = require('../StocksApiNode/src/routes');
require('dotenv').config();

const PORT = process.env.PORT || 8081;
server.use(bodyparser());
server.use(router.routes());

server.listen(PORT, '0.0.0.0', null, () =>
	console.log(`rodando na porta ${PORT}`)
);