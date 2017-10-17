import React, { Component } from 'react';
import CinemaContainer from './scenes/Cinema/CinemaContainer';
import './splunk-assets/styles/scss/App.css';
import './splunk-assets/styles/css/font-awesome.min.css';
import './splunk-assets/styles/scss/splunk-calculator-header.css';
import './splunk-assets/styles/scss/multi-options.css';
import './splunk-assets/styles/scss/number-input.css';
import './splunk-assets/styles/scss/thank-you.css';
import './splunk-assets/styles/scss/benchmark.css';
import './splunk-assets/styles/scss/calculator.css';
import './splunk-assets/styles/scss/indicators.css';

class App extends Component {
  render() {
    return (
      <div>
        <CinemaContainer />
      </div>
    );
  }
}

export default App;
