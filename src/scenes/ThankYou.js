import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';

class ThankYou extends Component {
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
        <h2>Thank You!</h2>
        <div className="thank-you">
          <table>
            <tr>
              <td>First Name</td>
              <td><input type="text"></input></td>
            </tr>
            <tr>
              <td>Last Name</td>
              <td><input type="text"></input></td>
            </tr>
            <tr>
              <td>Title</td>
              <td><input type="text"></input></td>
            </tr>
            <tr>
              <td>Company</td>
              <td><input type="text"></input></td>
            </tr>
          </table>

        </div>
      </div>
    );
  }
}

export default ThankYou;
