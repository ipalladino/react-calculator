import { connect } from 'react-redux';
import { nextScene, previousScene, updateTranslatey, updateHeight } from '../../actions/actions';
import { selectScene } from '../../actions/actions';
import Cinema from './Cinema';

const mapStateToProps = state => {
  return {
    scenes: state.scenes,
    selectedScene : state.selectedScene,
    title : state.title,
    subtitle : state.subtitle,
    calculator : state.calculator,
    height : state.height
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onNextClick: () => {
      dispatch(updateTranslatey(-400, 0));
      setTimeout(
        () => dispatch(nextScene(400, 0)),
        450
      );
      setTimeout(
        () => dispatch(updateTranslatey(0, 1)),
        500
      );
    },
    onPrevClick: () => {
      dispatch(updateTranslatey(400, 0));
      setTimeout(
        () => dispatch(previousScene(-400, 0)),
        450
      );
      setTimeout(
        () => dispatch(updateTranslatey(0, 1)),
        500
      );
    },
    onIndicatorClick : (id) => {
      //disabled click of item directly
      //dispatch(selectScene(id));
    },
    onUpdatedHeight : (updatedHeight) => {
      dispatch(updateHeight(updatedHeight));
    }
  };
};

const CinemaContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Cinema);

export default CinemaContainer;
