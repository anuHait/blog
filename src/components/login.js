import React,{useState} from 'react'
import {Box, TextField,Button,styled,Typography} from '@mui/material'



function Login() {
  const Component=styled(Box)`
 width:400px;
 margin:auto;
 box-shadow: 5px 5px #888888;
border-radius: 25px;
margin-top:120px`;
const Signbtn=styled(Button)`
   background-color:purple;height:42px;`
const Wrap=styled(Box)`
padding: 25px 35px;
display:flex;
flex-direction:column;
& >div,& >button,&>p {margin-top:10px;}`
const Loginbtn=styled(Button)`
background-color:purple;height:42px;`
const Accnbtn=styled(Button)`
color:purple;height:42px; border-color:purple;`

const [sign,setsign]=useState('login');

const togglesignup=()=>{
sign === 'signup' ?setsign("login"):setsign("signup");
}
const Initial={
  name:"",username:"",password:""
}

const[user,setUser]=useState(Initial);


let name,value;
const handleInputs=(e)=>
{
console.log(e);
name=e.target.name;
value=e.target.value;
setUser({...user,[name]:value});
}
return (

    <div>
    {sign=== 'login'?
      <Component>
     <h1>Hi,welcome back</h1>
     <Wrap>
     <Typography style={{textAlign:'left'}}>Username</Typography>
      <TextField variant="outlined" placeholder='Enter username'/>
      <Typography style={{textAlign:'left'}}>Password</Typography>
      <TextField variant="outlined" placeholder='Enter password'/>
      <Loginbtn variant="contained">Login</Loginbtn>
      <Typography style={{textAlign:'centre'}}> Not registered yet?</Typography>
      <Accnbtn onClick={()=>{togglesignup()}} variant="outlined" >Create an account</Accnbtn>
      </Wrap>
     </Component>
     :
     
     <Component>
    <h1>Signup here</h1>
    <Wrap>
     <Typography style={{textAlign:'left'}}>Name</Typography>
     <TextField variant="outlined" name="name" value={user.name} 
     onChange={handleInputs} placeholder='Enter name'/>
     <Typography style={{textAlign:'left'}}>Username</Typography>
      <TextField variant="outlined"  name="username" value={user.username} 
      onChange={handleInputs} placeholder='Enter username'/>
      <Typography style={{textAlign:'left'}}>Password</Typography>
      <TextField variant="outlined" name="password" value={user.password} 
      onChange={handleInputs} placeholder='Enter password'/>
      <Signbtn variant="contained">SignUp</Signbtn>
      <Typography style={{textAlign:'centre'}}> OR</Typography>
      <Accnbtn variant="outlined">Already have an account</Accnbtn>
      </Wrap>
    </Component>
     }
    </div>
  )
}

export default Login
