import React, { useState, useCallback } from 'react'
import { makeStyles } from '@material-ui/styles'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar'
import Button from '@material-ui/core/Button'
import  TextField  from '@material-ui/core/TextField';
import Autocomplete from '@material-ui/lab/Autocomplete'
import Typography from '@material-ui/core/Typography'
import { useDropzone } from 'react-dropzone'


const useStyles = makeStyles((theme) => ({
    appBar: {
        top: 'auto',
        bottom: 0,
        alignItems: 'center'
      },    
    image: {
        height: '100px'
    },
    imagePreview: {
        width: '100%'
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
    }
}))

const arrayTags = [
    { title: 'react.js'},
    { title: 'node.js'},
    { title: 'js.js'},
    { title: 'css.js'},
]



function NewPost() {
    const classes = useStyles();
    const [image, setImage] = useState(null);
    const [title, setTitle] = useState('');
    const [tags, setTags] = useState([{title: 'react.js'}]);
    const [markdownText, setMarkdownText] = useState('');



    const onDrop = useCallback((acceptedFiles) => {
        const file = acceptedFiles[0];
        const reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onloadend = () => {
            const base64data = reader.result;
            setImage(base64data);
        }
              
      }, [])

    const {getRootProps, getInputProps} = useDropzone({
        onDrop,
        multiple: false,
        accept: 'image/*'
    })

    const handleTitleChange = (event) => {
       setTitle(event.currentTarget.value)
    }

    const handleTagsChange = (event, values) => {
       setTags(values) 
    }

    const handleChangeMarkdown = (event) => {
       setMarkdownText(event.currentTarget.value)
    }

    return (
        <>        
        <Box 
            display="flex"
            height="calc(100% - 70px)"
            overflow="scroll">            
            <Box width="50%" height="100%" padding={2} borderRight="1px solid #DDD">
            <div {...getRootProps()}>
                <input {...getInputProps()} />           
                <Button>Carregar Imagem</Button>                
            </div> 
            {image && 
            <img src={image} alt="background" className={classes.image} />  }
            <TextField 
                id="title" 
                placeholder="Titulo" 
                fullWidth 
                value={title}
                onChange={handleTitleChange}    
            />
            <Autocomplete
                multiple
                id="tags-standard"
                options={arrayTags}
                getOptionLabel={(option) => option.title} 
                value={tags}  
                onChange={handleTagsChange}             
                renderInput={(params) => (
                <TextField
                    {...params}
                    variant="standard"
                    placeholder="tags"
          />
        )}
      />           
           <textarea 
                onChange={handleChangeMarkdown} 
                className={classes.textArea}>
                    Editor markdown
            </textarea>
            </Box>
            <Box width="50%" height="100%" padding={2} > 
            {image && (
            <img src={image} alt="background" className={classes.imagePreview} />  )}
            <Typography variant="h2">{title}</Typography>
            <Typography variant="body1">{tags.map(item => item.title).join(',')}</Typography>
            </Box>
        </Box>
        <AppBar position="fixed" color="inherit" className={classes.appBar}>
           <Toolbar> 
                <Button className={classes.button}>Salvar rascunho</Button>
                <Button color="secondary" variant="outlined">Publicar</Button>
           </Toolbar>
        </AppBar>
        </>
    )
}

export default NewPost;