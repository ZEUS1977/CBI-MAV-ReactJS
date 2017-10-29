import React from 'react';
import ReactDOM from 'react-dom';
import appCSS from './static/css/app.css';

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
        );
    };
   render() {
      return (
       <div className="mainWrapper">
       	<div class="login-container">
				<div class="login-card">
					<div class="login-form">
            <form className="form-horizontal">
		            Benvenuto {this.state.Email}
		            <h1>Login...</h1>
		            <ul>
		                <li>
		                    <h2>Accedi...</h2>
		                </li>
		            </ul>
                <div className="input-group input-sm">
                  <label className="input-group-addon">EMail:< i className = "fa fa-user" > </i> < /label>
  		            <input className="input-group-addon"
  		                    ref="email"
  		                    type="text"
  		                    defaultValue={this.state.Email}
  		                    onChange={this.handleLogin.bind(this)}
  		                     />
                </div>
                <div class="input-group input-sm">
  		            <label className="input-group-addon" >Password:<i className="fa fa-user"></i> </label>
  		            <input className="input-group-addon"
  		                    ref="password"
  		                    type="password"
  		                    defaultValue={this.state.Password}
  		                    onChange={this.handleLogin.bind(this)}
  		                     />
                </div>
		            <button onClick={this.handleLogin.bind(this)}> Avanti  </button>
              </form>
              </div>
          </div>
       	</div>
       </div>
      )
   }
}


export default Login;
