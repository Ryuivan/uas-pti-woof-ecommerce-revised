import React, { createContext, useState, useEffect } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);

  useEffect(() => {
    const storedCart = sessionStorage.getItem('cart');
    if (storedCart) {
      setCart(JSON.parse(storedCart));
    }
  }, []);

  useEffect(() => {
    sessionStorage.setItem('cart', JSON.stringify(cart));
    calculateTotalPrice(cart);
  }, [cart]);

  const addToCart = (product) => {
    const isProductInCart = cart.some((item) => item.id === product.id);

    if (product.stock > 0) {
      let updatedCart = [];
      if (isProductInCart) {
        updatedCart = cart.map((item) => {
          if (item.id === product.id) {
            const updatedQuantity = Math.min(item.quantity + 1, 10);
            return { ...item, quantity: updatedQuantity };
          }
          return item;
        });
      } else {
        const newProduct = { ...product, quantity: 1 };
        updatedCart = [...cart, newProduct];
      }

      setCart(updatedCart);
      sessionStorage.setItem('cart', JSON.stringify(updatedCart));
      toast.success('Added to cart!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    } else {
      toast.error('Out of stock!', {
        position: 'top-right',
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: 'light',
      });
    }
  };

  const removeFromCart = (product) => {
    const updatedCart = cart.filter((p) => p.id !== product.id);
    setCart(updatedCart);
    sessionStorage.setItem('cart', JSON.stringify(updatedCart));
    toast.success('Checkout Successful!', {
      position: 'top-right',
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: 'light',
    });
  };

  const handleQuantityChange = (event, productId) => {
    const newCart = cart.map((item) => {
      if (item.id === productId) {
        const quantity = Math.min(Number(event.target.value), 10);
        return { ...item, quantity };
      }
      return item;
    });

    setCart(newCart);
    sessionStorage.setItem('cart', JSON.stringify(newCart));
  };

  const calculateTotalPrice = (updatedCart) => {
    let totalPrice = 0;
    updatedCart.forEach((product) => {
      const quantity = product.quantity || 1;
      const price = parseFloat(product.price);
      totalPrice += price * quantity;
    });
    setTotalPrice(totalPrice);
  };

  const formatPrice = (price) => {
    const formattedPrice = new Intl.NumberFormat('id-ID', { style: 'currency', currency: 'IDR' }).format(price);
    return formattedPrice + '0';
  };

  return (
    <CartContext.Provider value={{ cart, totalPrice, addToCart, removeFromCart, formatPrice, handleQuantityChange }}>
      <ToastContainer />
      {children}
    </CartContext.Provider>
  );
};
