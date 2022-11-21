import React,{useState} from 'react'
import './signup.css'
function Signin() {
  const [name, setName] = useState('');
    const [username, setUsername] = useState('');
    const [password,setPassword] = useState('');

  return (
    <div className='component'>
    <h1>Signup here</h1>
     <p className='txt'>Name</p>
    <input className='inpufield' type="text" onChange={(e)=>setName(e.target.value)}
    placeholder='Enter name' />
    <p className='txt'>Username</p>
    <input className='inpufield' type="text" onChange={(e)=>setUsername(e.target.value)}
    placeholder='Enter username' />
    <p className='txt'>Password</p>
    <input className='inpufield' type="text" onChange={(e)=>setPassword(e.target.value)}
    placeholder='Enter password' />
    
    <button className='Signbtn'>SignUp</button>
    
    <h3>OR</h3>
    <button className='Accnbtn'>Already have an account?</button>
    </div>
  )
}

export default Signin
