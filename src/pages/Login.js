import React from 'react';
import '../App.css';
import wallet from '../images/wallet.svg';



class Login extends React.Component {
  constructor() {
    super();
    this.state = {
      email: '',
      password: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange({ target }) { // Função generica para pegar as alterações do input e salvar no estado do component.
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  render() {
    const { email, password } = this.state;
    console.log(this.state);
    return (
      <div className='container'>
        <div className="login-container">
          <h2>My Wallet</h2>
          <h3>Login</h3>
          <form>
            <div className="login-input-container">
              <label> E-mail:
                <input
                  name="mail"
                  type="text"
                  value={ email }
                  onChange={ this.handleChange }
                />
              </label>
              <label> Senha
                <input
                  name="password"
                  type="text"
                  value={ password }
                  onChange={ this.handleChange }
                />
              </label>
            </div>
            <button className='button' type="button">Entrar</button>
          </form>
        </div >
        <div className='img'>
          <img src={ wallet } alt="img"></img>
        </div>
      </div>
    );
  }
}

export default Login;