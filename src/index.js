import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './containers/App';

import rootReducer from './reducers'

const store = createStore(rootReducer)
console.log('state: ', store.getState())
store.subscribe( () => console.log('store ==> ', store.getState()))

ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>
  , document.getElementById('root')
);
