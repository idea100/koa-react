const Koa = require('koa');
const router = require('koa-router');
const app = new Koa();

app.use(require('./routers/home').routes());
app.use(require('./routers/activity').routes());

app.listen(3000);