import React, { Component } from 'react';
import { Provider } from 'react-redux'
import { store } from './redux/store'
import Header from './components/Header'
import Quiz from './components/Quiz'
import ResultsModal from 'react-modal'
import Results from './components/Results'

class App extends Component {
  state = {
    showResults: false
  }

  showResults = () => {
    this.setState({
      showResults: true
    })
  }

  hideResults = () => {
    this.setState({
      showResults: false
    })
  }

  render() {
    return (
      <Provider store={store}>
        <div>
          <Header />
          <Quiz showResultsHandler={this.showResults} />
          <ResultsModal isOpen={this.state.showResults}>
            <Results hideResultsHandler={this.hideResults} />
          </ResultsModal>
        </div>
      </Provider>
    );
  }
}

export default App;
