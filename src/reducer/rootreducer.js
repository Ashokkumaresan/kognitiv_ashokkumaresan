import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import hotelReducer from "./hotelreducer";


const createRouteReducer = (history) => combineReducers({
    router: connectRouter(history),
    hotelReducer
});

export default createRouteReducer;