import React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

export default function SignIn(props) {
    let navigate = useNavigate(); 

    const [loginInfo, setLoginInfo] = useState(
        {name: "", 
         password: ""})
    
    const routeChange = () =>{ 
        const newUser = props.users.find(b => b.name === loginInfo.name)   
        if(loginInfo.password === newUser.password){
        props.isLoggedIn(true)
        document.cookie= `loggedin= true name=${loginInfo.name}; max-age=60*1000`    
        let path = `/`; 
        navigate(path);
        } else {
            console.log(newUser)
        }
    }
    let handleTextChange = (e) => {
        const newState = { ...loginInfo }
        let loginCategory = e.target.id.split(" ")
        newState[loginCategory[1]] = e.target.value
        setLoginInfo(newState)
        console.log(newState)
    }
  return (
    <Box
      component="form"
      sx={{
        display: 'grid',
        gridGap: "8px",
        margin: "64px auto",
        maxWidth: 300
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="standard-basic name" label="Username" variant="standard" value={loginInfo.name} onChange={handleTextChange} required/>
      <TextField id="standard-basic password" label="Password" variant="standard" type="password" value={loginInfo.password} onChange={handleTextChange}required/>
      <Button color= "primary" variant="contained" onClick={routeChange}> Login</Button>
    </Box>
  );
}