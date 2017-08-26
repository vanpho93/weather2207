import React, { Component } from 'react';
import { Provider } from 'react-redux';
import Weather from './components/Weather';
import store from './redux/store';

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <Weather />
      </Provider>
    );
  }
}

export default App;

//https://www.youtube.com/watch?v=nS6YCq2OdeA&t=1s REALM DB
