import thunk from "redux-thunk";
import logger from 'redux-logger'
import { createStore,applyMiddleware,compose } from "redux";
import { createBrowserHistory } from "history";
import { routerMiddleware } from 'connected-react-router';
import createRouteReducer from "../reducer/rootreducer";
const history = createBrowserHistory({basename: "/webapp/" });
const store = createStore(createRouteReducer(history),compose(applyMiddleware(routerMiddleware(history),thunk,logger)));

export default store;