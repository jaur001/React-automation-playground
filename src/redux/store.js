import { createStore } from "redux";
import ReactIocRedux from "../ReactIocRedux";

const actions = {};

const store = createStore(ReactIocRedux.buildReducer(actions));

store.subscribe(() => {
  console.log("State updated");
  console.log(store.getState());
});

export default store;
