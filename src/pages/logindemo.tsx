import React from 'react'
// import { Typography } from '@mui/material';
import {Box,TextField,Typography,Button} from '@mui/material'



function login() {
  return (
   <div>
    <form>
      <Box display="flex" flexDirection={'column'}maxWidth={400} alignItems={'center'}
       justifyContent={'center'}
       margin="auto"
       marginTop={5}
       padding={3}
       borderRadius={5}
       boxShadow={'5px 5px 10px #ccc'}
       sx={{
        ":hover":{
          boxShadow:'10px 10px 20px #ccc',
        }
       }}>
        <Typography variant='h2' padding={3} textAlign='center'>Login</Typography>
        <TextField variant="outlined" margin='normal' type={'text'} placeholder='Username'></TextField>
        <TextField variant="outlined" margin='normal' type={'email'} placeholder='Email'></TextField>
        <TextField variant="outlined" margin='normal' type={'password'} placeholder='Password'></TextField>
        <Button sx={{marginTop:3,borderRadius:3}}
        variant='contained' color='success'>Sign in</Button>


      </Box>
    </form>
   </div>
 
  )
}

export default login