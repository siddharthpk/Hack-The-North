import React from 'react';
import { Container, AppBar, Typography } from '@material-ui/core';
import "./App.css";
import LandingPage from "./components/LandingPage";
import Home from './components/Home.js';
import CreatePost from './components/CreatePost/CreatePost';
import ViewPost from './components/ViewPosts/ViewPost';
import useStyles from './styles';
import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles';
import './components/Header.css';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
} from "react-router-dom";
import logo from './logo.png';

const theme = createMuiTheme({
  typography: {
    fontFamily: [
      'Dosis',
      'sans-serif',
    ].join(','),
  },
});

const App = () => {
  const classes = useStyles();

  return (
    <ThemeProvider theme={theme}>
      <Container maxWidth="lg">
        <Router>
          <AppBar className={`${classes.appBar} header`} position="fixed" color="inherit">
            <img className="header-img" src={logo}></img>
            <Typography className={`header-text ${classes.heading}`} variant="h2" align="center" component={Link} to="/">Refugee Response</Typography>
          </AppBar>
          <Switch>
            <Route path="/" exact component={LandingPage} />
            <Route path="/login" exact component={Home} />
            <Route path="/createPost" exact component={CreatePost} />
            <Route path="/posts" exact component={ViewPost} />
          </Switch>
        </Router>
      </Container >
    </ThemeProvider >
  );
};

export default App;
