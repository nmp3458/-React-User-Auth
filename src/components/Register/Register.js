import React from "react";
import { Link } from "react-router-dom";

import "./Register.scss";

import {RoutePath} from "../../constants/common";

class Register extends React.Component {
  render() {
    return (
      <div className="wrapper">
        <form>
          <div className="form-group header">
            <span>Sign Up</span>
          </div>
          <div className="form-row">
            <div className="form-group col">
              <label className="form-label">First Name</label>
              <input
                placeholder="Enter First Name"
                type="text"
                className="form-control"
              />
            </div>
            <div className="form-group col">
              <label className="form-label">Last Name</label>
              <input
                placeholder="Enter Last Name"
                type="text"
                className="form-control"
              />
            </div>
          </div>
          <div className="form-group">
            <label className="form-label">Email Address</label>
            <input
              className="form-control"
              type="text"
              placeholder="Please Enter Email"
            />
          </div>
          <div className="form-group">
            <label className="form-label">Password</label>
            <input
              className="form-control"
              type="password"
              placeholder="Please Enter Email"
            />
          </div>
          <div className="form-group">
            <div className="form-check">
              <input type="checkbox" className="form-check-input" />
              <label className="form-check-label">
                I want to receive marketing promotions and updates via email.
              </label>
            </div>
          </div>
          <div className="form-group">
            <button type="submit" className="btn btn-block btn-primary">
              SIGN UP
            </button>
          </div>
          <div className="form-row bottom-group">
            <div className="col"></div>  
            <div className="form-group col">
              <span className="float-right">
                Already have an account?
                <Link to={RoutePath.Login} className="nav-link">
                  Sign In
                </Link>
              </span>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

export default Register;
