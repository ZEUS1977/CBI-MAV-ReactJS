import React from 'react';
import ReactDOM from 'react-dom';

class Login extends React.Component {
    
    constructor(props) {
        super(props);
          
        this.state = {
           Email: 'ewfew',
           Password: '' 
        }

        this.handleLogin = this.handleLogin.bind(this);
     };
     
    handleLogin(e) {

            this.setState({
                Email: e.target.Email,
                Password:e.target.Password}
            )
            Email = e.target.Email;
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
                    id="email"
                    type="text"
                    defaultValue={this.state.Email}
                    onChange={this.state.handleLogin}
                     />
            </label>
            <br/>
                
            <label>Password: 
            <input
                    id="password"
                    type="password"
                    defaultValue={this.state.Password}
                    onChange={this.state.handleLogin}
                     />
            </label>
            <br/>
            <button onClick={this.state.handleLogin}> Avanti  </button> 
       </div>
      )
   }
}


export default Login;
