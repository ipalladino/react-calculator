import initialState from '../state.json';

//reducers
function calculatorApp(state, action) {
  if (typeof state === 'undefined') {
    return initialState;
  }
  var scenes = [];
  switch (action.type) {
    case "LOAD_STATE":
      return Object.assign({}, state, action.newstate);
    case "PREV_SCENE":
      console.log("PREV_SCENE");
      if(state.selectedScene > 0) {
        return Object.assign({}, state, {
          selectedScene : state.selectedScene-1,
          translatey : action.translatey,
          opacity : action.opacity
        });
      }
      return state;
    case "NEXT_SCENE":
      console.log("NEXT_SCENE:");
      if(state.selectedScene < state.scenes.length) {
        return Object.assign({}, state, {
          selectedScene : state.selectedScene+1,
          translatey : action.translatey,
          opacity : action.opacity
        });
      }
      return state;
    case "SELECT_SCENE":
      console.log("SELECT_SCENE");
      return Object.assign({}, state, {
        selectedScene : action.selectedScene
      });
    case "SELECT_MULTI_OPTION_ITEM":
      console.log("SELECT_MULTI_OPTION_ITEM");
      scenes = state.scenes.slice(0);
      scenes[action.sceneID].selectedItem = action.id;
      return Object.assign({}, state, {
        scenes
      });
    case "SET_NUMBER_INPUT":
      console.log("SET_NUMBER_INPUT");
      scenes = state.scenes.slice(0);
      scenes[action.sceneID].items[action.id].value = action.e.target.value;
      console.log(scenes[action.sceneID].items[action.id].value);
      return Object.assign({}, state, {
        scenes
      });
    case "UPDATE_TRANSLATEY":
      return Object.assign({}, state, {
        translatey : action.translatey,
        opacity : action.opacity
      });
    case "UPDATE_HEIGHT":
      return Object.assign({}, state, {
        height : action.height
      });
    default:
      console.log("default");
      return state;
  }
}





export default calculatorApp;
