import React from "react";
// import "./styles/nav.css";
import {AppBar, Toolbar, Typography, Button, Box} from '@mui/material';
import {Link} from "react-router-dom";

const Navigation = () => {

    const logoUrl = 'https://cloud.workhuman.com/static-apps/gratitude/AyHWEepiZwmL2dOQXYATJA==/images/pageHeader/logo.svg'
    return(
        // <nav className="navbar">
        //     <ul className="nav-list">
        //         <li className="nav-item"><Link to="/">Home</Link></li>
        //         <li className="nav-item"><Link to="/flow1">Create a flow</Link></li>
        //     </ul>
        // </nav>
        <AppBar position='static' sx={{backgroundColor: '#ffffff'}}>
            <Toolbar sx={{justifyContent: 'space-between'}}>
            <Box sx={{display: 'flex', alignItems: 'center'}}>
                <img src={logoUrl} alt='logo' style={{height: 50, marginRight: 20}}/>
            </Box>
                <Box sx={{display: 'flex', alignItems: 'center'}}>
                    <Button sx={{ color: "#ffffff",
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: '#000000',
                    },
                    marginRight: 2,
                 }}
                  component={Link} to='/'>
                     Home
                    </Button>
                    <Button sx={{ color: "#ffffff",
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: '#000000',
                    },
                    marginRight: 2,
                 }} component={Link} to='/flow'>
                     Service Flow
                    </Button>
                    <Button sx={{ color: "#ffffff",
                    backgroundColor: 'black',
                    '&:hover': {
                        backgroundColor: '#000000',
                    },
                 }} component={Link} to='/testScenario'>
                     Test Scenario
                    </Button>
                </Box>
            </Toolbar>
        </AppBar>
    )
}

export default Navigation;