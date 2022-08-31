import { getPageStructure } from "../../../utils/ReactIOCUtils";
import ComponentLoader from "../ComponentLoader/ComponentLoader";

function prepareComponent(populatedComponents,compName){
  const Component = populatedComponents[compName];
    populatedComponents[compName] = (comp, parentId, suffixId, extraProps) => {
      parentId = parentId ? parentId + "/" : "";
      suffixId = suffixId ? suffixId : "";
      const key = parentId + comp.id + suffixId;
      return <Component key={key} id={key} {...comp.props} {...extraProps} />;
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
  const dynamicContent = {...components,...props.functions,...props.resources};
  return (
    <ComponentLoader
      pageStructure={pageStructure}
      dynamicContent={dynamicContent}
    />
  );
}

export default PageLoader;
