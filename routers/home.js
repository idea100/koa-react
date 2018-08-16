const router = require('koa-router')();

router.get('/home', async(ctx, next) => {
    ctx.body = {result: true};
});

module.exports = router;