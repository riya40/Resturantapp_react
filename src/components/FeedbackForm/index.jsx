import React,{useState} from 'react'
import { Typography,TextField,Button,Box,Container } from '@mui/material'

const FeedbackForm = ()=>{

    const handleSubmit = (event) =>{
        event.preventDefault();
    };

    return(
        <Box ml={3} mr={3} py={3}>
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Any suggestions
                </Typography>
                <form onSubmit={handleSubmit}>
                <TextField 
                    id="Name" 
                    label="Your Name" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    />
                    <TextField 
                    id="Email Id" 
                    label="Email Id" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    />
                    <TextField 
                    id="Feedback" 
                    label="Feedback" 
                    variant="outlined"
                    margin='normal'
                    fullWidth
                    required
                    />
                    
                    <Button type="submit" variant="container">
                        Submit Feedback
                    </Button>

                </form>

            </Container>
        </Box>
    )
}
export default FeedbackForm;