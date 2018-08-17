import Koa from 'koa';
import staticKoa from 'koa-static';
import path from 'path';
import homeRouter from './routers/home';
import activityRouter from './routers/activity';

const app = new Koa();

app.use(homeRouter.routes());
app.use(activityRouter.routes());
app.use(staticKoa(
    path.join(__dirname, './static')
));

app.listen(3000);
console.log('start success');