export const loadState = (newstate) => {
  return {
    type : "LOAD_STATE",
    newstate
  };
};

export const selectScene = (selectedScene) => {
  return {
    type : "SELECT_SCENE",
    selectedScene : selectedScene
  };
};

export const updateHeight = (height) => {
  return {
    type : "UPDATE_HEIGHT",
    height
  };
};


export const updateTranslatey = (translatey,opacity) => {
  return {
    type : "UPDATE_TRANSLATEY",
    translatey,
    opacity
  };
};

export const nextScene = (translatey, opacity) => {
  return {
    type : "NEXT_SCENE",
    translatey,
    opacity
  };
};

export const previousScene = (translatey, opacity) => {
  return {
    type : "PREV_SCENE",
    translatey,
    opacity
  };
};

export const selectMultiOptionItem = (id,sceneID) => {
  return {
    type: "SELECT_MULTI_OPTION_ITEM",
    sceneID,
    id
  };
};

export const setNumberInput = (e, id,sceneID) => {
  return {
    type: "SET_NUMBER_INPUT",
    sceneID,
    id,
    e
  };
};
