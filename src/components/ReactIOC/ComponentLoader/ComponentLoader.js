import PagePopulator from "../../../utils/PagePopulator";
import { useDispatch } from "react-redux";
import { reactIocActionNames } from "../../../redux/confiReducer/ReactIOCActions";
import { useEffect, useMemo, useState } from "react";

function populatePageStructure(pageStructure,dynamicContent) {
  const populatedPageStructure = {...pageStructure};
  const newState = new PagePopulator(dynamicContent).populatePageStructure(populatedPageStructure);
  return [newState, populatedPageStructure];
}

function ComponentLoader(props) {
  const [loaded,setLoaded] = useState(false);
  const dispatch = useDispatch();
  const [newState, pageStructure] = useMemo(
    () => {
      return populatePageStructure(props.pageStructure,props.dynamicContent);
    },
    [props.pageStructure, props.dynamicContent]
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
