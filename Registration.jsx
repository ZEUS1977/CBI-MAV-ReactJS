import React from 'react';
import ReactDOM from 'react-dom';
import appCSS from './static/css/app.css'
import userClient from './clients/UserClient.js';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           User: 'Scelgi un nick name',
           Nome: '',
           Cognome: '',
           RagioneSociale: '',
           SettoreAzienda: '',
           FatturazioneElettronica: '',
           IndirizzoFatturazione: 'es: via Roma',
           CivicoFatturazione: 'es: 4',
           CAPFatturazione: '',
           ComuneFatturazione: '',
           SiglaProvinciaFatturazione: '',
           Email: 'Inserisci qui la tua Email',
           Password: 'Inserisici qui la tua password',
           CheckPassword: 'Ripeti la password'
        };

     };

    handleLogin(ev) {
        ev.preventDefault();
        var datas = {
            Email: this.refs.email.value,
            Password:this.refs.password.value,
            User: this.refs.user.value,
            Nome: this.refs.nome.value,
            Cognome: this.refs.cognome.value,
            RagioneSociale: this.refs.ragionesociale.value};
        this.setState(datas);
        var json =  JSON.stringify(this.state)
        alert(json);
        userClient.register(json);
        alert('called server');
    };

    validation(ev) {
        const errors = {};
        const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
        if (!emailPattern.test(this.refs.email.value)) {
          errors.email = 'L\'email inserita non é valida!';
        }
      }

   render() {
      return (

        <div className="mainWrapper">
          <div className="login-container">
        <div className="login-card">
          <div className="login-form">
            <form className="form-horizontal">
            Benvenuto {this.state.User}
            <h1>Registrazione...</h1>
            <ul>
                <li>
                    <h2>Inserisci i tuoi dati...</h2>
                </li>
            </ul>
            <br/>
            <div className="input-group input-sm">
            <label className="input-group-addon">Nome Utente:
                <input
                        ref="user"
                        type="text"
                        defaultValue={this.state.User}

                         />
             <i className="fa fa-user"></i> </label>
             </div>
             <div className="input-group input-sm">
           <label className="input-group-addon">Nome:
               <input
                       ref="nome"
                       type="text"
                       defaultValue={this.state.Nome}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
         <label className="input-group-addon">Cognome:
               <input
                       ref="cognome"
                       type="text"
                       defaultValue={this.state.Cognome}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">RagioneSociale:
               <input
                       ref="ragionesociale"
                       type="text"
                       defaultValue={this.state.RagioneSociale}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">EMail:
           <input
                    ref="email"
                    type="text"
                    defaultValue= {this.state.Email}
                    onBlur = {this.validation.bind(this)}
                     />
            <i className="fa fa-user"></i> </label>
            </div>
            <div className="input-group input-sm">
            <label className="input-group-addon">Password:
            <input
                    ref="password"
                    type="password"
                    defaultValue={this.state.Password}

                     />
            <i className="fa fa-user"></i> </label>
            </div>
            <div className="input-group input-sm">
            <label className="input-group-addon">Ripeti la Password:
                <input
                    ref="checkpassword"
                    type="password"
                    defaultValue={this.state.CheckPassword}
                     />
             <i className="fa fa-user"></i> </label>
             </div>
             <div className="input-group input-sm">
            <button onClick={(this.handleLogin.bind(this))}> Avanti  </button>
            </div>
</form>
     </div>
       </div>
       </div>
       </div>
      )
   }
}



export default Registration;
