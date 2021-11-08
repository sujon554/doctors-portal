import React from 'react';
// import { experimentalStyled as styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Service from '../Service/Service';
import Typography from '@mui/material/Typography';

import fluoride from  '../../../images/fluoride.png'
import cavity from  '../../../images/cavity.png'
import whitening from  '../../../images/whitening.png'

const services = [
    {
        name: 'Fluoride Treatement',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorem cumque libero facere iste illo distinctio quia. Similique accusamus laborum consectetur quod! Expedita, facere molliti',
        img: fluoride
    },
    {
        name: 'Cavity Filling',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorem cumque libero facere iste illo distinctio quia. Similique accusamus laborum consectetur quod! Expedita, facere molliti',
        img: cavity
    },
    {
        name: 'Teeth Whitening',
        description: 'Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquid dolorem cumque libero facere iste illo distinctio quia. Similique accusamus laborum consectetur quod! Expedita, facere molliti',
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container>
                <Typography sx={{fontWeight: 300, p:2}} variant="h4" component="div">
                        OUR SERVICES
                </Typography >
                <Typography sx={{fontWeight: 500, p:2}} variant="h2" component="div">
                        Services We Provide
                </Typography >
                
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}
                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;