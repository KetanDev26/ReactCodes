import React, { useState } from "react"
import {useForm} from "react-hook-form"
import TextField from '@material-ui/core/TextField';
import { Paper, FormGroup } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import * as yup from "yup"
import { Link } from "react-router-dom";
import Firebase from "./Firebase"
import {withRouter} from "react-router"

//VALIDATIONS
const Lower=/(?=.*[a-z])/
const Upper=/(?=.*[A-Z])/
const Dig=/(?=.*[0-9])/

const RegValidation = yup.object().shape({

  Name:yup.string()
  .required(),
  

  email:yup.string()
  .required()
  .email(),

  
  password:yup.string()
  .required()
  .min(8,"Password must be 8 characters long")
  .matches(Lower,"Password must contain one lowercase letter")
  .matches(Upper,"Password must contain one Uppercase letter")
  .matches(Dig,"Password must contain one digit"),
  
  Cpassword:yup.string()
  .required()
  .oneOf([yup.ref("password")],"Password must be same"),

})




const Register = ({history})=>{
const{handleSubmit,errors,register,formState}=useForm({
  validationSchema:RegValidation,
  mode:"onChange"
})

const PassData = (Data)=>{
  console.log(Data)

}

    const StylesPaper={
      height:600,
      width:500,
      position:"relative",
      left:400,
      top:30,
      
     

    }

    const [error,seterror]=useState(null)






    const handleReg = React.useCallback(
      async event => {
        event.preventDefault();
        const { email, password } = event.target.elements;
      
        try {
         // setloading(true)
        await Firebase
            .auth()
            .createUserWithEmailAndPassword(email.value,password.value)
          //  generateUserDocument(user,{Name})
            
          //  seterror(error)
          history.push("/Thank");
        
          
        
        } catch (error) {
        seterror("Error in Registering")
          console.error(error)
        }
      
    
        
      },
    
    [history]
    );










    // const[Change,Setchange]=useState("Register")


    // const Spinner = ()=>{
    //   Setchange("Please Wait.....")
    //     setTimeout(()=>{
    //       Setchange(Change)
    //     },3000)
    // }


  return(
    <div style={{ backgroundColor:"#8E2DE2",height:700}}>
   <Paper variant="outlined" style={StylesPaper} elevation={3}>
    {error!=null ? <div className="error">{error}</div> : ''}
     <form onSubmit={handleReg}>
     <h2 style={{position:"relative",left:200,top:60}}><i>Pro</i><b style={{color:"#8E2DE2"}}>Man</b></h2>
     <div style={{position:"relative",left:105,top:110}}>
        <br></br>
        <TextField
          id="outlined-password-input"
          label="*Name"
          
          name="Name"
          autoComplete="Name"
          variant="outlined"
          size="small"
          style={{width:300}}
          inputRef={register}
          error={errors.Name}
          
        />
       {errors.Name && <p style={{color:"red",fontSize:13,position:"relative",top:-10}}>{errors.Name.message}</p>}
        </div>
     <div style={{position:"relative",left:105,top:110}}>
        <br></br>
        <TextField
          id="outlined-password-input"
          label="*Email"
          
          name="email"
          autoComplete="email"
          variant="outlined"
          size="small"
          style={{width:300}}
          inputRef={register}
          error={errors.email}
          
        />
       {errors.email && <p style={{color:"red",fontSize:13,position:"relative",top:-10}}>{errors.email.message}</p>}
        </div>

      <div style={{position:"relative",left:105,top:100}}>
        <br></br>
        <TextField
          id="outlined-password-input"
          label="*Password"
          type="password"
          name="password"
          autoComplete="password"
          variant="outlined"
          size="small"
          style={{width:300}}
          inputRef={register}
          error={errors.password}
          
        />
        {errors.password && <p style={{color:"red",fontSize:13,position:"relative",top:-10}}>{errors.password.message}</p>}
        </div>



        <div style={{position:"relative",left:105,top:100}}>
        <br></br>
        <TextField
          id="outlined-password-input"
          label="*Confirm-Password"
          type="password"
          name="Cpassword"
          autoComplete="password"
          variant="outlined"
          size="small"
          style={{width:300}}
          inputRef={register}
          error={errors.Cpassword}
          
        />
        {errors.Cpassword && <p style={{color:"red",fontSize:13,position:"relative",top:-10}}>{errors.Cpassword.message}</p>}
        </div>
      <Button type="submit" variant="contained" color="primary" style={{position:"relative",left:150,top:150,color:"white",width:200,}} disabled={!formState.isValid}>REGISTER</Button>
      <h3 style={{fontSize:14,position:"relative",left:120,top:150,color:"grey"}}>Already have an account? <Link to="/Login" style={{color:"#8E2DE2",textDecoration:"none"}}><b>Login</b></Link> & Get Started</h3>
        </form>
  </Paper>
  </div>
  )
}
export default withRouter(Register)