import React, { useState, useRef } from 'react';
import Avatar from '@material-ui/core/Avatar'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import { useSelector, useDispatch } from 'react-redux';
import { signOut } from '../../../actions/accountActions'
import { useNavigate } from 'react-router-dom'


function Account() {
    const account = useSelector((state) => state.account)
    const [isOpen, setOpen] = useState(false);
    const ref = useRef();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const isAuthenticated = !!account.user;

    const handleOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false)
    }

    const handleSignOut = () => {
         handleClose(); 
         //logoff app atraves de uma action no redux
         dispatch(signOut());
         navigate('/')
    }
 
    return (
        <>
        
            <Avatar 
                ref={ref}
                onClick={handleOpen}
                alt="Memy Sharp" 
                src={account.user && account.user.avatar} 
            />
            {isAuthenticated ?
                <Menu
                    anchorEl={ref.current}
                    anchorOrigin={{ 
                        vertical: 'bottom',
                        horizontal: 'center',
            }}
                    open={isOpen}
                    onClose={handleClose}
                    getContentAnchorEl={null}>
                    <MenuItem onClick={() => navigate(`/${account.user?.username}`)}>Perfil</MenuItem>                    
                    <MenuItem>Meus posts</MenuItem>
                    <MenuItem>Minhas conexoes</MenuItem>
                    <MenuItem onClick={handleSignOut}>Sair</MenuItem>
                </Menu>
                :
                <Menu
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
            }}
                        open={isOpen}
                        onClose={handleClose}
                        getContentAnchorEl={null}
            >
                        <MenuItem onClick={() => navigate('/sign-up')}>Registrar</MenuItem>
                        <MenuItem onClick={() => navigate('/sign-in')}>Entrar</MenuItem>
              
                </Menu>
            }
            
           
            
        </>
    )
}

export default Account;