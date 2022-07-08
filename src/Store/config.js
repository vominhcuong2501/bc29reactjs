import { combineReducers, createStore } from "redux";
// import { countReducer, phoneReducer, thuDoReducer } from "./Reducers";
import * as reducers from "./Reducers";

// Object literals
const rootReducer = combineReducers({
    ...reducers,
    // countReducer, phoneReducer, thuDoReducer
  });


export const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
