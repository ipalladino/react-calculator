import React, { Component } from 'react';
import { connect } from 'react-redux';
import {setNumberInput} from '../../actions/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    scene: state.scenes[ownProps.sceneID],
    translatey: state.translatey,
    opacity: state.opacity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    handleChange : (e, id, sceneID) => {
      dispatch(setNumberInput(e, id, sceneID));
    }
  };
};

const NumberInputItem = ({title, subtitle, value, id, sceneID, onChange}) => {
  return (
    <div className="number-input-item">
      <div className="title">{title}</div>
      <div><input type="number" defaultValue={value} onChange={(e) =>  onChange(e, id, sceneID) } className="form-control"  /></div>
      <div className="item-subtitle">{subtitle}</div>
    </div>
  );
};

class NumberInput extends Component {
  render() {
    var translatey = 0;
    var opacity = 1;
    //translatey is set, update it
    if(typeof(this.props.translatey) !== "undefined") {
      translatey = this.props.translatey
      opacity = this.props.opacity
    }
    const styles = {
        transform: `translate(0px, ${translatey}px)`,
        opacity : opacity
    };

    return (
      <div className="number-input" style={styles}>
        <div className="col-sm-12 col-lg-8 col-lg-offset-2">
          <h2 className="splunk-h4">{this.props.scene.title}</h2>
        </div>
        <div className="col-sm-12 col-lg-8 col-lg-offset-2">
          <div className="row">
            <div className="number-input-items col-xs-12">
              {this.props.scene.items.map(item => (
                <NumberInputItem key={item.id} {...item} id={item.id} onChange={this.props.handleChange} sceneID={this.props.scene.id} />
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

const NumberInputContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(NumberInput);

export default NumberInputContainer;
