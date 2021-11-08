import { Button, Grid, Typography } from '@mui/material';
import React from 'react';
import Paper from '@mui/material/Paper';
import BookingModal from '../BookingModal/BookingModal';


const Booking = ({ booking, date }) => {
    const { name, time, space } = booking;
    
    const [openBooking, setBookingOpen] = React.useState(false);
    const handleBookingOpen = () => setBookingOpen(true);
    const handleBookingClose = () => setBookingOpen(false);

    return (
        <>
            <Grid item xs={12} sm={6} md={4}>
                <Paper elevation={3} sx={{py:5}}>
                    <Typography variant='h4' sx={{color: 'info.main', fontWeight: 600 , py: 2}} >
                        {name}
                    </Typography>
                    <Typography variant='h6' sx={{py:2}}>
                        {time}
                    </Typography>
                    <Typography variant='h6' sx={{py:2}}>
                        {space} space are available now
                    </Typography>
                    <Button onClick={handleBookingOpen} variant='contained'>Book Appointment</Button>
                </Paper>
            </Grid>
            
            <BookingModal
                date={date}
                booking={booking}
                openBooking={openBooking}
                handleBookingClose={handleBookingClose}
            ></BookingModal>
        </>
    );
};

export default Booking;