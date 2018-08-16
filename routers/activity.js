const router = require('koa-router')();

router.get('/activity', async(ctx, next) => {
    ctx.body = {activity: 'good job!'};
});

module.exports = router;