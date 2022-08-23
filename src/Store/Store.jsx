import {applyMiddleware,combineReducers,compose, legacy_createStore as createStore } from "redux";
import thunk from "redux-thunk";
import  {reducer as loginReducer}  from "./Auth/Reducer";
 import {reducer as taskReducer}  from "./Task/Reducer"
const rootReducer=combineReducers({
    auth:loginReducer,
    tasks:taskReducer
})
const apply=compose(applyMiddleware(thunk))

export const store=createStore(rootReducer,apply)

