import React,{useState} from 'react'
import './signup.css'
import {Box, TextField,Button,styled,Typography} from '@mui/material'
import { blueGrey } from '@mui/material/colors';
function Signup() {
    const Form=styled(Box)`
    width:400px;
    margin:auto;
    box-shadow: 5px 5px #888888;
   border-radius: 25px;
   margin-top:120px`;
   const Wrap=styled(Box)`
   padding: 25px 35px;
   display:flex;
   flex-direction:column;
   & >div,& >button,&>p {margin-top:10px;}`
   const Signbtn=styled(Button)`
   background-color:purple;height:42px;`
   const Accnbtn=styled(Button)`
   color:purple;height:42px; border-color:purple;`
  
   const [name, setName] = useState('');
    const [username, setUsename] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div>
      <form>
      <Box className='wrap'>
     <h1>Signup here</h1>
     <Box sx={{color:blueGrey}}>
     <Typography style={{textAlign:'centre'}}>Name</Typography>
     <TextField variant="outlined" onChange={(e)=>setName(e.target.value)}
       placeholder='Enter name'/>
     <Typography style={{textAlign:'centre'}}>Username</Typography>
      <TextField variant="outlined"  onChange={(e)=>setUsename(e.target.value)}
      placeholder='Enter username'/>
      <Typography style={{textAlign:'centre'}}>Password</Typography>
      <TextField variant="outlined" onChange={(e)=>setPassword(e.target.value)} placeholder='Enter password'/>
      <br/><br/>
      <Signbtn variant="contained">SignUp</Signbtn>
      <br/>
      <Typography style={{textAlign:'centre'}}> OR</Typography>
      <br/>
      <Accnbtn variant="outlined">Already have an account</Accnbtn>
      </Box>
     </Box>
      </form>
    </div>
  )
}

export default Signup;
