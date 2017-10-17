import React, { Component } from 'react';
import { connect } from 'react-redux';
import {selectMultiOptionItem} from '../../actions/actions';

const mapStateToProps = (state,ownProps) => {
  return {
    scene: state.scenes[ownProps.sceneID],
    selectedItem : state.scenes[ownProps.sceneID].selectedItem,
    translatey: state.translatey,
    opacity: state.opacity
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onClick: (id, sceneID) => {
      dispatch(selectMultiOptionItem(id, sceneID));
    }
  };
};

const MultiOptionItem = ({item, selected, onClick}) => {
  return (
    <div onClick={onClick} className={selected ? "multi-option-item selected" : "multi-option-item"}>
      <div>
        <span className={"splunk-icon "+item.icon} ></span>
      </div>
      <div className="title">{item.title}</div>
    </div>
  );
};

class MultiOptionComponent extends Component {
  render(){
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

    let selectedItem = this.props.scene.selectedItem;
    let sceneID = this.props.scene.id;

    return (
      <div className="multi-option" style={styles}  ref="multi">
        <div className="col-sm-12 col-lg-8 col-lg-offset-2">
          <h2 className="splunk-h4">{this.props.scene.title}</h2>
        </div>
        <div className="content">
          <div className="flexcontainer">
            {this.props.scene.items.map((item, index)=>{
              return <MultiOptionItem
                        key={item.id}
                        selected={(item.id === selectedItem) ? true : false}
                        item={item}
                        sceneID={sceneID}
                        onClick={() => {
                            this.props.onClick(item.id,sceneID);
                          }
                        }  />;
            })}
          </div>
        </div>
      </div>
    );
  }
}

const MultiOptionContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(MultiOptionComponent);

export default MultiOptionContainer;
