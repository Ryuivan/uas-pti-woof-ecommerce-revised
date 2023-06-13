import React, { createContext, useState, useEffect } from 'react';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import "./content.css";

export const WishlistContext = createContext();

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  useEffect(() => {
    const storedWishlist = sessionStorage.getItem('wishlist');
    if (storedWishlist) {
      setWishlist(JSON.parse(storedWishlist));
    }
  }, []);

  const addToWishlist = (product) => {
    const isProductInWishlist = wishlist.some((p) => p.id === product.id);
    if (isProductInWishlist) {
      toast.warn('Product is already in the wishlist!', {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: false,
        draggable: true,
        progress: undefined,
        theme: "light",
      });
      return;
    }

    const updatedWishlist = [...wishlist];
    updatedWishlist.push(product);
    setWishlist(updatedWishlist);
    sessionStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
  
    toast.success('Added to wishlist!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  const removeFromWishlist = (product) => {
    const updatedWishlist = wishlist.filter((p) => p.id !== product.id);
    setWishlist(updatedWishlist);
    sessionStorage.setItem('wishlist', JSON.stringify(updatedWishlist));
    setWishlist(updatedWishlist);
    toast.error('Deleted from wishlist!', {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: false,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  return (
    <WishlistContext.Provider value={{ wishlist, addToWishlist, removeFromWishlist }} className="wishes">
      {children}
    </WishlistContext.Provider>
  );
};