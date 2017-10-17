import React, { Component } from 'react';
import { connect } from 'react-redux';
import Benchmark from './Benchmark';

const mapStateToProps = (state,ownProps) => {
  return {
    calculator : state.calculator,
    scenes : state.scenes,
    opacity : state.opacity,
    translatey : state.translatey
  };
};


class Calculator extends Component {
  constructor(props){
    super(props);
    var cost = 1;

    var multiOptionItems = Object.values(this.props.scenes).filter((item) => {
      return item.type === "multi-options";
    });

    var numberInputItems = Object.values(this.props.scenes).filter((item) => {
      return item.type === "number-input";
    });

    console.log("multiOptionItems",multiOptionItems);

    console.log(numberInputItems);

    //gather total cost from multi-options
    multiOptionItems.forEach(function (item) {
      cost = cost*item.items[item.selectedItem].multiplier;
    });

    console.log("cost: "+cost);
    //gather total cost from inputs
    numberInputItems.forEach(function (item) {
      item.items.forEach(function (item) {
        cost = cost*item.value;
      });
    });

    console.log("cost: "+cost);

    cost = cost.toFixed(2).replace(/(\d)(?=(\d{3})+\.)/g, '$1,');

    //calculate the Benchmark using 12 as the Yearly modifier, for months
    var mttrposition = numberInputItems[0].items[0].value*12*numberInputItems[0].items[1].value;
    var rcaposition = numberInputItems[0].items[0].value*12*numberInputItems[0].items[2].value;

    this.state = {
      cost : cost,
      mttrbenchmark : this.calculateBenchmark(2000, mttrposition),
      rcabenchmark : this.calculateBenchmark(2000, rcaposition),
    };
  }

  calculateBenchmark(maxmttr, mttr){
    return Math.round(mttr*400/maxmttr);
  }

  render() {
    var translatey = 0;
    var opacity = 1;
    //translatey is set, update it
    if(typeof(this.props.translatey) !== "undefined") {
      translatey = this.props.translatey;
      opacity = this.props.opacity;
    }
    const styles = {
        transform: `translate(0px, ${translatey}px)`,
        opacity : opacity
    };

    return (
      <div className="calculator col-xs-12" style={styles}>
        <div className="main-info">
          <h1 className="splunk-h4">Annual cost of CIEs</h1>
          <h2 className="splunk-h3 money">${this.state.cost}</h2>
          <div className="container">
            <div className="row">
              <div className="col-lg-8 col-lg-offset-2 col-sm-12">
                <p>
                  <a href="" className="splunk-btn sp-btn-default">Get Your Report</a>
                </p>
                <p>
                  This is the estimated annual cost of Critical IT Events (CIEs) to your organization, based on the number your organization experiences per month, and cost figures from companies of a similar size (based on 400 respondents).
                </p>
                <p>
                  A CIE occurs when a business application or infrastructure is down, or has a malfunction, whereby a business process is halted, or users are unable to reasonably carry out tasks and transactions ​
                </p>
              </div>
            </div>
            <div className="row">
              <div className="col-lg-5 col-lg-offset-1">
                <Benchmark key="1" value={this.state.mttrbenchmark} titleString="Mean-Time-To-Resolution (MTTR) benchmark" />
              </div>
              <div className="col-lg-5">
                <Benchmark key="2" value={this.state.rcabenchmark} titleString="Root Cause Analysis (RCA) benchmark " />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const CalculatorContainer = connect(
  mapStateToProps
)(Calculator);

export default CalculatorContainer;
