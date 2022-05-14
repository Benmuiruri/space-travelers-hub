import React from 'react';
import { render } from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux/configureStore';
import App from './App';
import reportWebVitals from './reportWebVitals';

const rootElement = document.getElementById('root');

render(
  <React.StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <App />
      </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  rootElement,
);

reportWebVitals();
