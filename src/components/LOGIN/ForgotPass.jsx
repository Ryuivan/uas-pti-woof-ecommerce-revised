import React from "react";
import { Link } from "react-router-dom";
import CustomInput from "./CustomInput";
import './Login.css';

const Forgotpassword = () => {
  return (
    <>
      <div className="px-5 d-flex align-items-center justify-content-center"
        style={{ background: "#ede0d4", minHeight: "90vh" }}>
        <div className="my-5 bg-white rounded-3 p-4">
          <div className="auth-card">
            <h3 className="text-center title">Reset Your Password</h3>
            <p className="text-center m-0">
              We will send you an email to reset your password
            </p>
            <form action="" className="d-flex flex-column">
              <CustomInput type="email" 
                name="email" 
                label="Email"
                placeholder="Email" />
              <div>
                <div className="mt-3 d-flex justify-content-center flex-column align-items-center">
                  <button 
                      className="button border-0 px-3 mb-2 py-2 text-white fw-bold w-100 text-center text-decoration-none fs-5" type="submit"
                      style={{ background: "#ffd333", borderRadius: "25px" }}
                  >
                    <Link to="/" className="btnForgot text-decoration-none">
                      Submit
                    </Link>
                  </button>
                  <Link to="/login" className="cancel text-decoration-none">Cancel</Link>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Forgotpassword;