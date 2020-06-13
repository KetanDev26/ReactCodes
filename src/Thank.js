import React from "react"
import {Link} from "react-router-dom"
function Thank(){


  

  return(

    <div className="Thank">
  <svg height="50pt" viewBox="0 0 512 512" width="40pt" xmlns="http://www.w3.org/2000/svg">
  <path d="m256 0c-141.164062 0-256 114.835938-256 256s114.835938 256 256 256 256-114.835938 256-256-114.835938-256-256-256zm0 0" fill="#2196f3"/>
  <path d="m385.75 201.75-138.667969 138.664062c-4.160156 4.160157-9.621093 6.253907-15.082031 6.253907s-10.921875-2.09375-15.082031-6.253907l-69.332031-69.332031c-8.34375-8.339843-8.34375-21.824219 0-30.164062 8.339843-8.34375 21.820312-8.34375 30.164062 0l54.25 54.25 123.585938-123.582031c8.339843-8.34375 21.820312-8.34375 30.164062 0 8.339844 8.339843 8.339844 21.820312 0 30.164062zm0 0" fill="#fafafa"/>
  </svg>
  <h2 style={{position:"absolute",color:"white",top:100,left:170}}>Thank You For Registering With Us!!!</h2>
      <h4 style={{fontSize:18,position:"relative" ,left:70}}>Now you can  <Link to="/Login"><b>Login</b></Link> and start your new experience with <i>Pro</i><b>Man</b></h4>
      </div>
  )
}

export default Thank