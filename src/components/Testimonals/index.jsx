import React from 'react';
import  { Box,Typography,Container,Card,CardContent,CardMedia} from '@mui/material'

const Testimonials = ()=>{
    const testimonials = [{
        id:1,
        name:'john',
        photo:'',
        rating:'5',
        testimonials:'Loreum ipsum '
    },
    {
        id:1,
        name:'john',
        photo:'',
        rating:'5',
        testimonials:'Loreum ipsum '
    },
    {
        id:1,
        name:'john',
        photo:'',
        rating:'5',
        testimonials:'Loreum ipsum '
    }
]
return(
    <Box py={3} bgcolor="grey.200">
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Testimonials
                </Typography>
                {testimonials.map((testimonial)=>(
                    <Card>
                    <CardMedia
                        component="img"
                        src={testimonial.photo}
                        alt={testimonial.name}
                        sx={{width:120,objectFit:'cover'}}
                    />
                    
                <CardContent>
            <Typography variant="subtitle1" component="div" >
                        {testimonial.name}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                        {testimonial.rating}/5
                </Typography>  
                <Typography variant="body2" color="text.secondary" >
                        {testimonial.name}
                </Typography>  
            </CardContent>
            </Card>
            ))} 
            </Container>
        </Box>
)
}

export default Testimonials;