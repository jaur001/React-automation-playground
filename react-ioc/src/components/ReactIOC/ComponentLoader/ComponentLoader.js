import JsonPopulator from "../../../utils/JsonPopulator";
import { useDispatch } from "react-redux";
import { reactIocActionNames } from "../../../redux/confiReducer/ReactIOCActions";
import { useEffect, useMemo, useState } from "react";

function populatePageStructure(pageStructure,components,functions,resources) {
  const populatedPageStructure = {...pageStructure};
  const data = {...components,...functions,...resources};
  const newState = new JsonPopulator(data).populatePageStructure(populatedPageStructure);
  return [newState, populatedPageStructure];
}

function ComponentLoader(props) {
  const [loaded,setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [newState, pageStructure] = useMemo(
    () =>
      populatePageStructure(
        props.pageStructure,
        props.components,
        props.functions,
        props.resources
      ),
    [props.pageStructure, props.components, props.functions, props.resources]
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
  return pageStructure.render(pageStructure);
}

export default ComponentLoader;
