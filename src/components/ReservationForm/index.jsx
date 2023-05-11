import React,{useState} from 'react'
import { Typography,TextField,Button,Box,Container } from '@mui/material'

const ReserVationForm = ()=>{
    const [ reservationData,SetReservationData] = useState({
        Name:'',
        Email:'',
        Phone:'',
        State:'',
        Time:'',
        Guests:'',
    });

    const handleChange = (event) =>{
        const {name,value}=event.target;
        SetReservationData((prevData)=>({
            ...prevData,
            [name]:value,
        }));
    };

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <Box py={3} bgcolor="grey.200">
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Make Reservation
                </Typography>
                <form onSubmit={handleSubmit}>
                    <TextField 
                    id="name" 
                    label="Your Name" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Email Id" 
                    label="Email Id" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Phone Number" 
                    label="Phone Number" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange} 
                    />
                    <TextField 
                    id="Date" 
                    label="Date" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange} 
                    InputLabelProps={{shrink:true,}}
                    />
                    <TextField 
                    id="Time" 
                    label="Time" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange}
                    InputLabelProps={{shrink:true,}} 
                    />
                    <TextField 
                    id="Guests" 
                    label="Guests" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    value={reservationData.name}
                    onChange={handleChange}
                    InputLabelProps={{shrink:true,}} 
                    />
                    <Button type="submit" variant="container">
                        Make Reservation</Button>

                </form>

            </Container>
        </Box>
    )
}
export default ReserVationForm;