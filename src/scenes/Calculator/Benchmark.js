import React, { Component } from 'react';

class Benchmark extends Component {
  onComponentDidMount(){

  }

  static defaultProps = {
    limit : 400,
    value : 30,
    titleString : "Mean-Time-To-Resolution (MTTR) benchmark"
  }

  render() {
    var left = (this.props.value*100/this.props.limit);
    left = (left > 93)? 93 : left;

    var value = this.props.value > 400 ? 400 : this.props.value;

    return (
      <div className="benchmark">
        <div className="benchmark-title">{this.props.titleString}</div>
        <div className="flex">
          <div className="marker" style={{ left: left.toString()+"%"}}></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
          <div className="regularLine"></div>
        </div>
        <div className="valuesContainer">
          <span className="initialValue">0</span>
          <span className="endValue">{this.props.limit}</span>
        </div>
        <div className="benchmark-position">You are #{value} of #{this.props.limit}</div>
      </div>
    );
  }
}

export default Benchmark;
