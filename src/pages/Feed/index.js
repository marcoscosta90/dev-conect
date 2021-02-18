import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../components/PostCard'
import NavBar from './NavBar'

import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box';

const useSytles = makeStyles((theme) => ({
    root: {

    }
}));

 const posts = [
    {   
        id: 1,
        author: {
            id: 1,
            name: 'Marcos Costa',
            username: 'marcoscosta',        
            avatar: '/images/avatars/avatar_1.jpg',
        },
        title: "Criando um app do zero com react.js",
        date: "February 9, 2021",
        description: "E ai pessoal qual o framework preferido de voces",
        hashtags: "#js, #react, #dev",
        image: "/images/posts/post9.jpeg"
    },
    {   
        id: 2,
        author: {
            id: 1,
            name: 'Marcos Costa',
            username: 'lucasnhimi',        
            avatar: '/images/avatars/avatar_1.jpg',
    },
    title: "Criando um app do zero com react.js",
    date: "February 7, 2021",
    description: "E ai pessoal qual o framework preferido de voces",
    hashtags: "#js, #react, #dev",
    image: "/images/posts/post8.png"
    }

  
]; 


function Feed() {
    const classes = useSytles();

    return (
        <Container maxWidth="lg">
        <Box display="flex">
            <NavBar />          
        <div className={classes.root}>
            {
            posts.map(post => (
                <PostCard key={post.id} post={post} />
            ))
            } 
        </div>
        </Box>
    </Container>  
    )
}

export default Feed;