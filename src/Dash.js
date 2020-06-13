import React, { useContext } from "react"

import Firebase from "./Firebase"
import {AuthContext} from  "./Auth"
function Dash(){


      const User=useContext(AuthContext)
      const {Name}=User

  return(
      <div>
    <div>
        Hello Welcome !!!!!!!!
        <h1>You are logged in</h1>
        <button onClick={()=>Firebase.auth().signOut()}>LOGOUT</button>
      </div>

      <div>

      Hi!!!!{Name}


        </div>



      </div>
  )
}

export default Dash