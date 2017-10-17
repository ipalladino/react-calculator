import React, { Component } from 'react';
import Home from '../Home';
import ThankYou from '../ThankYou';
import MultiOptionContainer from '../MultiOption/MultiOption';
import NumberInput from '../NumberInput/NumberInput';
import CalculatorContainer from '../Calculator/Calculator';
import {IndicatorLines} from './Indicators.js';


class Cinema extends Component {
  constructor(props) {
    super(props);

    this.renderedScenes = this.props.scenes.map((item, index)=> {
      switch (item.type) {
        case "home":
          return <Home key={item.id} />;
        case "form":
          return <ThankYou key={item.id} />;
        case "multi-options":
          return <MultiOptionContainer key={item.id} sceneID={item.id}/>;
        case "number-input":
          return <NumberInput key={item.id} sceneID={item.id}/>;
        default:
          return <div>No scene was found</div>;
      }
    });
  }

  componentDidUpdate(){
    console.log(this.refs.cinemaContainer.clientHeight);
    console.log(this.refs.indicatorsRow.clientHeight);
    console.log(this.refs.sceneRow.clientHeight);
    this.props.onUpdatedHeight(this.refs.indicatorsRow.clientHeight + this.refs.sceneRow.clientHeight);
  }

  render(){
    var currentScene = "";

    if(this.props.selectedScene < this.props.scenes.length) {
      currentScene = this.renderedScenes[this.props.selectedScene];
    } else {
      currentScene = <CalculatorContainer  />;
    }

    return (
      <div className="App">
        <div className="container">
          <div className="row title-row">
            <div className="col-lg-8 col-lg-offset-2 col-sm-12">
              <div className="tag">
                {this.props.subtitle}
              </div>
              <h1 className="splunk-h4 main-title">
                {this.props.title}
              </h1>
            </div>
          </div>
        </div>
        <div className="cinema-container in" style={{"height" : this.props.height+"px"}} ref="cinemaContainer">
          <div className="container">
            <div className="row indicators-row" ref="indicatorsRow">
              <div className="indicators-container col-xs-12 col-sm-10 col-sm-offset-1">
                <IndicatorLines
                  scenes={this.props.scenes}
                  selectedIndicator={this.props.selectedScene}
                  onIndicatorClick={this.props.onIndicatorClick}
                  />
              </div>
            </div>
            <div className="row scene-row" ref="sceneRow">
              { currentScene }
            </div>
          </div>
        </div>
        <div className="navigator-bar">
          <div>
            {(this.props.selectedScene < this.props.scenes.length)? <button id="nav-button" onClick={() => {
              setTimeout(() => this.props.onNextClick());
            }} className="splunk-btn sp-btn-blue">Next</button> : ""}
          </div>
          <div>
            {(this.props.selectedScene > 0)? <a onClick={() => this.props.onPrevClick()} className="splunk-btn sp-btn-clear">Back</a> : ""}
          </div>
        </div>
      </div>
    );
  }
}

export default Cinema;
