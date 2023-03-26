import React from 'react';
import App from './App';
import ReactDOM from 'react-dom/client';
import TestRenderer from 'react-test-renderer';
import * as ReactDOMServer from 'react-dom/server';

const root = ReactDOM.createRoot(
  document.getElementById('root')
);

// root.render(<App />);
// Render send JS DOM API instructions to browser
// const myDiv = document.createElement('div');
// const myButton = document.createElement('button');
// (react-dom)
root.render(App());

// Component -- is the Order JS Object for creating VDOM tree/nodes
console.log('@@ App()', App());

// Render returns JS object for VDOM tree
// import TestRenderer from 'react-test-renderer';
console.log('Render returns object for VDOM tree', TestRenderer.create(App()).toJSON());

// Render returns HTML string
console.log('@@ Render returns HTML string', ReactDOMServer.renderToString(App()));
