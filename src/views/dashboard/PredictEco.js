import React, { useState } from 'react';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import axios from 'axios';
import { ecomesure } from './mesure/mesurepollution';

function PredictEco() {
  const [predictedValue, setPredictedValue] = useState({});

  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataForm = {
      Agriculture: data.get('Agriculture'),
      Non_agriculture: data.get('Non_agriculture'),
      Industry: data.get('Industry'),
      Services: data.get('Services'),
      Notclassified: data.get('Notclassified'),
    };
    console.log(dataForm);

    await axios.post(`http://127.0.0.1:5000/predict-eco`, dataForm).then(({ data }) => {
      setPredictedValue(data);
    });
  };
  return (
    <>
      <PageContainer title="Predict Income Level" description="this is predict economy page">
        <Box
          sx={{
            position: 'relative',

            '&:before': {
              content: '""',
              background: 'radial-gradient(#d2f1df, #d3d7fa, #bad8f4)',
              backgroundSize: '400% 400%',
              animation: 'gradient 15s ease infinite',
              position: 'absolute',
              height: '100%',
              width: '100%',
              opacity: '0.3',
            },
          }}
        >
          <Grid spacing={0} justifyContent="center" sx={{ height: '100vh' }}>
            <Grid
              item
              xs={12}
              sm={12}
              lg={8}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                elevation={9}
                sx={{ p: 4, marginTop: '7.5%', zIndex: 1, width: '500px', maxWidth: '700px' }}
              >
                <Typography
                  paddingBottom={'25px'}
                  align="center"
                  fontWeight="700"
                  variant="h2"
                  mb={1}
                >
                  Predict Income Level
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack>
                    {ecomesure.map((e) => {
                      return (
                        <Box>
                          <Typography
                            variant="subtitle1"
                            fontWeight={600}
                            component="label"
                            htmlFor={e.nameField}
                            mb="5px"
                          >
                            {e.nameField}
                          </Typography>
                          <CustomTextField
                            id={e.textField}
                            name={e.textField}
                            variant="outlined"
                            fullWidth
                          />
                        </Box>
                      );
                    })}
                  </Stack>
                  {Object.keys(predictedValue) !== 0 && predictedValue.Predicted_Income_Level && (
                    <Box
                      mt={'25px'}
                      sx={{
                        textAlign: 'center',
                        padding: '20px',
                        border: '2px solid red',
                        borderRadius: '3px',
                      }}
                    >
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="Poverty severity 2,15$"
                        mb="5px"
                      >
                        The Predicted Income Level :{predictedValue.Predicted_Income_Level}
                      </Typography>
                    </Box>
                  )}
                  <Box mt={'25px'}>
                    <Button
                      color="primary"
                      variant="contained"
                      size="large"
                      fullWidth
                      type="submit"
                    >
                      Predict{' '}
                    </Button>
                  </Box>
                </form>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </PageContainer>
    </>
  );
}

export default PredictEco;
