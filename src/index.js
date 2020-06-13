import React from "react";
import ReactDOM from "react-dom";
import {Provider} from "react-redux"
//import Store from "./Store"
import App from "./App";



const rootElement = document.getElementById("root");
// const Store=createStore( Rootred,
  
//   compose(
//    applyMiddleware(thunk.withExtraArgument({getFirebase})),
//    reactReduxFirebase(Firebase)
//    )
// )
//const Store=createStore( Rootred,applyMiddleware(thunk))

ReactDOM.render(
  
 
    <App />
  
  ,
  rootElement
);

