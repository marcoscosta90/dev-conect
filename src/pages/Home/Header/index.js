import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Account from './Account';
import Notifications from './Notifications'
import Settings from './Settings'
import Box from '@material-ui/core/Box'
import WritePost from './WritePost'
import { Link } from 'react-router-dom'


const useStyles = makeStyles({
    appBar: {
        boxShadow: 'none'
    },
    img: {
        maxHeight: 55 
    },
    grow: {
        flexGrow: 1
    },
    userSection: {
        display: 'flex',
        alignItems: 'center'
    },  
})

function Header() {
    const classes = useStyles();  

 return (   
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
        <Toolbar>
            <Link to="/">
                <img src="/images/logo.jpg" alt="logo" className={classes.img} />
            </Link>
            <div className={classes.grow}></div>
            <div className={classes.userSection}>
                <WritePost />
                <Box ml={2}>
                    <Notifications />
                </Box>
                <Box ml={2}>
                    <Settings />
                </Box>        
                <Box ml={2}>
                    <Account />
                </Box>          
            </div>         
        </Toolbar>
    </AppBar>
    )
}

export default Header;
