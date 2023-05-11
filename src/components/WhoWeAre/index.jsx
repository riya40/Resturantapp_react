import React from 'react'
import { Typography, Box,Container,Grid,Card,CardContent } from '@mui/material'

const WhoWeAre = ()=>{
    return(
        <Box py={3} bgcolor="grey.200">
                <Container maxWidth="md">
                <Typography variant="h6" color="center" gutterBottom>
                    Who We Are
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={8} md={6}>
                        <Card>
                            <CardContent>
                                <Typography variant="h6" color="text.secondary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe iure molestias quisquam officiis nemo consequuntur labore voluptatem doloribus a, illo sit eius minus cupiditate facere quod beatae sint dolores!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={12} md={6}>
                        <Card sx={{height:'100%'}}>
                            <CardContent>
                            <Typography variant="h6" color="text.secondary">
                                    Our Philosophy
                                </Typography>
                                <Typography variant="h6" color="text.secondary">
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Cumque saepe iure molestias quisquam officiis nemo consequuntur labore voluptatem doloribus a, illo sit eius minus cupiditate facere quod beatae sint dolores!
                                </Typography>
                            </CardContent>
                        </Card>
                    </Grid>
                </Grid>
        </Container>
    </Box>   
    )
}

export default WhoWeAre;