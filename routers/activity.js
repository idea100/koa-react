import router from 'koa-router';
import ReactDOMServer from 'react-dom/server';
import React from 'react';
import MyComponent from '../component/MyComponent';

const homeRouter = router();

homeRouter.get('/activity', async(ctx, next) => {
    ctx.body = `
        <!DOCTYPE html>
        <html lang="en" dir="ltr">
          <head>
            <meta charset="utf-8">
            <title>react server side render</title>
          </head>
          <body>
            <div id="root">${ReactDOMServer.renderToString(React.createElement(MyComponent))}</div>
            <script src="/js/main.js"></script>
          </body>
        </html>
    `;
});

export default homeRouter;