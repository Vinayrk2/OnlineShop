import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';

export default function Header({itemCount,setCartItemCount,cartItems}) {
  useEffect(()=>{
    setCartItemCount(cartItems.length)
  },[])

  return (
   <>
   <div id='header'>
    <nav className="navbar navbar-expand-lg bg-body-tertiary">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/" style={{"fontWeight":"bolder"}}>ShopCart</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNavAltMarkup">
      <div className="navbar-nav ">
        <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        <Link className="nav-link" to="/contact">Contact</Link>
        <Link className="nav-link" to="/cart">Cart ({itemCount})</Link>
        <Link className="nav-link" to="/cart"><button className='btn btn-info'>Login/Sign up</button></Link>
      </div>  
    </div>
  </div>
</nav>
</div>
   </>
  )
}
