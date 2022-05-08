import React, { Component } from 'react';
import Home from './views/Home';
import { Provider } from 'react-redux';
import store from './store/index';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Home />
      </Provider>
    );
  }
}
export default App;
