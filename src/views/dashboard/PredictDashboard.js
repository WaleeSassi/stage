import React, { useState } from 'react';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import axios from 'axios';

function PredictDashboard() {
  const [predictedValue, setPredictedValue] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataForm = {
      Poverty_headcount_at_2_15: data.get('Poverty_headcount_at_2_15'),
      Poverty_gap_at_2_15: data.get('Poverty_gap_at_2_15'),
      Poverty_severity_2_15: data.get('Poverty_severity_2_15'),
    };
    console.log(dataForm);

    await axios.post(`http://127.0.0.1:5000/predict-poverty`, dataForm).then(({ data }) => {
      setPredictedValue(data);
    });
  };
  return (
    <>
      <PageContainer title="Predict Poverty" description="this is predict poverty page">
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
                  Predict Poverty Rate
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="Poverty headcount at 2,15$"
                        mb="5px"
                      >
                        Poverty headcount at 2,15$
                      </Typography>
                      <CustomTextField
                        id="Poverty_headcount_at_2_15"
                        name="Poverty_headcount_at_2_15"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                    <Box mt="25px">
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="Poverty gap at 2,15$"
                        mb="5px"
                      >
                        Poverty gap at 2,15$
                      </Typography>
                      <CustomTextField
                        id="Poverty_gap_at_2_15"
                        name="Poverty_gap_at_2_15"
                        type="text"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                    <Box mt="25px">
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="Poverty severity 2,15$"
                        mb="5px"
                      >
                        Poverty severity 2,15$
                      </Typography>
                      <CustomTextField
                        id="Poverty_severity_2_15"
                        name="Poverty_severity_2_15"
                        type="text"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                  </Stack>
                  {Object.keys(predictedValue) !== 0 && predictedValue.Predicted_Poverty_rate && (
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
                        The Predicted Poverty Rate :
                        {predictedValue.Predicted_Poverty_rate.toFixed(3)}
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

export default PredictDashboard;
