import React from 'react'
import {BrowserRouter,Route,Routes} from 'react-router-dom';
import '../CSS/layout.css';
import Header from '../Components/Header';
import Footer from '../Components/Footer';
import Home from './Home';
import Contact from './Contact';
import About from './About';
import { useState } from 'react';
import CartMenu from './CartMenu';

export default function Layout() {
  const [cartItemCount, setCartItemCount] = useState(0);
  const [cartItems, setCartItems] = useState( localStorage.getItem("CartItems")? JSON.parse(localStorage.getItem("CartItems")):[]);

  return (
    <>

      <BrowserRouter>
      <Header itemCount={cartItemCount} setCartItemCount={setCartItemCount} cartItems={cartItems}/>
      <Routes>
        <Route exact path='/' element={<Home setCartItemCount={setCartItemCount} cartItemCount={cartItemCount} cartItems={cartItems} setCartItems={setCartItems}/>}/>
        <Route path='/contact' element={<Contact />}/>
        <Route path='/about' element={<About />}/>
        <Route path='/cart' element={<CartMenu cartItems={cartItems} setCartItems={setCartItems} cartItemCount={cartItemCount} setCartItemCount={setCartItemCount}/>} />
      </Routes>
      </BrowserRouter>
      <Footer />
    </>
  )
}
