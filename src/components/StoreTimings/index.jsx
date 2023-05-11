import React from 'react';
import { Typography,Box,Container } from '@mui/material';

const StoreTimings = () => {
    return(
        <Box py={3} bgcolor="grey.200">
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Store Timings
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Monday:9:00Am - 9.00PM <br/>
                    Tuesday:9:00Am - 9.00PM <br/>
                    Wednesday:9:00Am - 9.00PM <br/>
                    Thursday:9:00Am - 9.00PM <br/>
                </Typography>
                <Typography variant="body1" align="center" gutterBottom>
                    Friday:8:00Am - 10.00PM <br/>
                    Saturday:8:00Am - 10.00PM <br/>
                    Sunday:8:00Am - 10.00PM 
                </Typography>
            </Container>
        </Box>
    )
}
export default StoreTimings;