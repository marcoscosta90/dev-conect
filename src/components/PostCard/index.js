import React from 'react';
import  { makeStyles }  from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'
import CardHeader from '@material-ui/core/CardHeader';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Typography from '@material-ui/core/Typography';
import Avatar from '@material-ui/core/Avatar'

const useStyles = makeStyles((theme) => ({
    root: {
        marginBottom: theme.spacing(2),
    }
}))

function PostCard({ post }) {
    const classes = useStyles();

    return (
        <Card className={classes.root}>
            <CardHeader 
                avatar={<Avatar src={post.author.avatar} /> }
                />
                

            
            <CardContent>

            </CardContent>
            <CardActions>

            </CardActions>

        </Card>
    )
}

export default PostCard;