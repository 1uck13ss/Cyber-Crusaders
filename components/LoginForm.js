import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validation.js';

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Perform login logic here
      // ...
      console.log(values);
    },
  });

  return (
    <div className="container">
      <br />
      <div className="col-lg-5 m-auto d-block">
        <form onSubmit={formik.handleSubmit} className="bg-light">
          <div className="form-group">
            <label htmlFor="username" className="font-weight-regular">
              Username
            </label>
            <input
              type="text"
              name="username"
              className="form-control"
              id="username"
              autoComplete="off"
              value={formik.values.username}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
            />
            {formik.touched.username && formik.errors.username && (
              <span className="text-danger font-weight-regular">{formik.errors.username}</span>
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
  );
};

export default LoginForm;
