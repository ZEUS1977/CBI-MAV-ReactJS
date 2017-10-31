import React from 'react';
import ReactDOM from 'react-dom';
import appCSS from './static/css/app.css'
import userClient from './clients/UserClient.js';
import jsonUtils from './utils/JsonUtils.js';

class Registration extends React.Component {

    constructor(props) {
        super(props);

        this.state = {
           UserName: '',
           Nome: '',
           Cognome: '',
           RagioneSociale: '',
           SettoreAzienda: '',
           FatturazioneElettronica: '',
           IndirizzoFatturazione: '',
           CivicoFatturazione: '',
           CAPFatturazione: '',
           ComuneFatturazione: '',
           SiglaProvinciaFatturazione: '',
           Email: '',
           Password: '',
        };

     };

    handleLogin(ev) {
        ev.preventDefault();
        var datas = {
            UserName: this.refs.user.value,
            Nome: this.refs.nome.value,
            Cognome: this.refs.cognome.value,
            RagioneSociale: this.refs.ragionesociale.value,
            SettoreAzienda:  this.refs.settoreAzienda.value,
            FatturazioneElettronica: this.refs.fatturazioneElettronica.value,
            IndirizzoFatturazione: this.refs.indirizzoFatturazione.value,
            CivicoFatturazione: this.refs.civicoFatturazione.value,
            CAPFatturazione: this.refs.CAPFatturazione.value,
            ComuneFatturazione: this.refs.comuneFatturazione.value,
            SiglaProvinciaFatturazione: this.refs.siglaProvinciaFatturazione.value,
            Email: this.refs.email.value,
            Password:this.refs.password.value,

            };
        this.setState(datas);
        var json =  jsonUtils.objToJson(this.state);
        alert(json);
        userClient.register(json);
        alert('called server with: '+ json);
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
           <label className="input-group-addon">Ragione Sociale:
               <input
                       ref="ragionesociale"
                       type="text"
                       defaultValue={this.state.RagioneSociale}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">Settore Azienda:
               <input
                       ref="settoreAzienda"
                       type="text"
                       defaultValue={this.state.SettoreAzienda}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">Fatturazione Elettronca:
               <input
                       ref="fatturazioneElettronica"
                       type="text"
                       defaultValue={this.state.FatturazioneElettronica}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">Indirizzo Fatturazione:
               <input
                       ref="indirizzoFatturazione"
                       type="text"
                       defaultValue={this.state.IndirizzoFatturazione}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">Civico Fatturazione:
               <input
                       ref="civicoFatturazione"
                       type="text"
                       defaultValue={this.state.CivicoFatturazione}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">CAP Fatturazione:
               <input
                       ref="CAPFatturazione"
                       type="text"
                       defaultValue={this.state.CAPFatturazione}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
           <div className="input-group input-sm">
           <label className="input-group-addon">Comune Fatturazione:
               <input
                       ref="comuneFatturazione"
                       type="text"
                       defaultValue={this.state.ComuneFatturazione}
                        />
           <i className="fa fa-user"></i> </label>
           </div>
         <div className="input-group input-sm">
         <label className="input-group-addon">Sigla Provincia Fatturazione:
             <input
                     ref="siglaProvinciaFatturazione"
                     type="text"
                     defaultValue={this.state.SiglaProvinciaFatturazione}
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
