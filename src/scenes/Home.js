import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class Home extends Component {
  render() {
    return (
      <div className="App-header">
        <FontAwesome
          className='super-crazy-colors'
          name='clock-o'
          size='2x'
          spin
          style={{ textShadow: '0 1px 0 rgba(0, 0, 0, 0.1)' }}
        />
        <h2>Critical IT Event Calculator</h2>
        <div className="App-intro">
          <p>
            You’re just <b>5 questions</b> away from receiving your tailored report and discovering the estimated annual cost of CIEs to your business, your benchmarked industry position for <b>MTTR</b> (Mean-Time-To-Resolution) and <b>RCA</b> (Root Cause Analysis ), the benefits of <b>operational intelligence</b> and your industry relevant case study.
          </p>
        </div>
      </div>
    );
  }
}

export default Home;
