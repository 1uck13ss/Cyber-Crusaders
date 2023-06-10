import React, { useState } from 'react';
import { validateLoginForm } from '../utils/validation.js';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [mobileNumber, setMobileNumber] = useState('');

  const handleFormSubmit = (e) => {
    e.preventDefault();
  
    const formData = {
      user: username,
      pass: password,
    };
  
    const errors = validateLoginForm(formData);
  
    if (Object.keys(errors).length === 0) {
      // Perform login logic here
      // ...
  
      setUsername('');
      setPassword('');
    } /*else {
      setError(errors);
    }*/
  };

  return (
    <div>
      <h1 className="text-green text-center font-weight-bold" style={{ fontSize: '40px' }}>
        Form Validation In JavaScript
      </h1>

      <h4 className="text-blue text-center font-weight-bold" style={{ fontSize: '20px' }}>
        Sign Up
      </h4>

      <div className="container">
        <br />

        <div className="col-lg-5 m-auto d-block">
          <form onSubmit={handleFormSubmit} className="bg-light">
            <div className="form-group">
              <label htmlFor="name" className="font-weight-regular">
                Name
              </label>
              <input
                type="text"
                name="name"
                className="form-control"
                id="name"
                autoComplete="off"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              <span id="Name" className="text-danger font-weight-regular"></span>
            </div>

            <div className="form-group">
              <label className="font-weight-regular">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                id="emails"
                autoComplete="off"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
              <span id="emailids" className="text-danger font-weight-regular"></span>
            </div>

            <div className="form-group">
              <label htmlFor="user" className="font-weight-regular">
                Username
              </label>
              <input
                type="text"
                name="user"
                className="form-control"
                id="user"
                autoComplete="off"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
              />
              <span id="username" className="text-danger font-weight-regular"></span>
            </div>

            <div className="form-group">
              <label className="font-weight-regular">Password</label>
              <input
                type="password"
                name="pass"
                className="form-control"
                id="pass"
                autoComplete="off"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
              <span id="passwords" className="text-danger font-weight-regular"></span>
            </div>

            <div className="form-group">
              <label className="font-weight-regular">Confirm Password</label>
              <input
                type="password"
                name="conpass"
                className="form-control"
                id="conpass"
                autoComplete="off"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
              />
              <span id="confrmpass" className="text-danger font-weight-regular"></span>
            </div>

            <div className="form-group">
              <label className="font-weight-regular">Mobile Number</label>
              <input
                type="text"
                name="mobile"
                className="form-control"
                id="mobileNumber"
                autoComplete="off"
                value={mobileNumber}
                onChange={(e) => setMobileNumber(e.target.value)}
              />
              <span id="mobileno" className="text-danger font-weight-regular"></span>
            </div>

            <input
              type="submit"
              name="submit"
              value="Submit"
              className="btn btn-primary"
              autoComplete="off"
            />
            <input
              type="reset"
              name="reset"
              value="Reset"
              className="btn btn-secondary"
              autoComplete="off"
            />
            Already have an account? <Link to="/login">Login</Link>
          </form>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Signup;
