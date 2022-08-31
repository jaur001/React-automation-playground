import { createStore } from "redux";
import configReducer from "./confiReducer/configReducer";


const store = createStore(configReducer);

store.subscribe(() => {
  //console.log("State updated");
  //console.log(store.getState());
});

export default store;
