import React, { useState, useEffect } from 'react';
import { Container, AppBar, Typography, Grow, Grid } from '@material-ui/core';
import "./App.css";
import Header from "./components/Header";
import LandingPage from "./components/LandingPage";
import Home from './components/Home.js';
import Posts from './components/Posts/Posts';
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom";

const App = () => {

  return (
    <div>
      <Router>
              <Header />
               <nav>
                   <ul>
                       <li><Link to="/">Home</Link></li>
                      <li><Link to="/login">Login</Link></li>
                      <li><Link to="/posts">Posts</Link></li>
                    </ul>
                 </nav>
                <Switch>
                      <Route path="/" exact component={LandingPage} />
                      <Route path="/login" exact component={Home} />
                      <Route path="/posts" exact component={Posts} />
                </Switch>
        </Router>
    </div>
  );
};

export default App;
