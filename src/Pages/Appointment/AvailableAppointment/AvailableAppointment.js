import { Grid , Typography, Container} from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';


const bookings = [
    {
        id: 1,
        name: 'Tech Orthodonics',
        time: '08.00 AM - 09.00AM',
        space: 10
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '08.00 AM - 09.00AM',
        space: 8
    },
    {
        id: 3,
        name: 'Tech Cleaning',
        time: '08.00 AM - 09.00AM',
        space: 10
    },
    {
        id: 4,
        name: 'Tech Orthodonics',
        time: '08.00 AM - 09.00AM',
        space: 10
    },
    {
        id: 5,
        name: 'Tech Orthodonics',
        time: '08.00 AM - 09.00AM',
        space: 10
    },
    {
        id: 6,
        name: 'Tech Orthodonics',
        time: '08.00 AM - 09.00AM',
        space: 10
    }
]





const AvailableAppointment = ({date}) => {
    return (
        <Container>
            <Typography variant='h3' sx={{ color: 'info.main' , py: 8}}>Available Appointments on {date.toDateString()}</Typography>
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Booking
                        key={booking.id}
                        booking={booking}
                        date={date}
                    ></Booking>)
               }
            </Grid>
        </Container>
    );
};

export default AvailableAppointment;