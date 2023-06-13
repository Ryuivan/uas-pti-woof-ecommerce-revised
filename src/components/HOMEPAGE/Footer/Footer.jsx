import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faYoutube, faTwitter, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";
import Waktu from '../../API/Waktu';
import WeatherComponent from "../../API/Weather";

export default function Footer() {
    return (
        <footer>
            <div className='container-fluid pt-5 px-5'>
                <div className='row footer-wrap px-lg-5'>
                    <div className='footer-col col-12 col-md-3 mb-4 px-lg-5'>
                        <div className="logo mt-2">
                            <Link to={'/'}>
                                <img src='https://cdn.discordapp.com/attachments/1091562630591811594/1117448928133128232/logo-no-background.webp' alt="logo-no-background" className='img-fluid' width={250} height={90} />
                            </Link>
                        </div>
                    </div>
                    <div className='footer-col col-12 col-md-3 mb-4 px-lg-5'>
                        <h4 className="footer-title">About Woof!</h4>
                        <Link to={'/about'}>
                            <div className='footer-content'>About Us</div>
                        </Link>
                        <Link to={'/contact-us'}>
                            <div className='footer-content'>Contact</div>
                        </Link>
                        <Link to={'/location'}>
                            <div className='footer-content'>Location</div>
                        </Link>
                        <Link to={'/profile'}>
                            <div className='footer-content'>Profile</div>
                        </Link>
                        <Link to={'/testimoni'}>
                            <div className='footer-content'>Testimoni</div>
                        </Link>
                    </div>
                    <div className='footer-col col-12 col-md-3 mb-4 px-lg-5'>
                        <h4 className='footer-title'>Social Media</h4>
                        <div>
                            <a href='https://instagram.com/yourwooff?igshid=ZGUzMzM3NWJiOQ=='>
                                <FontAwesomeIcon icon={faInstagram} className='footer-social ig'/>
                            </a>
                            <FontAwesomeIcon icon={faFacebook} className='footer-social fb' />
                            <FontAwesomeIcon icon={faTwitter} className='footer-social tw' />
                            <FontAwesomeIcon icon={faYoutube} className='footer-social yt' />
                            <FontAwesomeIcon icon={faGithub} className='footer-social git' />
                        </div>
                    </div>
                    <div className='footer-col col-12 col-md-3 px-lg-5 text-left'>
                        <h4 className='footer-title'>Additional Information</h4>
                        <WeatherComponent />
                        <Waktu />
                    </div>

                </div>
                <div className='footerLine'></div>
                <div className='copyright'>
                    <div className='container'>
                        <div className='row copyrights'>
                            <p className='icon text-center'>&copy; 2023 <a href='https://instagram.com/yourwooff?igshid=ZGUzMzM3NWJiOQ=='><b className='copy'>WOOF!</b></a> All Rights Reserved.</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
