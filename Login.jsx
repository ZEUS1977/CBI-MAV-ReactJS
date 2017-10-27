import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
          
        this.state = {
           Email: 'ewfew',
           Password: '' 
        }
       
     };
     
    handleLogin(ev) {
        ev.preventDefault();
        this.setState({
            Email: this.refs.email.value,
            Password:this.refs.password.value}
        )
    }; 
   render() {
      return (
       <div>
            Benvenuto {this.state.Email}
            <h1>Login...</h1>
            <ul>
                <li>
                    <h2>Accedi...</h2>
                </li>
            </ul>
            <label>EMail: 
            <input
                    ref="email"
                    type="text"
                    defaultValue={this.state.Email}
                    onChange={(ev) => this.handleLogin(ev)}
                     />
            </label>
            <br/>
                
            <label>Password: 
            <input
                    ref="password"
                    type="password"
                    defaultValue={this.state.Password}
                    onChange={(ev) => this.handleLogin(ev)}
                     />
            </label>
            <br/>
            <button onClick={(ev) => this.handleLogin(ev)}> Avanti  </button> 
       </div>
      )
   }
}


export default Login;
