import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from 'axios';

const Feedback = () => {
  const form = useRef();
  const [nama,setNama]=useState('');
  const [email,setEmail]=useState('');
  const [message,setMessage]=useState('');
  const formData = new FormData();

  const sendEmail = (e) => {
    e.preventDefault();
    console.log(nama, email, message);

    const data = {
      Nama: nama,
      Email: email,
      Message: message
    }
    axios.post('https://sheet.best/api/sheets/deb8e94f-ad61-4672-b6c9-c17b7be68356', data).then((response) => {
      console.log(response);
      setNama('');
      setEmail('');
      setMessage('');
    })

    formData.append('user_name', nama);
    formData.append('user_email', email);
    formData.append('message', message);

    emailjs.sendForm('service_sh5spyw', 'template_1wau3aq', formData, '8ZlKA5K8WoFpCUNoT')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };

  return (
    <div className="container">
      <form ref={form} onSubmit={sendEmail} autoComplete='off' className='text-center' id='send-feedback'>
        <div style={{width: '90%'}} className='mx-auto'>
        <input
          type="text"
          className="form-control my-3"
          name="user_name"
          label="Name"
          placeholder="Name"
          onChange={(e)=>{setNama(e.target.value)}}
          value={nama}
          required
        />
        <input
          type="email"
          className="form-control my-3"
          name="user_email"
          label="Email"
          placeholder="Email"
          onChange={(e)=>{setEmail(e.target.value)}}
          value={email} 
          required
        />
        <input
          type="text"
          className="form-control my-3"
          name="message"
          label="Message"
          placeholder="Message"
          onChange={(e)=>{setMessage(e.target.value)}}
          value={message}
          required
        />
        </div>
        <div>
          <div className="mt-1 d-flex justify-content-center flex-column gap-15 align-items-center" >
            <button 
                className="btnFeedback border-0 px-3 mb-2 fw-light w-40 text-center text-decoration-none fs-5" 
                type="submit"
                value="send"
                style={{ height: '32px', borderRadius: "8px", background: "#ffd333" }}
            >
              <p className='fw-light' style={{ fontSize: '16px', marginTop: '5px' }}>Submit</p>
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Feedback;