import ComponentPopulator from "./ComponentPopulator";
import { useDispatch } from "react-redux";
import ReactIocRedux from "../../ReactIocRedux";
import { useEffect, useMemo, useState } from "react";

function populateComponents(pageStructure,components,resources) {
  const populatedPageStructure = {...pageStructure};
  const newState = new ComponentPopulator(components,resources).populateComponents(populatedPageStructure);
  return [newState, populatedPageStructure];
}

function reduxIsRequired(newState){
  return Object.keys(newState).length >0;
}

function ComponentLoader(props) {
  const [reduxLoaded,setReduxLoaded] = useState(false);
  const dispatch = useDispatch();
  const [newState, pageStructure] = useMemo(
    () => {
      return populateComponents(props.pageStructure,props.components,props.resources);
    },
    [props.pageStructure,props.components,props.resources]
  );
  useEffect(() => {
    if(reduxIsRequired(newState) && !reduxLoaded){
      dispatch({
        type: ReactIocRedux.actionNames.populateState,
        newState: newState,
      });
      setReduxLoaded(true);
    }
  }, [dispatch, newState, reduxLoaded]);
  if (!reduxLoaded) return <></>;
  return pageStructure.render();
}
export default ComponentLoader;