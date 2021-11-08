import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Button, Typography } from '@mui/material';
import doctor from '../../../images/doctor.png'
import bg from '../../../images/appointment-bg.png'

const appoinmentBg = {
    background: `url(${bg})`,
    backgroundColor: 'rgba(45, 58, 74, 0.7)',
    backgroundBlendMode: 'darken, luminosity',
    marginTop: 150
}

const AppoinmentBanner = () => {
    return (
        <Box style={appoinmentBg} sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
                    <img
                    style={{width: 560, marginTop: '-130px'}}
                        src={doctor} alt="" />
          </Grid>
          <Grid item xs={12} md={6} sx={{
            display: 'flex',
            justifyContent: 'flex-start',
            textAlign: 'left',
            alignItems: 'center'
          
          }}>
              <Box>
                <Typography sx={{my: 5}} variant='h6' style={{ color: '#5CE7EE' }}>
                  Appointment
              </Typography>
              <Typography variant='h3' style={{ color: 'white' }}>
                  Make an Appointment Today 
              </Typography>
              <Typography sx={{my: 5}} variant='h6' style={{color: 'white', fontSize: 16, fontWeight: 450}}>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorem cumque libero facere iste illo distinctio quia.iste illo distinctio quia.
              </Typography>
              <Button sx={{my: 5}} variant="contained">Learn More</Button>
            </Box>
          </Grid>
         
        </Grid>
      </Box>
    );
};

export default AppoinmentBanner;