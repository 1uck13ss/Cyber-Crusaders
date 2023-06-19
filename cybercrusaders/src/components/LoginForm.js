import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validation1.js';
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";

const LoginForm = ({ onLogin, isLoggedIn}) => {
  const navigate = useNavigate();
  
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await handleLogin(values.email, values.password);
        console.log("Logged in!");
      } catch (error) {
        console.log('Login error:', error);
        // Handle login error, display error message, etc.
      }
    },
  });

  const handleLogin = async (email, password) => {
    try {
      // Call Firebase signInWithEmailAndPassword method
      await signInWithEmailAndPassword(auth, email, password);
      console.log('Login successful!');
      alert("Logged in!");
      onLogin();
      navigate('/home');
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.log('Login error:', error);
      // Handle login error, display error message, etc.
    }
  };

  if (isLoggedIn) {
    navigate('/home');
    return null;
  }

  return (
    <div>
      <h1 className="text-green text-center font-weight-bold" style={{ fontSize: '40px' }}>
        Form LOGIN
      </h1>

      <h4 className="text-blue text-center font-weight-bold" style={{ fontSize: '20px' }}>
        Login 
      </h4>
    <div className="container">
      <br />
      <div className="col-lg-5 m-auto d-block">
        <form onSubmit={formik.handleSubmit} className="bg-light">
          <div className="form-group">
            <label htmlFor="email" className="font-weight-regular">
              Email
            </label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder = "Enter your email..."
              id="email"
              autoComplete="off"
              value={formik.values.email}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.email && formik.errors.email && (
              <span className="text-danger font-weight-regular">{formik.errors.email}</span>
            )}
          </div>

          <div className="form-group">
            <label htmlFor="password" className="font-weight-regular">
              Password
            </label>
            <input
              type="password"
              name="password"
              className="form-control"
              id="password"
              autoComplete="off"
              value={formik.values.password}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.password && formik.errors.password && (
              <span className="text-danger font-weight-regular">{formik.errors.password}</span>
            )}
          </div>

          {/*submit button*/}
          <input
            type="submit"
            name="submit"
            value="Submit"
            className="btn btn-success"
            autoComplete="off"
          />
          Don't have an account? <Link to="/signup">Sign Up</Link>
        </form>
        <br /><br />
      </div>
    </div>
    </div>
  );
};

export default LoginForm;