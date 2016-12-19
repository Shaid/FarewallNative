import React from 'react';
import App from './App';
//import './Root.css';
import { Provider } from 'react-redux';
import configureStore from './store/configure';

const store = configureStore();

export default class Root extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  };
}
