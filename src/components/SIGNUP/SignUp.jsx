import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "../LOGIN/CustomInput";

const Signup = () => {
  return (
    <>
      <div
        className="px-5 d-flex align-items-center justify-content-center"
        style={{ background: "#ede0d4", minHeight: "90vh" }}
      >
        <div className="my-5 bg-white rounded-3 p-4 login-container">
          <div className="auth-card">
            <h3 className="text-center title">Sign Up</h3>
            <form action="" className="d-flex flex-column" id="sign-up">
              <CustomInput
                type="text"
                name="name"
                label="Name"
                placeholder="Name"
              />
              <CustomInput
                type="password"
                label="Password"
                name="password"
                placeholder="Password"
              />
              <CustomInput
                type="email"
                name="email"
                label="Email"
                placeholder="Email"
              />
              <CustomInput
                type="tel"
                label="Mobile Number"
                name="mobile"
                placeholder="Mobile Number"
              />
              <div>
                <div className="text-center mt-3">
                  <button
                    className="btnSign border-0 px-3 py-2 mx-1 fw-bold w-8 text-decoration-none fs-8"
                    style={{
                      background: "#ffd333",
                      borderRadius: "25px",
                    }}
                  >
                    <Link to="/" className="btnSign text-decoration-none">
                      Sign Up
                    </Link>
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Signup;