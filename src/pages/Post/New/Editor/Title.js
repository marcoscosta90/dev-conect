import React from 'react'
import TextField from '@material-ui/core/TextField'
import { usePost } from '../../../../context/PostContext'

function Title() {
    const ctx = usePost();
    const { title, setTitle } = ctx;

    return (
        <TextField 
        id="title" 
        placeholder="Titulo" 
        fullWidth 
        value={title}
        onChange={setTitle}    
    />
    )
}

export default Title;