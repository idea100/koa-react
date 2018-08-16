import Koa from 'koa';
import homeRouter from './routers/home';
import activityRouter from './routers/activity';

const app = new Koa();

app.use(homeRouter.routes());
app.use(activityRouter.routes());

app.listen(3000);
console.log('start success');