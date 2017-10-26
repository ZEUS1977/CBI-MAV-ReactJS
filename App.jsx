import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';
import Login from './Login.jsx';

class App extends React.Component {

   render() {
      return (
         <div>
            Benvenuto {this.props.Email}
            <ul>
               <li><Link to = "/home">Home</Link></li>
               <li><Link to = "/login">Login</Link></li>
               <li><Link to = "/about">About</Link></li>
               <li><Link to = "/contact">Contact</Link></li>
            </ul>
                
           {this.props.children}
         </div>
      )
   }
}


export default App

