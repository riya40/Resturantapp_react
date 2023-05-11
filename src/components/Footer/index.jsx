import React from 'react'
import { Typography,Container, Box } from '@mui/material';

const Footer = () => {
    return(
        <footer>
        <Box py={3} bgcolor="green" color="white">
            <Container maxWidth="md">
                <Typography variant="h6" align="center" gutterBottom>
                    Foolow us on media:
                </Typography>
                <Typography variant="body2" align="center" gutterBottom>
                    Facebbok|Twitter|Youtube
                </Typography>
                <Typography variant="body2" align="center" gutterBottom>
                    Address:
                </Typography>
            </Container>
        </Box>
        </footer>
    )
}
export default Footer;