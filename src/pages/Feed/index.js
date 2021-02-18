import React, { useState, useCallback, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles'
import PostCard from '../../components/PostCard'
import NavBar from './NavBar'
import Box from '@material-ui/core/Box';
import Hidden from '@material-ui/core/Hidden'
import Container from '@material-ui/core/Container'

import axios from '../../utils/axios'

const useSytles = makeStyles(() => ({
    root: {},       
    
}));

function Feed() {
    const classes = useSytles();

    const [posts, setPosts] = useState([]);

    const getPosts = useCallback(async () => {
        const feed = await axios.get('/api/feed');
        setPosts(feed.data.posts)
    }, [setPosts]);

    useEffect(() => {
        getPosts();       
    }, [getPosts])   

    return (
        <Container maxWidth="lg">
        <Box display="flex">
            <Hidden smDown>
                <NavBar />        
            </Hidden>
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