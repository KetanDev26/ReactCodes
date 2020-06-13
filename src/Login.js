import React, { useState, useEffect } from "react"
import {useForm} from "react-hook-form"
import TextField from '@material-ui/core/TextField'
import { Paper, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as yup from "yup"
import { Link } from "react-router-dom";
import {Redirect,withRouter} from "react-router"

import Firebase from "./Firebase";
import {AuthContext} from "./Auth"

//VALIDATIONS
const LoginValidation = yup.object().shape({

  email:yup.string()
  .required()
  .email(),

  password:yup.string()
  .required()
  

})




const Login = ({history})=>{


const{handleSubmit,errors,register,formState}=useForm({
  validationSchema:LoginValidation,
  mode:"onChange"
})


const[error,seterror]=useState(null)
//const[loading,setloading]=useState(false)








const PassData = (Data)=>{
 // e.preventDefault()
  console.log(Data)

//   Loginprops(email,password)
}


const handleLogin = React.useCallback(
  async event => {
    event.preventDefault();
    const { email, password } = event.target.elements;
  
    try {
     // setloading(true)
      await Firebase
        .auth()
        .signInWithEmailAndPassword(email.value, password.value);
       // event.target.reset()
        
      //  seterror(error)
      history.push("/Dash");
      
    
    } catch (error) {
      seterror("Invalid Email/Password")
      console.error(error)
    }
  

    
  },

  [history]
);






const { currentUser } = React.useContext(AuthContext);

if (currentUser) {
  return <Redirect to="/Dash" />;
}

    const StylesPaper={
      height:500,
      width:500,
      position:"relative",
      left:400,
      top:100

    }



    


  return(
    <div style={{backgroundColor:"#8E2DE2",height:700}}>
   <Paper variant="outlined" style={StylesPaper} elevation={1}>
  
     <form onSubmit={handleLogin}>
     <h2 style={{position:"relative",left:200,top:60}}><i>Pro</i><b style={{color:"#8E2DE2"}}>Man</b></h2>
     <div style={{position:"relative",left:105,top:110}}>
        <br></br>
        <TextField
          id="outlined-password-input"
          label="Email"
          type="email"
          name="email"
          autoComplete="Email"
          variant="outlined"
          size="small"
          style={{width:300}}
          inputRef={register}
          error={errors.email}
          
        />
       {errors.email && <p style={{color:"red",fontSize:13,position:"relative",top:-10}}>Email should not be blank</p>}
        </div>

      <div style={{position:"relative",left:105,top:100}}>
        <br></br>
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          name="password"
          autoComplete="password"
          variant="outlined"
          size="small"
          style={{width:300}}
          inputRef={register}
          error={errors.password}
          
        />
        {errors.password && <p style={{color:"red",fontSize:13,position:"relative",top:-10}}>Password should not be blank</p>}
        </div>
      <Button type="submit" variant="contained" color="primary" style={{position:"relative",left:150,top:150,color:"white",width:200,}} disabled={!formState.isValid}>LOGIN</Button>
      <h3 style={{fontSize:14,position:"relative",left:140,top:150,color:"grey"}}>Why to wait!!!<Link to="/Reg" style={{color:"#8E2DE2"}}><b>SignUp</b></Link> & Get Started</h3>
        </form>
        {error!=null ? 
    <div className="error"><h1 className="text"> ⚠ {error}</h1></div>:" "}
    
  </Paper>
  </div>
  )



}



export default withRouter(Login)