import React, { useCallback} from 'react'
import { makeStyles } from '@material-ui/styles'
import TextField from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import { useDropzone } from 'react-dropzone'
import Title from './Title'
import { usePost } from '../../../../context/PostContext'


const useStyles = makeStyles((theme) => ({
      
    image: {
        height: '100px'
    },
    textArea: {
        width: '100%',
        height: '100%',
        resize: 'none',
        border: 'none',
        outline: 'none',
        fontSize: 15,
    },
    button: {
        marginRight: theme.spacing(2)
    },   
}))

const arrayTags = [
    { title: 'react.js'},
    { title: 'node.js'},
    { title: 'js.js'},
    { title: 'css.js'},
]

function PostEditor() {
    const classes = useStyles();
    const ctx = usePost();

    const { image,
        setImage,        
        tags,
        setTags,
        markdownText,
        setMarkdownText } = ctx;
    

    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
              
      }, [setImage])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })

    return (
        <>
        <Box {...getRootProps()} mb={2}>
                <input {...getInputProps()} />           
                <Button>Carregar Imagem</Button>                
            </Box> 
            {ctx.image && ( 
                <Box mb={2}>
                    <img src={image} alt="background" className={classes.image} />  
                </Box>
            )}
            <Box mb={2}>
                <Title />
            </Box>
            <Box mb={2}>
            <Autocomplete
                multiple
                id="tags-standard"
                options={arrayTags}
                getOptionLabel={(option) => option.title} 
                value={tags}  
                onChange={setTags}             
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    placeholder="tags"
          />
             
        )}
      />        
            </Box>   
           <textarea 
                onChange={setMarkdownText} 
                value={markdownText}
                className={classes.textArea}>
                    Editor markdown
            </textarea>        
        </>
    )
}

export default PostEditor