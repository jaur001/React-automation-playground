const buildReducer = (extraActions) => {
  const actionList = {
    ...actions,
    ...extraActions
  }
  return (state = null, action) => {
    if(actionList.hasOwnProperty(action.type))
      return actionList[action.type](state,action);
    return state;
  };
}

const actions = {
  updateProperty: (state, action) => {
    const newState = { ...state };
    StateController.updateProperty(action.id,newState,action.value)
    return newState;
  },
  populateState: (state,action) => {
    return action.newState;
  },
  getNames: () => {
    const names = {};
    for (const key in actions) {
      names[key] = key;
    }
    return names;
  }
}

const StateController = {
  getProperty: (id, state) => {
    const [prop,compId] = StateController.searchProperty(id,state);
    return prop[compId];
  },
  updateProperty: (id,state,value) => {
    const [prop,compId] = StateController.searchProperty(id,state);
    prop[compId] = value;
    return state;
  },
  searchProperty: (id,state) => {
    const path = id.split("/");
    const parentId = path.slice(0,path.length-1);
    const compId = path[path.length-1];
    let prop = state;
    parentId.forEach(key => {
      if(prop.hasOwnProperty(key)) prop = prop[key];
    });
    return [prop,compId];
  }  
}

const ReactIocRedux = {
  buildReducer,
  actionNames: actions.getNames(),
  getProperty: StateController.getProperty
}
export default ReactIocRedux;