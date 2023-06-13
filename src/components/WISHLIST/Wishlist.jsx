import React, { useContext } from 'react';
import { WishlistContext } from './WishlistContent';
import 'bootstrap/dist/css/bootstrap.min.css';

const Wishlist = () => {
  const { wishlist, removeFromWishlist } = useContext(WishlistContext);

  const handleRemoveFromWishlist = (product) => {
    removeFromWishlist(product);
  };

  if (!wishlist || wishlist.length === 0) {
    return (
      <div className="text-center d-flex align-items-center justify-content-center vh-100">
        <h1>You don't have any wishlists</h1>
      </div>
    );
  }

  return (
    <div className="container py-5">
      <h1 className="text-center mb-5">Your Wishlist</h1>
      <div className="product-list px-lg-5 px-md-3">
        <div className="row d-flex justify-content-center m-4 px-4 px-lg-5 px-md-5">
          {wishlist.map((product) => (
            <div className="col-12 col-xl-3 mb-5" key={product.id}>
              <div className="product-image">
                <img src={product.image} className="img-fluid rounded img-card" alt={product.name} />
                <div className="product-info">
                  <h5 className="mt-4 fs-5 fs-md-4 fs-lg-3">{product.name}</h5>
                  <p className="justify-content-between">Rp {product.price}</p>
                  <p className="d-inline-block w-100 fs-6 fs-md-5 fs-lg-4">{product.description}</p>
                </div>
                <div className="card-footer my-1">
                  <button
                    className="btn btn-danger"
                    onClick={() => handleRemoveFromWishlist(product)}
                  >
                    Remove From Wishlist
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Wishlist;
