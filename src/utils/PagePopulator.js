import ReactIOCException from './ReactIOCException'

export default class PagePopulator {

  constructor(dynamicContent) {
    this.dynamicContent = dynamicContent;
  }

  populatePageStructure(json) {
    const state = {};
    this.populateComponent(json,state);
    return state;
  }

  populateComponent(json, stateProp) {
    if (!json.hasOwnProperty("render")) throw new ReactIOCException("Missing 'render' attribute!", "'render' attribute is missing in json.");
      this.populatePropValue(json, "render",json["render"]);
    if (json.requireRedux){
      stateProp[json.id] = json.initialValue ? json.initialValue : {};
      stateProp = stateProp[json.id];
    }
    if (json.hasOwnProperty("props"))
      this.checkJson(json["props"], stateProp);
  }

  populatePropValue(json, prop, propValue) {
    if (typeof propValue !== 'function'){
      const content = this.dynamicContent[propValue];
      if(prop==="render"){
        json[prop] = (parentId, suffixId, extraProps) => {
          return content(json, parentId, suffixId, extraProps);
        };
      } else json[prop] = content;
    }
  }

  checkObject(obj, stateProp) {
    if (Array.isArray(obj)) this.checkJsonArray(obj, stateProp);
    else if (PagePopulator.isComponent(obj)) this.populateComponent(obj, stateProp);
    else this.checkJson(obj,stateProp);
  }

  checkJsonArray(jsonArray,stateProp) {
    jsonArray.forEach((prop) => {
      if (typeof prop === "object") this.checkObject(prop,stateProp);
    });
  }

  checkJson(json,stateProp) {
    for (const prop in json) {
      const propValue = json[prop];
      if (typeof propValue === "object") this.checkObject(propValue,stateProp);
      else if(this.dynamicContent.hasOwnProperty(propValue)) this.populatePropValue(json, prop ,propValue);
    }
  }

  static isComponent(json) {
    return json.hasOwnProperty("render");
  }
}