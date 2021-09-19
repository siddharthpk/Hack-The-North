import React,{useState, useEffect} from 'react';
import {Container, AppBar, Typography, Grow, Grid} from '@material-ui/core';
import {useDispatch} from 'react-redux';
import {getPosts} from '../../actions/posts';
import Posts from '../../components/Posts/Posts';


const ViewPost = () => {
    
    const dispatch = useDispatch();
    const [currentId, setCurrentId] = useState(null);
    useEffect(()=>{
         dispatch(getPosts());
    }, [currentId, dispatch]);

    return (
    <Container maxWidth="lg">
        <Grow in>
            <Container>
                <Grid  container justify="space-between" alignitems="stretch" spacing={3}>
                    <Grid item xs={12} sm={7}>
                        <Posts setCurrentId={setCurrentId}/>
                    </Grid>
                </Grid>
            </Container>
        </Grow>
    </Container>
    );
}

export default ViewPost;