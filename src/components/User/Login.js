import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import { RouteConst } from '../../utils/constants';

class Login extends Component {
  /*********************Constructor*********************/
  state = {
    email: '',
    password: '',
    remember: false,
    formErrors: {
      email: { isValid: false, message: '' },
      password: { isValid: false, message: '' }
    }
  };
  /*********************Constructor*********************/

  /*********************Form Handler*********************/
  changeHandler = event => {
    const name = event.target.name;
    const value =
      event.target.type === 'checkbox'
        ? event.target.checked
        : event.target.value;

    this.setState(
      {
        [name]: value
      },
      () => {
        this.validateField(name, value);
      }
    );
  };

  validateField(fieldName, value) {
    let formErrors = this.state.formErrors;

    switch (fieldName) {
      case 'email':
        formErrors.email.isValid = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(
          value
        );
        formErrors.email.message = formErrors.email.isValid
          ? ''
          : ' is invalid';
        break;
      case 'password':
        formErrors.password.isValid = value.length >= 6;
        formErrors.password.message = formErrors.password.isValid
          ? ''
          : ' is too short';
        break;
      default:
        break;
    }

    this.setState({
      formErrors: formErrors
    });
  }

  // Retrive value from Input
  changeHandler1 = (data, event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();

    const { history } = this.props;
    const { email, password } = this.state;
    console.log(email, password);

    history.push(RouteConst.Dashboard);

    if (
      this.state.formErrors.password.isValid &&
      this.state.formErrors.email.isValid
    ) {
      history.push(RouteConst.Dashboard);
    } else {
      console.log('Form Invalid');
    }
  };

  /*********************Form Handler*********************/

  /*********************Render Mrthod*********************/
  render() {
    const formErrors = this.state.formErrors;
    return (
      <div className='rc_login'>
        <form onSubmit={this.handleSubmit}>
          <div className='form-group header'>
            <span>Member Login</span>
          </div>
          <div className='form-group'>
            <label className='form-label required'>Email Address</label>
            <input
              type='text'
              name='email'
              value={this.state.email}
              placeholder='Please Enter Email'
              className={`form-control ${this.state.email ? '' : 'mandatory'}`}
              onChange={this.changeHandler}
            />
            {this.state.email ? (
              <div className='error'>
                {!formErrors.email.isValid && formErrors.email.message}
              </div>
            ) : null}
          </div>
          <div className='form-group'>
            <label className='form-label required'>Password</label>
            <input
              type='password'
              name='password'
              value={this.state.password}
              placeholder='Please Enter Password'
              className={`form-control ${
                this.state.password ? '' : 'mandatory'
              }`}
              onChange={this.changeHandler}
              //onChange={this.changeHandler.bind(this, this.state.password)}
            />
            {this.state.password ? (
              <div className='error'>
                {!formErrors.password.isValid && formErrors.password.message}
              </div>
            ) : (
              ''
            )}
          </div>
          <div className='form-group'>
            <div className='form-check'>
              <input
                type='checkbox'
                className='form-check-input'
                name='remember'
                onChange={this.changeHandler}
              />
              <label className='form-check-label'>Remember me</label>
            </div>
          </div>
          <div className='form-group'>
            <input
              type='submit'
              className='btn btn-block btn-primary'
              value='SIGN IN'
              // disabled={
              //   !(formErrors.password.isValid && formErrors.email.isValid)
              // }
            />
          </div>
          <div className='form-row bottom-group'>
            <div className='col'>
              <span>Forgot Password</span>
            </div>
            <div className='form-group col'>
              <span className='float-right'>
                Don't have an account?
                <Link to={RouteConst.Register} className='nav-link'>
                  Sign Up
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
  /*********************Render Mrthod*********************/
}

export default Login;
