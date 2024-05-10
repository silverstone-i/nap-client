import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Avatar,
} from '@mui/material';
import validator from 'validator'; // Import validator package
import logo from '../assets/nap-logo.png';

const SignIn = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [emailError, setEmailError] = useState('');
  const [passwordError, setPasswordError] = useState('');

  const handleEmailBlur = () => {
    if (!validator.isEmail(email)) {
      setEmailError('Please enter a valid email address');
    } else {
      setEmailError('');
    }
  };

  const handlePasswordBlur = () => {
    if (
      !validator.isStrongPassword(password, {
        minLength: 6,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setPasswordError(
        'Password must be at least 6 characters long, containing at least 1 uppercase letter, 1 number, and 1 special character'
      );
    } else {
      setPasswordError('');
    }
  };

  const handleSignIn = (e) => {
    e.preventDefault();

    // Handle sign-in logic here
    console.log(email, password);
  };

  return (
    <Container component='main' maxWidth='xs'>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginBottom: 3 }}>
        <Avatar
          src={logo}
          alt='Logo'
          sx={{
            width: (theme) => theme.spacing(20),
            height: (theme) => theme.spacing(20),
          }}
        />
      </Box>
      <Typography component='h1' variant='h5'>
        Sign in
      </Typography>
      <Box component='form' onSubmit={handleSignIn} sx={{ mt: 1 }}>
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          id='email'
          label='Email Address'
          name='email'
          autoComplete='email'
          autoFocus
          onBlur={handleEmailBlur}
          onChange={(e) => setEmail(e.target.value)}
          error={Boolean(emailError)}
          helperText={emailError}
        />
        <TextField
          variant='outlined'
          margin='normal'
          required
          fullWidth
          name='password'
          label='Password'
          type='password'
          id='password'
          autoComplete='current-password'
          onBlur={handlePasswordBlur}
          onChange={(e) => setPassword(e.target.value)}
          error={Boolean(passwordError)}
          helperText={passwordError}
        />
        <Button
          type='submit'
          fullWidth
          variant='contained'
          color='primary'
          sx={{ mt: 3, mb: 2 }}
        >
          Sign In
        </Button>
      </Box>
    </Container>
  );
};

export default SignIn;
