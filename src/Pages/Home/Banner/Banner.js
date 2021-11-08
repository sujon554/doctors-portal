import { Button, Container, Grid, Typography } from '@mui/material';
import { Box } from '@mui/system';

import React from 'react';
import bg from '../../../images/bg.png'
import chair from '../../../images/chair.png'

const bgStyle = {
    background: `url(${bg})`,
  
}

const verticalCenter = {
    display: 'flex',
    alignItems: 'center',
    height: 400
}


const Banner = () => {
    return (
        <Container style={bgStyle} sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid sx={{...verticalCenter, textAlign: 'left'}} item xs={12} md={6}>
                    <Box>
                    <Typography variant='h3' sx={{mt: 10}}>
                        Your New Smile <br />
                        Starts Here

                    </Typography>
                    <Typography variant='h6' sx={{my: 3, fontSize: 14, color: 'gray'}}>
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorem cumque libero facere iste illo distinctio quia. Similique accusamus laborum consectetur quod! Expedita, facere molliti
                    </Typography>
                    <Button sx={{my: 5}} variant="contained">Learn More</Button>
                    </Box>
                </Grid>
                <Grid item xs={12} md={6} style={verticalCenter} >
                    <img style={{width: 400}} src={chair} alt="" />
                </Grid>
            </Grid>

        </Container>
    );
};

export default Banner;