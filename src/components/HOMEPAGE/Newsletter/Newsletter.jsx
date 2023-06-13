import React, { useRef } from "react";
import './Newsletter.css';
import SendIcon from '@mui/icons-material/Send';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import emailjs from '@emailjs/browser';

export default function Newsletter() {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_jzgqgyg', 'template_4bfznd2', form.current, 'Q9eR1oE5WYIVotYJd')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
        toast.success('Email has been submitted!', {
            position: "top-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: false,
            draggable: true,
            progress: undefined,
            theme: "light",
        });
    };

    return (
        <form ref={form} onSubmit={sendEmail}>
            <div className="newsletter-container">
                <h1 className='newsletter-title'>Newsletter</h1>
                <div className="newsletter-desc text-center">
                    Get timely updates from your favorite products.
                </div>
                <div className="input-container">
                    <input type="email" name="user_email" className='newsletter-input' placeholder="Your Email" />
                    <button className='input-button' type='submit'>
                        <SendIcon />
                    </button>
                </div>
            </div>
        </form>
    );
}