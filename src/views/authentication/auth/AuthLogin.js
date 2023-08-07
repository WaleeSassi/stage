import React from 'react';
import {
  Box,
  Typography,
  FormGroup,
  FormControlLabel,
  Button,
  Stack,
  Checkbox,
} from '@mui/material';
import { Link, useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { UserAuth } from 'src/context/AuthContext';
import { ToastContainer, toast } from 'react-toastify';

const AuthLogin = ({ title, subtitle, subtext }) => {
  const { signIn, signInWithGoogle } = UserAuth();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataForm = {
      email: data.get('email'),
      password: data.get('password'),
    };
    try {
      await signIn(dataForm.email, dataForm.password);
      navigate('/dashboard/overview', {
        state: {
          toast: true,
        },
      });
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <>
      {title ? (
        <Typography fontWeight="700" variant="h2" mb={1}>
          {title}
        </Typography>
      ) : null}
      {subtext}

      <form onSubmit={handleSubmit}>
        <Stack>
          <Box>
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="email"
              mb="5px"
            >
              Email
            </Typography>
            <CustomTextField id="email" name="email" variant="outlined" fullWidth />
          </Box>
          <Box mt="25px">
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
            >
              Password
            </Typography>
            <CustomTextField
              id="password"
              name="password"
              type="password"
              variant="outlined"
              fullWidth
            />
          </Box>
        </Stack>
        <Box mt={'25px'}>
          <Button
            style={{
              backgroundColor: '#004579',
            }}
            variant="contained"
            size="large"
            fullWidth
            type="submit"
          >
            Sign In
          </Button>
        </Box>
      </form>
    </>
  );
};

export default AuthLogin;
