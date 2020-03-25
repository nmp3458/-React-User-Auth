import React, { Component } from 'react';
import './Login.scss'

class Login extends Component {
    render() {
        return (
            <div className="wrapper">
                <form>
                    <div className="form-group header">
                        <span>Sign In</span>
                    </div>
                    <div className="form-group">
                        <label className="form-label">Email Address</label>
                        <input className="form-control" type="text" placeholder="Please Enter Email" />
                    </div>
                    <div className="form-group">
                        <label className="form-label">Password</label>
                        <input className="form-control" type="password" placeholder="Please Enter Email" />
                    </div>
                    <div className="form-group">
                        <div className="form-check">
                            <input type="checkbox" className="form-check-input" />
                            <label className="form-check-label">Remember me</label>
                        </div>
                    </div>
                    <button type="submit" class="btn btn-block btn-primary">SIGN IN</button>
                </form>
            </div>)
    }
}

export default Login;