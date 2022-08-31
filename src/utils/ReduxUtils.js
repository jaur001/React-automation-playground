export function getProperty(id, state){
  const [prop,compId] = searchProperty(id,state);
  return prop[compId];
}

export function updateProperty(id,state,value){
  const [prop,compId] = searchProperty(id,state);
  prop[compId] = value;
  return state;
}

function searchProperty(id,state){
  const path = id.split("/");
  const parentId = path.slice(0,path.length-1);
  const compId = path[path.length-1];
  let prop = state;
  parentId.forEach(key => {
    if(prop.hasOwnProperty(key)) prop = prop[key];
  });
  return [prop,compId];
}