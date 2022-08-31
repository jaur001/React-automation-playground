import {reactIocActions} from "./ReactIOCActions";

const actions = {
  ...reactIocActions
}

// Reducer for configuration state
const configReducer = (state = null, action) => {
  if(actions.hasOwnProperty(action.type))
    return actions[action.type](state,action);
  return state;
};

export default configReducer;