import React from 'react';
import { View } from 'react-native';
import { Provider } from 'react-redux';
import store from './store/index';
import App from './App';

function index() {
  return (
    <View>
      <Provider store={store}>
        <App />
      </Provider>
    </View>
  );
}

export default index;
