import React from 'react';
import Avatar from '@material-ui/core/Avatar'
import { useSelector } from 'react-redux'

function Account() {
    const account = useSelector((state) => state.account)

    return (
        <>
            <Avatar alt="Memy Sharp" src={account.user && account.user.avatar} />
        </>
    )
}

export default Account;