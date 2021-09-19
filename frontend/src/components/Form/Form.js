import React, {useState, useEffect} from 'react';
import {TextField, Button, Typography, Paper} from '@material-ui/core' ;
import {useDispatch, useSelector} from 'react-redux';
import useStyles from './styles';
import { createPost, updatePost } from '../../actions/posts';

//get current id of the page for updating.
const Form = () => {
    const [postData,setPostData] = useState({creator: '', title: '', message: ''})
    const classes = useStyles();
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData));
        clear();    //can redirect them to a different page.
    }

    const clear = () => {
        setPostData({creator: '', title: '', message: '' });
    }

    return(
        <Paper className={classes.paper}>
            <form autoComplete="off" noValidate className={`${classes.root} ${classes.form}`} onSubmit={handleSubmit}>
                <Typography variant="h6">Create a Post</Typography>
                <TextField name="creator" variant="outlined" label="Creator" fullWidth value={postData.creator} onChange={(e) => setPostData({ ...postData, creator: e.target.value})} />
                <TextField name="title" variant="outlined" label="Title" fullWidth value={postData.title} onChange={(e) => setPostData({ ...postData, title: e.target.value})} />
                <TextField name="message" variant="outlined" label="Message" multiline rows={4} fullWidth value={postData.message} onChange={(e) => setPostData({ ...postData, message: e.target.value})} />
                <Button className={classes.buttonSubmit} variant="contained" color="primary" size="large" type="submit" fullWidth>Submit</Button>
                <Button variant="contained" color="secondary" size="small" onClick={clear} fullWidth >Clear</Button>
            </form>
        </Paper>
    );
}


export default Form;
