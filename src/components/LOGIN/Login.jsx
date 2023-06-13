import React from "react";
import "./Login.css";
import { Link } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import CustomInput from "../LOGIN/CustomInput";

const firebaseConfig = {
  apiKey: "AIzaSyDGScmRzuQ-UW_toC-X1AC2kewwcuUQgt0",
  authDomain: "woof-fc8cb.firebaseapp.com",
  projectId: "woof-fc8cb",
  storageBucket: "woof-fc8cb.appspot.com",
  messagingSenderId: "585676791038",
  appId: "1:585676791038:web:fad171c02072cb92df99af",
  measurementId: "G-M87W8WPTBD"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

function Login() {
  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        console.log(result);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleLogin = (event) => {
    event.preventDefault();
    const email = event.target.email.value;
    const password = event.target.password.value;
    console.log("Email:", email);
    console.log("Password:", password);
  };

  return (
    <>
      <div
        className="px-5 d-flex align-items-center justify-content-center"
        style={{ background: "#ede0d4", minHeight: "90vh" }}
      >
        <div className="my-5 bg-white rounded-3 p-4 login-container">
          <h3 className="text-center title">Login</h3>
          <p className="text-center">Login to Your WOOF! Account</p>
          <div className="error text-center"></div>
          <form onSubmit={handleLogin}>
            <CustomInput
              type="email"
              name="email"
              label="Email"
              placeholder="Email"
            />
           <CustomInput
              type="password"
              label="Password"
              name="password"
              placeholder="Password"
            />
            <div className="my-3 text-end">
              <Link to="/forgot-password" className="forgot text-decoration-none">
                Forgot Password?
              </Link>
            </div>
            <div className="d-flex justify-content-center flex-wrap">
              <div className="row">
                <div className="col">
                  <button
                    className="btnLog border-0 px-3 py-2 mx-1 fw-bold text-decoration-none fs-8"
                    style={{ background: "#ffd333", borderRadius: "5px" }}
                    type="submit"
                  >
                    <Link to="/" className="btnLog text-decoration-none">
                      Login
                    </Link>
                  </button>
                </div>
              </div>
              <button
                className="btnSign border-0 px-3 py-2 mx-1 mb-2 fw-bold text-decoration-none fs-8"
                style={{ background: "#ffd333", borderRadius: "5px" }}
                type="button"
              >
                <Link to="/signup" className="btnSign text-decoration-none">
                  Sign Up
                </Link>
              </button>
              <button
                onClick={signInWithGoogle}
                className="btnGoogle border-0 px-3 mx-1 fw-bold text-decoration-none fs-8"
                style={{ background: "#ffd333", borderRadius: "5px", width: "230px" }}
              >
                <img
                  src="https://th.bing.com/th/id/R.0fa3fe04edf6c0202970f2088edea9e7?rik=joOK76LOMJlBPw&riu=http%3a%2f%2fpluspng.com%2fimg-png%2fgoogle-logo-png-open-2000.png&ehk=0PJJlqaIxYmJ9eOIp9mYVPA4KwkGo5Zob552JPltDMw%3d&risl=&pid=ImgRaw&r=0"
                  alt=""
                  style={{ width: "25px" }}
                />{" "}
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;