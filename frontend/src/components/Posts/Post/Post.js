import React from 'react';
import useStyles from './styles';
import { Card, CardContent, CardMedia, Typography } from '@material-ui/core';
import moment from 'moment';

const Post = ({ post }) => {
    const classes = useStyles();

    return (
        <Card className={classes.card}>
            <CardMedia className={classes.media} title={post.title} />
            <div className={classes.overlay}>
                <Typography variant={"h6"}>{post.creator}</Typography>
                <Typography variant={"body2"}>{moment(post.createdAt).fromNow()}</Typography>
            </div>
            <div className={classes.details}>
                <Typography variant="body2" color="textSecondary" component="h2">{post.creator_email}</Typography>
            </div>
            <Typography className={classes.title} gutterBottom variant="h5" component="h2">{post.title}</Typography>
            <CardContent>
                <Typography variant="body2" color="textSecondary" component="p">{post.message}</Typography>
            </CardContent>
        </Card>
    );
}

export default Post;
