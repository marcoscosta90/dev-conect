import React from 'react'
import { Button } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({

})


function Header() {
 return (
    <AppBar>
        <Toolbar>
          <div>
            <a href="/">Conecta Dev </a>
            <input type="text"></input>
         </div>
          <div>
            <Button color="primary" variant="contained">Novo post</Button>
            <span>Img1</span>
            <span>Img2</span>
        </div>
        </Toolbar>
    </AppBar>
    )
}

export default Header;
