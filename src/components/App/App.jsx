import React, { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./ScrollToTop";
import { WishlistProvider } from '../WISHLIST/WishlistContent';
import { CartProvider } from '../CART/CartAction';
import './App.css';
import '../HOMEPAGE/Navbar/Navbar.css';
import Home from '../HOMEPAGE/Home';
import NavigationBar from '../HOMEPAGE/Navbar/NavigationBar';
import Footer from '../HOMEPAGE/Footer/Footer';
import SigProdDetail from '../HOMEPAGE/Card/SigProdDetail';
import Products from '../PRODUCT/Product';
import NavProdDetail from '../PRODUCT/NavProdDetail';
import About from '../ABOUT/About';
import Location from '../LOCATION/Location'
import Signature from '../PRODUCT/Signature'
import Wishlist from '../WISHLIST/Wishlist';
import Login from '../LOGIN/Login';
import SignUp from "../SIGNUP/SignUp";
import ForgotPassword from "../LOGIN/ForgotPass";
import CropTop from '../PRODUCT/CropTop';
import ContentLoader from 'react-content-loader';
import Hoodie from  "../PRODUCT/Hoodie";
import Sweater from "../PRODUCT/Sweater";
import ToteBag from "../PRODUCT/ToteBag";
import Tshirt from "../PRODUCT/Tshirt";
import SearchPage from "../HOMEPAGE/Search/SearchPage";
import Cart from '../CART/Cart'
import ContactUs from "../CONTACTUS/ContactUs";
import Profile from "../PROFILE/Profile";
import Post from "../API/Post";
import Chat from "../API/Chatbot";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const t = setTimeout(() => setLoading(false), 3000);

    return () => {
      clearTimeout(t);
    };
  }, []);

  return (
    <>
      {loading ? (
        <div style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', padding: '10px'}}>
          <ContentLoader 
            speed={2} 
            width={400} 
            height={160} 
            backgroundColor="#fdc500"
          >
            <circle cx="150" cy="100" r="15" />
            <circle cx="194" cy="100" r="15" />
            <circle cx="238" cy="100" r="15" />
          </ContentLoader>
        </div>
      ) : (
          <WishlistProvider>
            <CartProvider>
              <ScrollToTop />
              <NavigationBar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/products" element={<Products />} />
                <Route path="/products/:productId" element={<NavProdDetail />} />
                <Route path="/signature" element={<Signature />} />
                <Route path="/signature/:productId" element={<SigProdDetail />} />
                <Route path="/login" element={<Login />} />
                <Route path="/signup" element={<SignUp />} />
                <Route path="/forgot-password" element={<ForgotPassword />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/cart" element={<Cart />} />
                <Route path="/about" element={<About />} />
                <Route path="/location" element={<Location />} />
                <Route path="/crop-top" element={<CropTop />} />
                <Route path="/hoodie" element={<Hoodie />} />
                <Route path="/sweater" element={<Sweater />} />
                <Route path="/totebag" element={<ToteBag />} />
                <Route path="/t-shirt" element={<Tshirt />} />
                <Route path="/contact-us" element={<ContactUs />} />
                <Route path="/profile" element={<Profile />} />
                <Route path="/testimoni" element={<Post />} />
                <Route path="/search" element={<SearchPage />} />
              </Routes>
              <Chat />
              <Footer />
            </CartProvider>
          </WishlistProvider>
      )}
    </>
  );
}

export default App;