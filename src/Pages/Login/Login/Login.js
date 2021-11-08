import { Button, Grid, CircularProgress,Alert } from '@mui/material';
import React from 'react';
import { Container,  Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';
import { NavLink, useLocation, useHistory } from 'react-router-dom';



const Login = () => {
    const [loginData, setLoginData] = useState({});
    const { user, logInUser, isLoading, authError, signInWithGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();


    const handlerLoginSubmit = e => {
        logInUser(loginData.email, loginData.password, location, history);
        e.preventDefault();
    }
    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }
    const handleGoogleSignIn = () => {
        signInWithGoogle(location, history)
    }
    return (
        <Container>
            <Grid container spacing={2}>
                <Grid item sx={{mt:10}} xs={12} md={6}>
                    <Typography variant='body1' gutterBottom>Login</Typography>
                    <form onSubmit={handlerLoginSubmit}>
                        
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="email"
                            name='email'
                            onChange={handleOnChange}
                            label="Your E-mail"
                            variant="standard"
                        />
                        <TextField
                            sx={{ width: "75%", m: 1 }}
                            id="standard-basic"
                            type="password"
                            name="password"
                            onChange={handleOnChange}
                            label="Your Password"
                            variant="standard"
                        />
                        
                        <Button sx={{ width: "75%", m: 1 }} type='submit' variant='contained'>Login</Button>
                        <NavLink style={{textDecoration: 'none'}} to="/register">
                            <Button>New User? Please Register</Button>
                        </NavLink>

                        {
                        isLoading &&   <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">Registration Successful</Alert>}
                    
                    {authError && <Alert severity="error">{ authError}</Alert>}  
                    </form>
                    <h1>________________________________</h1>
                    <Button onClick={handleGoogleSignIn} variant="contained">Google Sign In</Button>
                </Grid>
                <Grid item xs={12} md={6}>
                    <img style={{width: '100%'}} src={ login} alt="" />
                </Grid>
            </Grid>
        </Container>
    );
};

export default Login;