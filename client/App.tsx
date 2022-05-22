import React, { Component } from 'react';
import Home from './views/Home';
import Login from './views/Login';
import Register from './views/Register';
import ProfileDetails from './views/ProfileDetails';
import ProfileDetailsCountry from './views/ProfileDetailsCountry';
import { Provider } from 'react-redux';
import store from './store/index';
import { NativeRouter, Routes, Route } from 'react-router-native';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <NativeRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile-details" element={<ProfileDetails />} />
            <Route path="/profile-country" element={<ProfileDetailsCountry />} />
          </Routes>
        </NativeRouter>
      </Provider>
    );
  }
}
export default App;
