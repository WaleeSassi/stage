import React, { useState } from 'react';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import axios from 'axios';

function PredictHealth() {
  const [predictedValue, setPredictedValue] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataForm = {
      DeathRate: data.get('DeathRate'),
      IncidenceRate: data.get('IncidenceRate'),
      ServiceRate: data.get('ServiceRate'),
      PrevelanceRate: data.get('PrevelanceRate'),
    };
    console.log(dataForm);

    await axios.post(`http://127.0.0.1:5000/predict-health`, dataForm).then(({ data }) => {
      console.log(data);
      setPredictedValue(data);
    });
  };
  return (
    <>
      <PageContainer
        title="Predict Health condition"
        description="this is predict health condition page"
      >
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
              lg={6}
              xl={3}
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <Card
                elevation={9}
                sx={{ p: 4, marginTop: '7.5%', zIndex: 1, width: '100%', maxWidth: '700px' }}
              >
                <Typography
                  paddingBottom={'25px'}
                  align="center"
                  fontWeight="700"
                  variant="h2"
                  mb={1}
                >
                  Predict Health Condition
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack>
                    <Box>
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="DeathRate"
                        mb="5px"
                      >
                        Death Rate
                      </Typography>
                      <CustomTextField
                        id="DeathRate"
                        name="DeathRate"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                    <Box mt="25px">
                      <Typography
                        variant="subtitle1"
                        fontWeight={600}
                        component="label"
                        htmlFor="IncidenceRate"
                        mb="5px"
                      >
                        Incidence Rate
                      </Typography>
                      <CustomTextField
                        id="IncidenceRate"
                        name="IncidenceRate"
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
                        htmlFor="PrevelanceRate"
                        mb="5px"
                      >
                        Prevelance Rate
                      </Typography>
                      <CustomTextField
                        id="PrevelanceRate"
                        name="PrevelanceRate"
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
                        htmlFor="ServiceRate"
                        mb="5px"
                      >
                        Service Rate in Million $
                      </Typography>
                      <CustomTextField
                        id="ServiceRate"
                        name="ServiceRate"
                        type="text"
                        variant="outlined"
                        fullWidth
                      />
                    </Box>
                  </Stack>
                  {Object.keys(predictedValue) !== 0 &&
                    predictedValue.Predicted_Disease_Condition && (
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
                          The Predicted Health Condition :
                          {predictedValue.Predicted_Disease_Condition}
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

export default PredictHealth;
