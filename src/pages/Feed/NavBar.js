import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText'
import { useNavigate } from 'react-router-dom'

const useStyles = makeStyles((theme) => ({
    root: {
        padding: theme.spacing(2),
        width: 275
    },
    button: {
        width: '100%'
    }
}))

const tags = [
    { id: 1, name: 'reactjs'},
    { id: 2, name: 'javascript'},
    { id: 3, name: 'dotnet'},
    { id: 4, name: 'php'},
    { id: 5, name: 'materialdesing'},
    { id: 6, name: 'webdev'}
    
]

function NavBar() {
    const classes = useStyles();
    const navigate = useNavigate();
    
    return (
        <Paper className={classes.root}>
            <Button
             variant="outlined"
             color="secondary"
             className={classes.button}
             onClick={() => navigate('/sign-up')}>
                 Registrar Gratis
            </Button>
            <ListSubheader>
               {
               tags.map((item) => (
                  <ListItem dense button key={`item-${item.id}-${item.name}`}>
                      <ListItemText primary={`#${item.name}`} />
                  </ListItem>
               ))
               }
                  <ListItem button >
                      Exibir mais tags
                  </ListItem>
            </ListSubheader>
        </Paper>
    )
}

export default NavBar;