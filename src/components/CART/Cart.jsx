import React, { useContext } from 'react';
import { CartContext } from './CartAction';
import './Cart.css';

const Cart = () => {
  const { cart, removeFromCart, formatPrice, handleQuantityChange } = useContext(CartContext);

  if (!cart || cart.length === 0) {
    return (
      <div className="empty text-center d-flex align-items-center justify-content-center vh-100">
        <h1 className="">You don't have any items in the cart</h1>
      </div>
    );
  }

  return (
    <div className="cart-page">
      <div className="title11">
        <h1 className="my-5 text-center">Your Cart</h1>
      </div>
      <div className="row">
        {cart.map((product) => (
          <div className="col-12 col-xl-3 mb-5" key={product.id}>
            <div className="product-card m-4 rounded">
              <div className="card">
                <div className="product-image">
                  <img src={product.image} alt={product.name} className="img-fluid rounded img-card" />
                </div>
                <div className="product-info">
                  <h3 className="mt-4 fs-5 fs-md-4 fs-lg-3">{product.name}</h3>
                  <div className="justify-content-between">
                    <h5 className="d-inline-block w-100 fs-6 fs-md-5 fs-lg-4">Rp. {product.price}</h5>
                  </div>
                </div>
                <p className="card-text">Stock: {product.stock}</p>
                <div className="stock row">
                  <div className="col-12">
                    <p>Quantity:</p>
                  </div>
                  <div className="col-12">
                    <input
                      style={{ textAlign: 'center' }}
                      type="number"
                      id={`quantity-${product.id}`}
                      min="1"
                      max="10"
                      value={product.quantity}
                      className="form-control"
                      onChange={(event) => handleQuantityChange(event, product.id)}
                    />
                  </div>

                  <p className="mt-3">
                    Total: {formatPrice(product.price * product.quantity)}
                  </p>
                </div>
                <button className="btn btn-danger" onClick={() => removeFromCart(product)}>
                  Checkout
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="half-shadow-div"></div>
    </div>
  );
};

export default Cart;
