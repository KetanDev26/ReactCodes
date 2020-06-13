import React, { useState } from "react";
import "./styles.css";
import Thank from "./Thank"
import Login from "./Login"
import Register from "./Register"
import Dash from "./Dash"
import {BrowserRouter as Router,Switch,Route} from "react-router-dom"
import { AuthProvider } from "./Auth";
import Private from "./Private";

 function App() {


return(
<AuthProvider>

   <Router>


  <Private path="/Dash" component={Dash}/>
    <Route path="/Login" exact component={Login} />
    <Route path="/Reg" exact component={Register} />
    <Private path="/Thank" component={Thank}/>

</Router>
</AuthProvider>


)
  

}



  export default App
