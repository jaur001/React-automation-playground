import { getPageStructure } from "../../../utils/ReactIOCUtils";
import ComponentLoader from "../ComponentLoader/ComponentLoader";

function prepareComponent(populatedComponents,compName){
  const Component = populatedComponents[compName];
    populatedComponents[compName] = (comp, parentId, suffixId) => {
      parentId = parentId ? parentId + "/" : "";
      suffixId = suffixId ? suffixId : "";
      const key = parentId + comp.id + suffixId;
      return <Component key={key} id={key} {...comp.props} />;
    };
}

function prepareComponents(components) {
  const populatedComponents = {...components};
  for (const compName in populatedComponents) {
    prepareComponent(populatedComponents,compName)
  }
  return populatedComponents;
}

function PageLoader(props) {
  const pageStructure = getPageStructure(props.path);
  const components = prepareComponents(props.components);
  return (
    <ComponentLoader
      pageStructure={pageStructure}
      components={components}
      functions={props.functions}
      resources={props.resources}
    />
  );
}

export default PageLoader;
