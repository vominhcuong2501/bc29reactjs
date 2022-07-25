import { combineReducers, createStore, compose, applyMiddleware } from "redux";
// import { countReducer, phoneReducer, thuDoReducer } from "./Reducers";
import * as reducers from "./Reducers";
import reduxThunk from 'redux-thunk'

// Object literals
const rootReducer = combineReducers({
    ...reducers,
    // countReducer, phoneReducer, thuDoReducer
  });


export const store = createStore(
  rootReducer,
  compose(applyMiddleware(reduxThunk),window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())
);
