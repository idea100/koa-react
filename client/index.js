import React from 'react';
import ReactDOM from 'react-dom';
import MyComponent from '../component/MyComponent';

setTimeout(() => {
    console.log('client side will render');
    ReactDOM.hydrate(React.createElement(MyComponent), document.getElementById('root'));
}, 3000);
