import React, { useState } from 'react';
import { Box, Typography, Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';

import CustomTextField from '../../../components/forms/theme-elements/CustomTextField';
import { Stack } from '@mui/system';
import { UserAuth } from 'src/context/AuthContext';

const AuthRegister = ({ title, subtitle, subtext }) => {
  const [error, setError] = useState('');
  const [errorPass, setErrorPass] = useState('');
  const [pass, setPass] = useState('');
  const { createUser } = UserAuth();
  const navigate = useNavigate();
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataForm = {
      name: data.get('firstName'),
      lastname: data.get('lastName'),
      email: data.get('email'),
      password: data.get('password'),
    };
    console.log(dataForm);
    const repeat_pass = data.get('repeat-password');
    if (repeat_pass !== dataForm.password) {
      setErrorPass('Password Does Not match');
    } else {
      try {
        await createUser(dataForm.email, dataForm.password, dataForm.lastname, dataForm.name);
        navigate('/dashboard/economy', {
          state: {
            toast: true,
          },
        });
      } catch (e) {
        setError(e.message);
        console.log(e.message);
      }
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

      <Box>
        <form onSubmit={handleSubmit}>
          <Stack>
            <Box display={'flex'} justifyContent={'space-around'}>
              <div>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="fname"
                  mb="5px"
                >
                  First Name
                </Typography>
                <CustomTextField id="name" name="firstName" variant="outlined" />
              </div>
              <div>
                <Typography
                  variant="subtitle1"
                  fontWeight={600}
                  component="label"
                  htmlFor="lname"
                  mb="5px"
                >
                  Last Name
                </Typography>
                <CustomTextField id="lname" name="lastName" variant="outlined" />
              </div>
            </Box>

            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="email"
              mb="5px"
              mt="25px"
            >
              Email Address
            </Typography>
            <CustomTextField type="email" name="email" id="email" variant="outlined" fullWidth />

            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
              mt="25px"
            >
              Password
            </Typography>
            <CustomTextField
              name="password"
              id="password"
              type="password"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                setPass(e.currentTarget.value);
              }}
            />
            <Typography
              variant="subtitle1"
              fontWeight={600}
              component="label"
              htmlFor="password"
              mb="5px"
              mt="25px"
            >
              Repeat Password
            </Typography>
            <CustomTextField
              type="password"
              name="repeat-password"
              id="password"
              variant="outlined"
              fullWidth
              onChange={(e) => {
                if (e.currentTarget.value !== pass) {
                  setErrorPass('Password Does Not match');
                } else {
                  setErrorPass('');
                }
              }}
            />
            {errorPass !== '' && (
              <Typography
                variant="subtitle1"
                fontWeight={600}
                component="label"
                htmlFor="email"
                color={'red'}
              >
                {errorPass}
              </Typography>
            )}
          </Stack>
          <Button
            color="primary"
            variant="contained"
            size="large"
            fullWidth
            type="submit"
            //   component={Link}
            //   to="/auth/login"
          >
            Sign Up
          </Button>
        </form>
      </Box>
      {subtitle}
    </>
  );
};

export default AuthRegister;
