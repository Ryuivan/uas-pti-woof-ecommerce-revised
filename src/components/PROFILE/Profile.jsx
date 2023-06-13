import React from 'react';
import './Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGithub } from '@fortawesome/free-brands-svg-icons';
import p1 from '../../assets/profile/agoy.jpg'
import p2 from '../../assets/profile/angel.jpeg'
import p3 from '../../assets/profile/ryu.gif'
import p4 from '../../assets/profile/sam.jpg'
import p5 from '../../assets/profile/vien.jpeg'

const Profile = () => {
  return (
    <div className='isi'>
      <div className='profile mt-3 mb-5 mx-5'>
        <div className='row'>
          <h1 className='text-center mt-4 mb-5'>Our Profile</h1>
        </div>
        <div className='row'>
          <div className='col'>
            <div className='cardProfile mb-5'>
              <div className='img-container img-fluid'>
                <img src={p2} alt='Angel' />
              </div>
              <h3>Angelima Khosina</h3>
              <p>00000067456</p>
              <div className='icons'>
                <a href='https://www.instagram.com/angelimakhosinaa/'>
                <FontAwesomeIcon icon={faInstagram} className='footer-social ig'/>
                </a>
                <a href='https://github.com/angelimakhosina'>
                <FontAwesomeIcon icon={faGithub} className='footer-social git' />
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='cardProfile'>
              <div className='img-container img-fluid'>
                <img src={p1} alt='Agoy' />
              </div>
              <h3>C. Yoga Shandy K.</h3>
              <p>00000067471</p>
              <div className='icons'>
                <a href='https://www.instagram.com/christianysk13/'>
                <FontAwesomeIcon icon={faInstagram} className='footer-social ig'/>
                </a>
                <a href='https://github.com/christianyoga13'>
                <FontAwesomeIcon icon={faGithub} className='footer-social git' />
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='cardProfile'>
              <div className='img-container img-fluid'>
                <img src={p3} alt='Ryu' />
              </div>
              <h3>Ryu Ivan Wijaya</h3>
              <p>00000065448</p>
              <div className='icons'>
                <a href='https://www.instagram.com/ryuivan/'>
                <FontAwesomeIcon icon={faInstagram} className='footer-social ig'/>
                </a>
                <a href='https://github.com/Ryuivan'>
                <FontAwesomeIcon icon={faGithub} className='footer-social git' />
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='cardProfile'>
              <div className='img-container img-fluid'>
                <img src={p5} alt='Vien' />
              </div>
              <h3>Vianca Vanesia B.</h3>
              <p>00000065031</p>
              <div className='icons'>
                <a href='https://www.instagram.com/vnesiav/'>
                <FontAwesomeIcon icon={faInstagram} className='footer-social ig'/>
                </a>
                <a href='https://github.com/Vnesiav'>
                <FontAwesomeIcon icon={faGithub} className='footer-social git' />
                </a>
              </div>
            </div>
          </div>
          <div className='col'>
            <div className='cardProfile'>
              <div className='img-container img-fluid'>
                <img src={p4} alt='Sam' />
              </div>
              <h3>W. Adrian Samuel</h3>
              <p>00000067030</p>
              <div className='icons'>
                <a href='https://www.instagram.com/samuelx_sx/' className='d-inline-block'>
                <FontAwesomeIcon icon={faInstagram} className='footer-social ig'/>
                </a>
                <a href='https://github.com/XLianCt' className='d-inline-block'>
                <FontAwesomeIcon icon={faGithub} className='footer-social git' />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
