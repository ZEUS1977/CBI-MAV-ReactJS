import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Home from './Home.jsx';
import Login from './Login.jsx';
import Contact from './Contact.jsx';
import About from './About.jsx';


ReactDOM.render((
   <Router history = {browserHistory}>
      <Route path = "/" component = {App}>
         <IndexRoute component = {Home} />
         <Route path = "home" component = {Home} />
         <Route path = "login" component = {Login} />
         <Route path = "about" component = {About} />
         <Route path = "contact" component = {Contact} />
     </Route>
   </Router>
	
), document.getElementById('app'));