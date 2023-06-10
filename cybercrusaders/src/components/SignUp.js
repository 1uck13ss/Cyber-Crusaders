import React from 'react';
import { Link } from 'react-router-dom';
import { useFormik } from 'formik';
import { validationSchema } from '../utils/validation.js';

function Signup() {
  const formik = useFormik({
    initialValues: {
      name: '',
      email: '',
      username: '',
      password: '',
      confirmPassword: '',
      mobileNumber: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      // Perform signup logic here
      // ...
      console.log(values);
    },
  });

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
          <form onSubmit={formik.handleSubmit} className="bg-light">
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
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.name && formik.errors.name && (
                <span className="text-danger font-weight-regular">{formik.errors.name}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="email" className="font-weight-regular">
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
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

            <div className="form-group">
              <label htmlFor="confirmPassword" className="font-weight-regular">
                Confirm Password
              </label>
              <input
                type="password"
                name="confirmPassword"
                className="form-control"
                id="confirmPassword"
                autoComplete="off"
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.confirmPassword && formik.errors.confirmPassword && (
                <span className="text-danger font-weight-regular">{formik.errors.confirmPassword}</span>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="mobileNumber" className="font-weight-regular">
                Mobile Number
              </label>
              <input
                type="text"
                name="mobileNumber"
                className="form-control"
                id="mobileNumber"
                autoComplete="off"
                value={formik.values.mobileNumber}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.mobileNumber && formik.errors.mobileNumber && (
                <span className="text-danger font-weight-regular">{formik.errors.mobileNumber}</span>
              )}
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
