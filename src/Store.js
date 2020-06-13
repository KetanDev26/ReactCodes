import {createStore, applyMiddleware,compose} from 'redux'
//mport AuthRed from "./Reducers/AuthRed"
import Rootred from "./Reducers/RootReducer"
import AuthRed from "./Reducers/AuthRed"
import thunk from "redux-thunk"
import {getFirebase,reactReduxFirebase} from "react-redux-firebase"
import Firebase from "./Firebase"


export const Store=createStore( AuthRed,applyMiddleware(thunk))




