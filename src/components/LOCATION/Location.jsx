import React from 'react';
import './Location.css';

const Location = () => {
  return (
    <div classNameName="container">
      <div classNameName="row">
        <div classNameName="col">
        <h1 className="judulAlamat text-center mt-5">Watch Our Project Demo!</h1>
        </div>
      </div>

      <div className="row homeAlamat text-center">
        <div className="col mb-3">
          <h5 className="alamatDescription">
            Lobby B, Universitas Multimedia Nusantara, Jalan Scientia Boulevard Gading, Curug
            Sangereng, Serpong, Kecamatan Kelapa Dua, <br/> Kabupaten Tangerang, Banten 15810.
          </h5>
        </div>
        
        <div classNameName="row">
          <div className="col mb-5">
            <div className="embed-responsive embed-responsive-16by9">
              <iframe 
                title='umn'
                className="embed-responsive-item"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0521817331814!2d106.61592027598088!3d-6.256856561260872!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69fb56b25975f9%3A0x50c7d605ba8542f5!2sMultimedia%20Nusantara%20University!5e0!3m2!1sen!2sid!4v1682008053931!5m2!1sen!2sid"
                width="90%" 
                height="750" 
                allowfullscreen="" 
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              >
              </iframe>
            </div>
          </div>
        </div>
      </div>

    </div>
    
  );
};

export default Location;
