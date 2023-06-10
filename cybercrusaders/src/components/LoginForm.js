import React, { useState } from 'react';
import { validateLoginForm } from '../utils/validation.js';
import { Link } from 'react-router-dom';

const LoginForm = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = (e) => {
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
    } else {
      setError(errors);
    }
  };
  

  return (
    <div className="container">
      <br />
      <div className="col-lg-5 m-auto d-block">
        <form onSubmit={handleSubmit} className="bg-light">
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
            <span id="username" className="text-danger font-weight-regular">
              {error}
            </span>
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

          <input
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-success"
            autoComplete="off"
          />
          Don't have an account?
          <Link to="/signup">Sign Up</Link>
        </form>
        <br /><br />
      </div>
    </div>
  );
};

export default LoginForm;
