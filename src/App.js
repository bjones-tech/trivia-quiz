import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Quiz from './components/Quiz'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div>
          <h2>Hello!</h2>
          <Quiz />
        </div>
      </Provider>
    );
  }
}

export default App;
