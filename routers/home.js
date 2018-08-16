import router from 'koa-router';

const koarouter = router();

koarouter.get('/home', async (ctx, next) => {
    ctx.body = {result: true};
});

export default koarouter;