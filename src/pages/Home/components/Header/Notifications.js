import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux'
import SvgIcon from '@material-ui/core/SvgIcon';
import IconButton from '@material-ui/core/IconButton'
import Popover from '@material-ui/core/Popover'
import { Bell } from 'react-feather'


function Notifications() {
    const account = useSelector(state => state.account);
    const isAuthenticated = !!account.user;
    const ref = useRef(null);
    const [isOpen, setOpen ] = useState(false)

    const handleOpen = () => {
        setOpen(true)
    }

    const handleClose = () => {
        setOpen(false)
    }

    return (
        isAuthenticated && (
            <>
                <IconButton ref={ref} onClick={handleOpen}>
                    <SvgIcon>
                        <Bell />
                    </SvgIcon>
                </IconButton>
                <Popover 
                    onClose={handleClose}
                    open={isOpen}
                    anchorEl={ref.current}
                    anchorOrigin={{
                        vertical: 'bottom',
                        horizontal: 'center',
                    }}
                    transformOrigin={{
                        vertical: 'top',
                        horizontal: 'right',
                    }}
                    >
                    The content of the Popover.
                </Popover>
            </>
    
      )
    )
     
}

export default Notifications