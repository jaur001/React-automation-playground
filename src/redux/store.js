import { createStore } from "redux";
import ReducerBuilder from "./ReducerBuilder";

const actions = {};

const store = createStore(ReducerBuilder.buildReducer(actions));

store.subscribe(() => {
  console.log("State updated");
  console.log(store.getState());
});

export default store;
