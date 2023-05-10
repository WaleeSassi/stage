import React, { useState } from 'react';
import { Grid, Box, Card, Stack, Typography, Button } from '@mui/material';

// components
import PageContainer from 'src/components/container/PageContainer';
import CustomTextField from 'src/components/forms/theme-elements/CustomTextField';
import axios from 'axios';
import mesurepollution from './mesure/mesurepollution';

function PredictPollutionRate() {
  const [predictedValue, setPredictedValue] = useState({});
  const handleSubmit = async (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);

    const dataForm = {
      Agricultural_methane_emissions____of_total: data.get(
        'Agricultural_methane_emissions____of_total',
      ),
      Agricultural_nitrous_oxide_emissions____of_total: data.get(
        'Agricultural_nitrous_oxide_emissions____of_total',
      ),
      Methane_emissions__kt_of_CO2_equivalent: data.get('Methane_emissions__kt_of_CO2_equivalent'),
      Methane_emissions_in_energy_sector__thousand_metric_tons_of_CO2: data.get(
        'Methane_emissions_in_energy_sector__thousand_metric_tons_of_CO2',
      ),
      Nitrous_oxide_emissions__thousand_metric_tons_of_CO2_equivalent: data.get(
        'Nitrous_oxide_emissions__thousand_metric_tons_of_CO2_equivalent',
      ),
      Nitrous_oxide_emissions_in_energy_sector____of_total: data.get(
        'Nitrous_oxide_emissions_in_energy_sector____of_total',
      ),
      Other_greenhouse_gas_emissions__HFC__PFC_and_SF6__thousand_metr: data.get(
        'Other_greenhouse_gas_emissions__HFC__PFC_and_SF6__thousand_metr',
      ),
      Methane_emissions____change_from_1990: data.get('Methane_emissions____change_from_1990'),
      Nitrous_oxide_emissions____change_from_1990: data.get(
        'Nitrous_oxide_emissions____change_from_1990',
      ),
      Other_greenhouse_gas_emissions____change_from_1990: data.get(
        'Other_greenhouse_gas_emissions____change_from_1990',
      ),
      Total_greenhouse_gas_emissions____change_from_1990: data.get(
        'Total_greenhouse_gas_emissions____change_from_1990',
      ),
    };

    await axios.post(`http://127.0.0.1:5000/predict-env`, dataForm).then(({ data }) => {
      console.log(data);
      setPredictedValue(data);
    });
  };
  return (
    <>
      <PageContainer title="Predict Pollution Rate" description="this is predict pollution page">
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
          <Grid spacing={0} pt={'5%'} justifyContent="center" sx={{ height: '170vh' }}>
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
              <Card elevation={9} sx={{ p: 4, zIndex: 1, width: '700px', maxWidth: '700px' }}>
                <Typography
                  paddingBottom={'25px'}
                  align="center"
                  fontWeight="700"
                  variant="h2"
                  mb={1}
                >
                  Predict Pollution Rate
                </Typography>
                <form onSubmit={handleSubmit}>
                  <Stack>
                    {mesurepollution.map((e) => {
                      return (
                        <Box key={e.textField}>
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
                  {Object.keys(predictedValue) !== 0 && predictedValue.Predicted_Pollution_Rate && (
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
                        The Predicted Pollution Rate :
                        {predictedValue.Predicted_Pollution_Rate.toFixed(3)}
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

export default PredictPollutionRate;
