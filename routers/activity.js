import router from 'koa-router';

const homeRouter = router();

homeRouter.get('/activity', async(ctx, next) => {
    ctx.body = {result: 'good'};
});

export default homeRouter;