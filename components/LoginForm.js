import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { validationSchema } from "../utils/validation1.js";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase.js";
import ReCAPTCHA from "react-google-recaptcha";
import gifBackground from "../assets/gifBackground.gif";

const LoginForm = ({ onLogin, isLoggedIn }) => {
  const navigate = useNavigate();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [recaptchaVerified, setRecaptchaVerified] = useState(false);
  const recaptchaRef = React.createRef();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        await handleLogin(values.email, values.password);
        console.log("Logged in!");
      } catch (error) {
        console.log("Login error:", error); // Handle login error, display error message, etc.
      }
    },
  });

  const handleLogin = async (email, password) => {
    try {
      // Call Firebase signInWithEmailAndPassword method
      await signInWithEmailAndPassword(auth, email, password);

      console.log("Login successful!");
      alert("Logged in!"); //delete once deployed
      onLogin();
      navigate("/home");
      // Redirect or perform other actions after successful login
    } catch (error) {
      console.log("Login error:", error);
      // Handle login error, display error message, etc.
    }
  };

  if (isLoggedIn) {
    navigate("/home");
    return null;
  }

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevVisible) => !prevVisible);
  };

  // Handle Recaptcha logic
  const handleRecaptchaVerify = (response) => {
    setRecaptchaVerified(true);
    console.log("Recaptcha verified");
  };

  return (
    <div
      className="loginContainer"
      style={{
        width: "100vw",
        height: "100vh",
        backgroundImage: `url(https://media.tenor.com/tsc3Z0-setEAAAAC/space.gif)`,
        backgroundSize: "cover",
        overflow: "hidden",
      }}
    >
      <h1
        className="text-green text-center font-weight-bold"
        style={{
          color: "floralwhite",
          fontSize: "40px",
          background: "transparent",
        }}
      >
        Form LOGIN
      </h1>

      <h4
        className="text-blue text-center font-weight-bold"
        style={{
          color: "floralwhite",
          fontSize: "20px",
          backgroundColor: "transparent",
        }}
      >
        Login
      </h4>

      <div
        className="login-form-container"
        style={{ backgroundColor: "transparent", marginTop: "105px" }}
      >
        <br />

        <div
          className="col-lg-5 m-auto d-block"
          style={{
            backgroundColor: "black",
            borderRadius: "10px",
            opacity: "0.6",
          }}
        >
          <form
            onSubmit={formik.handleSubmit}
            style={{ background: "transparent", border: "none" }}
          >
            <div
              className="form-group"
              style={{ backgroundColor: "transparent" }}
            >
              <label
                htmlFor="email"
                className="font-weight-regular"
                style={{ color: "floralwhite", backgroundColor: "transparent" }}
              >
                Email
              </label>
              <input
                type="text"
                name="email"
                className="form-control"
                placeholder="Enter your email..."
                id="email"
                autoComplete="off"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
              />
              {formik.touched.email && formik.errors.email && (
                <span className="text-danger font-weight-regular">
                  {formik.errors.email}
                </span>
              )}
            </div>

            <div
              className="form-group"
              style={{ backgroundColor: "transparent" }}
            >
              <label
                htmlFor="password"
                className="font-weight-regular"
                style={{ color: "floralwhite", backgroundColor: "transparent" }}
              >
                Password
              </label>
              <div
                className="password-input"
                style={{ backgroundColor: "transparent" }}
              >
                <input
                  type={passwordVisible ? "text" : "password"}
                  name="password"
                  className="form-control"
                  id="password"
                  autoComplete="off"
                  value={formik.values.password}
                  onChange={formik.handleChange}
                  onBlur={formik.handleBlur}
                />
                <span
                  className="password-toggle"
                  style={{ backgroundColor: "transparent", color: "gold" }}
                  onClick={togglePasswordVisibility}
                >
                  {passwordVisible ? (
                    <i className="fa fa-eye-slash"></i>
                  ) : (
                    <i className="fa fa-eye"></i>
                  )}
                </span>
              </div>
              {formik.touched.password && formik.errors.password && (
                <span className="text-danger font-weight-regular">
                  {formik.errors.password}
                </span>
              )}
            </div>

            {/* ReCAPTCHA */}
            <div style={{ backgroundColor: "transparent", border: "none" }}>
              <ReCAPTCHA
                ref={recaptchaRef}
                sitekey="6LccIrkmAAAAAEYXpCBt4AOitCid97jFauP1cZa0"
                onChange={handleRecaptchaVerify}
                style={{ display: "inline-block" }}
              />
            </div>

            {/*submit button*/}
            <input
              type="submit"
              name="submit"
              value="Log In"
              className="btn btn-success"
              autoComplete="off"
              style={{ backgroundColor: "green" }}
              onClick={(e) => {
                if (!recaptchaVerified) {
                  e.preventDefault();
                  alert(
                    "Please verify reCaptcha, are you a robot sent by space?"
                  );
                }
              }}
            />
          </form>
          <br></br>
          <div style={{ color: "floralwhite", backgroundColor: "transparent" }}>
            Don't have an account? <Link to="/signup">Sign Up</Link>
          </div>

          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default LoginForm;
