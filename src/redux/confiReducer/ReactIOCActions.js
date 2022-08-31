import { updateProperty } from "../../utils/ReduxUtils";

export const reactIocActions = {
  "updateProperty": (state, action) => { // Update current config file with different data
    const newState = { ...state };
    updateProperty(action.id,newState,action.value)
    return newState;
  },
  "populateState": (state,action) => {
    return action.newState;
  }
}

export const reactIocActionNames = {
  updateProperty: "updateProperty",
  populateState: "populateState"
};