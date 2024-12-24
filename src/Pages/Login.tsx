
import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';

import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography, { TypographyProps } from '@mui/material/Typography';
import Container from '@mui/material/Container';

import { Link, useNavigate } from 'react-router-dom';
import { UserContext } from '../Context/Authcontext';





function Copyright(props:TypographyProps) {
  return (
    <Typography  color="text.secondary" align="center" paddingBottom={4} {...props}>
      {'Copyright © '}
      <Link color="inherit" to='./'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}



export  function Login() {
  const[email,setEmail]=React.useState('')
  const[password,setPassword]=React.useState('')
  const navigate=useNavigate()
  
const {signIn}=React.useContext(UserContext)

 
  const handleSubmit =async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    try {
        const userss=signIn({email,password})
       
    if(userss){
      alert('login successfull')
      navigate('../')
    }else{
          alert('login credential is not correct')
        
    }
    } catch (error) {
        console.error('Error during sign in:', error);
      alert('An error occurred during login. Please try again.');
      
    }
  

    
   
  };

  return (
    <div  style={{ backgroundImage:"url(./assests/signupimg.jpg)",border: '2px solid red'}}>
      <Container component="main" sx={{width:'70vh',boxShadow:4,marginY:"24vh",backgroundColor:'white'}}  >
        <CssBaseline />
        <Box
          sx={{
           display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Box sx={{display:'flex',alignItems:'center',paddingTop:'18px'}}>
            <Avatar sx={{ m: 1, bgcolor: 'primary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Login
          </Typography>
          </Box>
          
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 4 }}>
            <Grid container spacing={2}>
             
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  value={email}
                  onChange={(e)=>setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  autoComplete="new-password"
                  value={password}
                  onChange={(e)=>setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Login
            </Button>
            <Grid container  >
              <Grid item  sx={{margin:'auto',fontSize:'25px'}}>
                
                  Don't create an Account Yet? <Link to='/signup'>Sign up</Link> First
                
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright />
      </Container>
    </div>
  );
}
export default Login