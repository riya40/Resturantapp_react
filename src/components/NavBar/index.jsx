import {AppBar, Toolbar, Typography, Button} from '@mui/material'

function NavBar(){
    return(
        <AppBar position="static">
            <Toolbar variant="dense">
    
                <Typography variant="h6" component="div" sx = {{flexGrow:1}}>
                    ABC Restaurant
                </Typography>
                <Button color="inherit">Menu</Button>
                <Button color="inherit">Reservation</Button>
                <Button color="inherit">Contact</Button>
            </Toolbar>
        </AppBar>
    )
}

export default NavBar;