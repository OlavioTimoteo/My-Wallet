import React from 'react';
import { Redirect } from 'react-router';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { saveEmailAction } from '../actions';
import '../App.css';
import wallet from '../images/wallet.svg';



class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      redirect: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange({ target }) { // Função generica para pegar as alterações do input e salvar no estado do component.
    const { name, value } = target;
    this.setState({ [name]: value });
  }

  handleSubmit(event) {
    event.preventDefault();
    const { saveEmail, history } = this.props;
    const { email } = this.state;
    saveEmail(email);
    history.push('/carteira');
  }

  render() {
    const { email, password, redirect } = this.state;
    const REGEX_EMAIL = /^([\w\d._\-#])+@([\w\d._\-#]+[.][\w\d._\-#]+)+$/;
    const minPassLength = 6;
    if (redirect) { return <Redirect to="/carteira" />; }

    return (
      <div className='container'>
        <div className="login-container">
          <h2>My Wallet</h2>
          <h3>Login</h3>
          <form onSubmit={ this.handleSubmit }>
            <div className="login-input-container">
              <label> E-mail:
                <input
                  name="email"
                  type="email"
                  value={ email }
                  onChange={ this.handleChange }
                />
              </label>
              <label> Senha
                <input
                  name="password"
                  type="password"
                  value={ password }
                  onChange={ this.handleChange }
                />
              </label>
            </div>
            <button
              className='button'
              type="submit"
              disabled={ !REGEX_EMAIL.test(email) || password.length < minPassLength }
            >Entrar</button>
          </form>
        </div >
        <div className='img'>
          <img src={ wallet } alt="img"></img>
        </div>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => ({
  saveEmail: (email) => dispatch(saveEmailAction(email)),
});

Login.propTypes = {
  saveEmail: PropTypes.func.isRequired,
  history: PropTypes.oneOfType([PropTypes.object, PropTypes.string]).isRequired,
};

export default connect(null, mapDispatchToProps)(Login);
