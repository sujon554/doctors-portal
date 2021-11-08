import { Button, Grid, Alert } from '@mui/material';
import React from 'react';
import CircularProgress from '@mui/material/CircularProgress';
import { Container,  Typography } from '@mui/material';
import TextField from '@mui/material/TextField';
import { useState } from 'react'
import login from '../../../images/login.png'
import useAuth from '../../../hooks/useAuth';
import { NavLink, useHistory } from 'react-router-dom';



const Register = () => {
    const [loginData, setLoginData] = useState({});
    const { registerUser, isLoading, user, authError } = useAuth();
    const history = useHistory();
    


    const handleOnChange = e => {
        const field = e.target.name;
        const value = e.target.value;
        const newLoginData = { ...loginData };
        newLoginData[field] = value;
        setLoginData(newLoginData);
    }

    const handlerLoginSubmit = e => {
        if (loginData.password !== loginData.password2) {
            alert('your Password do not match')
            return 
        }
        registerUser(loginData.email, loginData.password, loginData.name, history)
        e.preventDefault();
    }






    return (
        <Container>
        <Grid container spacing={2}>
            <Grid item sx={{mt:10}} xs={12} md={6}>
                <Typography variant='body1' gutterBottom>Register</Typography>
                { !isLoading && <form onSubmit={handlerLoginSubmit}>
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        label="Your Name"
                        name='email'
                        onBlur={handleOnChange}
                        type="text"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        type="email"
                        name='email'
                        onBlur={handleOnChange}
                        label="Your E-mail"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        type="password"
                        name="password"
                        onBlur={handleOnChange}
                        label="Your Password"
                        variant="standard"
                    />
                    <TextField
                        sx={{ width: "75%", m: 1 }}
                        id="standard-basic"
                        type="password"
                        name="password2"
                        onBlur={handleOnChange}
                        label="Retype Password"
                        variant="standard"
                    />
                    
                    <Button sx={{ width: "75%", m: 1 }} type='submit' variant='contained'>Register</Button>
                    <NavLink style={{textDecoration: 'none'}} to="/login">
                        <Button>Already registered? Please Login</Button>
                    </NavLink>
                    </form>}
                    {
                        isLoading &&   <CircularProgress />
                    }
                    {user?.email && <Alert severity="success">Registration Successful</Alert>}
                    
                    {authError && <Alert severity="error">{ authError} Failed</Alert>}                                               }
            </Grid>
            <Grid item xs={12} md={6}>
                <img style={{width: '100%'}} src={ login} alt="" />
            </Grid>
        </Grid>
    </Container>
    );
};

export default Register;