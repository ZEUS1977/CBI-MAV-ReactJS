import React from 'react';
import ReactDOM from 'react-dom';

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
           IndirizzoFatturazione: 'es.: via Roma',
           CivicoFatturazione: 'es.: 4',
           CAPFatturazione: '',
           ComuneFatturazione: '',
           SiglaProvinciaFatturazione: '',
           Email: 'Inserisci qui la tua Email',
           ValidEmail: '',
           Password: 'Inserisici qui la tua password',
           CheckPassword: 'Ripeti la password'
        }
       
     };
     
    handleLogin(ev) {
        ev.preventDefault();
        this.setState({
            Email: this.refs.email.value,
            Password:this.refs.password.value,
            User: this.refs.user.value,
            Nome: this.refs.nome.value,
            Cognome: this.refs.cognome.value,
            RagioneSociale: this.refs.ragionesociale.value}
        )

    }; 

    validation(ev) {
        debugger
        const error = {};
        const emailPattern = /(.+)@(.+){2,}\.(.+){2,}/;
        if (!emailPattern.test(this.refs.email.value)) {
          error.email = 'L\'email inserita non é valida!';
        }

        this.setState({
               ValidEmail: error
        });
      }
   
   render() {
      return (

   <div>
            Benvenuto {this.state.User}
            <h1>Registrazione...</h1>
            <ul>
                <li>
                    <h2>Inserisci i tuoi dati...</h2>
                </li>
            </ul>
            <br/>       
            <label>Nome Utente: 
                <input
                        ref="user"
                        type="text"
                        defaultValue={this.state.User}
                       
                         />
           </label>
            <br/>                 
           <label>Nome: 
               <input
                       ref="nome"
                       type="text"
                       defaultValue={this.state.Nome}                       
                        />
           </label>
           <label>Cognome: 
               <input
                       ref="cognome"
                       type="text"
                       defaultValue={this.state.Cognome}                       
                        />
           </label>
           <br/> 
           <label>RagioneSociale: 
               <input
                       ref="ragionesociale"
                       type="text"
                       defaultValue={this.state.RagioneSociale}                       
                        />
           </label>
           <br/> 
           <label>EMail: 
           <input
                    ref="email"
                    type="text"
                    defaultValue= {this.state.Email}
                    onBlur = {(ev) => this.validation(ev)}
                     />
            </label>
            <h1>error: {this.state.ValidEmail}</h1>
            <br/>
            <label>Password: 
            <input
                    ref="password"
                    type="password"
                    defaultValue={this.state.Password}
                   
                     />
            </label>
            <br/> 
            <label>Ripeti la Password: 
                <input
                    ref="checkpassword"
                    type="password"
                    defaultValue={this.state.CheckPassword}
                     />
             </label>
            <br/>
            <button onClick={(ev) => this.handleLogin(ev)}> Avanti  </button> 
       </div>
      )
   }
}



export default Registration;
