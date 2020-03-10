import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './App';
import { createStore } from 'redux';
import ads from './reducers'

fetch('https://5e5f623ab5c43c0014ef984c.mockapi.io/ad').then(response => response.json()).then(result => {
  const store = createStore(ads, result)

  ReactDOM.render(
    (<BrowserRouter>
        <App store={store} />
    </BrowserRouter>), 
    document.getElementById('root'));
});
