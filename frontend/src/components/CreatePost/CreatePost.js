import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import Form from '../Form/Form.js';
import useStyles from './styles';

const CreatePost = ({ currentId, setCurrentId }) => {

    const classes = useStyles();
    return (
        <Container maxwidth="sm">
            <Grid className={classes.mainContainer} container justify="space-between" alignitems="stretch" spacing={3}>
                <Container>
                    <Grid item xs={12} sm={4}>
                        <Form currentId={currentId} setCurrentId={setCurrentId} />
                    </Grid>
                </Container>
            </Grid>
        </Container>
    )
}

export default CreatePost;