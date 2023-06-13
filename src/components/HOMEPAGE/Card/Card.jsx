// SigProdList.js
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Card.css';
import SignatureProducts from '../../data/SignatureProducts';
import AOS from 'aos';
import 'aos/dist/aos.css';
import Typewriter from 'typewriter-effect';

const SigProdList = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  const [hoveredProductId, setHoveredProductId] = useState(null);
  const [cart, setCart] = useState([]);

  const handleMouseEnter = (product) => {
    setHoveredProductId(product.id);
  };

  const handleMouseLeave = () => {
    setHoveredProductId(null);
  };

  const handleAddToCart = (product) => {
    setCart((prevCart) => [...prevCart, product]);
    console.log(cart)
  };

  return (
    <div id="productSection" className="sectionPad px-lg-5">
      <div className="product-title">
        <h1 className="type-effect">
          <Typewriter
            options={{
              strings: ['Our Signature Products'],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
      </div>
      <div className="product-list px-lg-5 px-md-3">
        <div className="row d-flex justify-content-center m-4 px-4 px-lg-5 px-md-5">
          {SignatureProducts.map((product) => (
            <div
              className="col-12 col-xl-3 mb-5"
              data-aos="fade-down"
              data-aos-duration="1200"
              key={product.id}
              onMouseEnter={() => handleMouseEnter(product)}
              onMouseLeave={handleMouseLeave}
            >
              <Link to={`/signature/${product.id}`} className="product-card m-4 p-rounded">
                <div className="card">
                  <div className="product-image">
                    <img src={product.image} alt={product.name} className="img-fluid rounded img-card" />
                  </div>
                  <div className="product-info">
                    <h3 className="mt-4 fs-5 fs-md-4 fs-lg-3">{product.name}</h3>
                    <div className="justify-content-between">
                      <h5 className="d-inline-block w-100 fs-6 fs-md-5 fs-lg-4"> Rp. {product.price}</h5>
                    </div>
                    <div className="d-flex justify-content-between addTo">
                      <ReactStars
                        count={5}
                        size={24}
                        value={5}
                        edit={false}
                        activeColor="#ffd700"
                        className="ratingStars"
                      />
                      {hoveredProductId === product.id && (
                        <button className="add-to-cart-button" onClick={() => handleAddToCart(product)}>
                          Add to Cart
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SigProdList;
