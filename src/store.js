import { createStore, combineReducers } from "redux";
import listToDoReduce from "./reducers/listToDoReducer";

const appReducer = combineReducers({
  listToDoReduce: listToDoReduce,
});

export default createStore(appReducer);
