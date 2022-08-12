import ReactIOCException from './ReactIOCException'

export default class JsonPopulator {

  constructor(data) {
    this.data = data;
  }

  populatePageStructure(json) {
    const state = {};
    this.populateComponent(json,state);
    return state;
  }

  populateComponent(json, stateProp) {
    if (!json.hasOwnProperty("render")) throw new ReactIOCException("Missing 'render' attribute!", "'render' attribute is missing in json.");
    this.populateProp(json, "render");
    if (json.requireRedux){
      stateProp[json.id] = json.initialValue ? json.initialValue : {};
      stateProp = stateProp[json.id];
    }
    const propsToPopulate = JsonPopulator.getPropsToPopulate(json);
    if (json.hasOwnProperty("props"))
      this.populateProps(json["props"], propsToPopulate, stateProp)
  }

  populateProps(props, propsToPopulate, stateProp) {
    for (const prop in props) {
      if (propsToPopulate.includes(prop)) this.populateProp(props, prop, stateProp);
    }
  }

  populateProp(json, prop, stateProp) {
    const propValue = json[prop];
    if (typeof propValue === "object") this.populatePropObject(propValue, stateProp);
    else this.populatePropValue(json, prop);
  }

  populatePropObject(propValue, stateProp) {
    if (Array.isArray(propValue)) this.loopJsonArray(propValue, stateProp);
    else if (JsonPopulator.isComponent(propValue)) this.populateComponent(propValue, stateProp)
    else this.loopJson(propValue,stateProp);
  }

  loopJsonArray(jsonArray,stateProp) {
    jsonArray.forEach((prop) => {
      if (typeof prop === "object") this.populatePropObject(prop,stateProp);
    });
  }

  loopJson(json,stateProp) {
    for (const prop in json) {
      if (typeof prop === "object") this.populatePropObject(prop,stateProp);
    }
  }

  populatePropValue(json, prop) {
    if (typeof json[prop] !== 'function') json[prop] = this.data[json[prop]];
  }

  static getPropsToPopulate(json) {
    let propsToPopulate = json["propsToPopulate"];
    if (!propsToPopulate) propsToPopulate = [];
    return propsToPopulate;
  }

  static isComponent(json) {
    return json.hasOwnProperty("render");
  }
}