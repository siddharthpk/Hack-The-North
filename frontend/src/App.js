import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Home from './components/Home.js';
import Posts from './components/Posts/Posts';
import CreatePost from './components/CreatePost/CreatePost';
import Form from './components/Form/Form.js';
import { useDispatch } from 'react-redux';
import ViewPost from './components/ViewPosts/ViewPost';
import useStyles from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';



import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Dosis',
      'sans-serif',
    ].join(','),
  },});

const App = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [currentId, setCurrentId] = useState(null);

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <AppBar className={classes.appBar} position="fixed" color="inherit">
          <Typography className={classes.heading} variant="h2" align="center">Refugee Response</Typography>
        </AppBar>
        <Router>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Home} />
            <Route path="/createPost" exact component={CreatePost} />
            <Route path="/posts" exact component={ViewPost} />
          </Switch>
        </Router>
      </Container>
    </ThemeProvider>
  );
};

export default App;
