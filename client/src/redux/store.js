import { createStore, applyMiddleware, compose } from "redux";
import Reducer from "./reducer";
import thunk from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(Reducer,
    composeEnhancers(applyMiddleware(thunk))
);