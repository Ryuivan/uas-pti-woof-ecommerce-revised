import React from "react";
import "./ContactUs.css";
import Feedback from "../API/Feedback";

const ContactUs = () => {
  return (
    <div className="mx-5">
      <div className="my-5">
        <h1 className="text-center mx-3 mb-2">Feedback</h1>
        <Feedback />
      </div>  
      <div className='contactLine'></div>
      <h1 className="text-center mt-5">Contact Us</h1>
      <p className="contactUsP text-center mt-3">Please feel free to contact us if you have any questions, feedback, or special requests.</p>
      <div className="text-center mb-5">
        <p className="contactUsP">
          Phone: &nbsp;
          <a href="tel:+6287813684999" 
            className="contactus">
              +6287813684999
          </a>
        </p>
        <p>
          E-mail: &nbsp;
          <a href="mailto:yourwooff@gmail.com" 
            className="contactus mb-5">
              yourwooff@gmail.com
          </a>
        </p>
      </div>
    </div>
  );
};

export default ContactUs;
