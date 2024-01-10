import data from "../reducers/data";
import points from "../reducers/points";
import {legacy_createStore as createStore,combineReducers,applyMiddleware} from "redux";
import {thunk} from 'redux-thunk';
let mainStore = combineReducers({
    points:points,
    data:data,
})
let store = createStore(mainStore,applyMiddleware(thunk));

export default store;


