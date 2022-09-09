import PagePopulator from "../../../utils/PagePopulator";
import { useDispatch } from "react-redux";
import { reactIocActionNames } from "../../../redux/confiReducer/ReactIOCActions";
import { useEffect, useMemo, useState } from "react";

function populatePageStructure(pageStructure,components,resources) {
  const populatedPageStructure = {...pageStructure};
  const newState = new PagePopulator(components,resources).populatePageStructure(populatedPageStructure);
  return [newState, populatedPageStructure];
}

function ComponentLoader(props) {
  const [loaded,setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [newState, pageStructure] = useMemo(
    () => {
      return populatePageStructure(props.pageStructure,props.components,props.resources);
    },
    [props.pageStructure,props.components,props.resources]
  );
  useEffect(() => {
    if(!loaded){
      dispatch({
        type: reactIocActionNames.populateState,
        newState: newState,
      });
      setLoaded(true);
    }
  }, [dispatch, newState, loaded]);
  if (!loaded) return <></>;
  return pageStructure.render();
}

export default ComponentLoader;
