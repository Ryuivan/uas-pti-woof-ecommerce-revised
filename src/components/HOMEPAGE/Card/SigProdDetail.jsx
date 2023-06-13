import React, { useState, useContext } from 'react';
import { useParams } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import products from '../../data/SignatureProducts';
import './SigProdDetail.css';
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import 'react-toastify/dist/ReactToastify.css';
import { WishlistContext } from '../../WISHLIST/WishlistContent';
import { CartContext } from '../../CART/CartAction';

const SigProdDetail = () => {
  const { productId } = useParams();
  const product = products.find((product) => product.id === parseInt(productId));

  const { addToWishlist } = useContext(WishlistContext);
  const { addToCart } = useContext(CartContext);

  const [selectedColor, setSelectedColor] = useState(product.colors[0]);
  const [selectedImage, setSelectedImage] = useState(product.colors[0].image);

  const handleColorClick = (colorCode) => {
    const selectedColorObj = product.colors.find((color) => color.code === colorCode);
    setSelectedColor(selectedColorObj);
    setSelectedImage(selectedColorObj.image);
  };

  const [selectedSize, setSelectedSize] = useState('');

  const [rating, setRating] = useState(null);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  if (!product) {
    return (
      <div>
        <h2>Produk tidak ditemukan</h2>
      </div>
    );
  }

  return (
    <div className='productDetail px-5 mt-4'>
      <div className='row px-lg-5'>
        <div className='col-12 col-lg-6 text-center px-sm-3 my-5'>
          <img src={selectedImage} alt={product.name} className='img-detail' />
        </div>
        <div className='productDescription col-12 col-lg-6 pt-lg-5 px-0'>
          <h3>{product.name}</h3>
          <div className='detailBox d-flex justify-content-between mb-3'>
              <h4 className='mt-2'>Rp. {product.price}</h4>
              <ReactStars
                count={5}
                size={24}
                value={rating !== null ? rating : 5}
                edit={true}
                activeColor="#ffd700"
                className='ratingStars'
                onChange={(newRating) => setRating(newRating)}
              />
            </div>
          <p>{product.description}</p>
          <div className='detailLine'></div>
          <div className='productInfo'>
            <div className='productColor'>
              <span>Warna: </span>
              <div className='colorOptions d-flex justify-content-start align-items-center'>
                {product.colors.map((color, index) => (
                  <div
                    key={index}
                    className={`colorOption ${selectedColor.code === color.code ? 'selected' : ''}`}
                    style={{ backgroundColor: color.code }}
                    onClick={() => handleColorClick(color.code)}
                  ></div>
                ))}
              </div>
            </div>
            <div className='productSize'>
              <span>Ukuran: </span>
              <div className='sizeOptions'>
                {['XS', 'S', 'M', 'L', 'XL'].map((size, index) => (
                  <button
                    key={index}
                    className={`sizeOption ${selectedSize === size ? 'selected' : ''}`}
                    onClick={() => handleSizeClick(size)}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className='d-flex justify-content-start'>
                <div className="row px-1">
                  <div className="cartImage mb-5 col">
                    <button className='btn-add-to-cart pt-1 mt-1 pb-1' onClick={() => addToCart(product)}>Add to Cart</button>
                  </div>

                  <div className='wishlistImage col mt-2'>
                    <FontAwesomeIcon icon={faHeart} onClick={() => addToWishlist(product)} className="sig-icon nav-heart" style={{ cursor: 'pointer' }} />
                  </div>
                </div>
              </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SigProdDetail;