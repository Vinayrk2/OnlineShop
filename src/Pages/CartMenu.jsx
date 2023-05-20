import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

export default function CartMenu({cartItems,setCartItems,cartItemCount,setCartItemCount}) {

    const [totalAmount, setTotalAmount] = useState(0)
    useEffect(()=>{
        setTotalAmount(cartItems.reduce((pre,curr)=>{return parseInt(pre) + (parseInt(curr.price)*parseInt(curr.quantity))},0))
        localStorage.setItem("CartItems",JSON.stringify(cartItems));
        // setCartItemCount(cartItems.reduce((pre,curr)=>{return pre+curr.quantity},0) )
        setCartItemCount(cartItems.length);
     },[cartItems]);

    function manipulateItem(item,i){
      // console.log(item)
      if(item.quantity === 1 && i === -1)
      {
        setCartItems(cartItems.filter((currentItem)=> currentItem.id !== item.id))
        return;
      }
      else{
      setCartItems(cartItems.map((currentItem)=>{
          if(currentItem.id === item.id){
            return {...currentItem, quantity: currentItem.quantity+i}
          }
          return {...currentItem}
      }))
      return;
    }
    } 

  return (
    <>
    <div className='card-container'>
      {
        cartItems.map((val)=>{
            return (
                // <div key={val.id}>
                //     <span> {val.id} + {val.name} + {val.price} : </span>
                //     <button onClick={()=>manipulateItem(val,-1)}> - </button> 
                //     <span> Quantity : {val.quantity} </span>
                //     <button onClick={()=>manipulateItem(val,1)}> + </button>

                // </div>

                <div class="card" key={val.id}>
                  <div class="card-header">
                    Cart Item
                  </div>
                  <div class="card-body">
                    <h5 class="card-title">{val.name}</h5>
                    <p class="card-text">
                      <p> RAM   : {val.ram}</p>
                      <p> Price : {val.price}</p></p>
                      <div className='btnContainer'>
                       <button className='btn leftBtn' onClick={()=>manipulateItem(val,-1)}> - </button>
                       <div> {val.quantity} </div>
                       <button className='btn rightBtn' onClick={()=>manipulateItem(val,1)}> + </button>
                      </div>
                  </div>
                </div>
            )
        })
      }
      </div>
      <div className='infoDiv'>
      {
        cartItems.length === 0? <Link to="/"><button className='btn btn-light'> Back To Home </button></Link> : <div> Total Amount to Pay : {totalAmount} Rupees </div>
      }
      </div>
      {
        cartItems.length !== 0 && <div className='centerDiv'><button className='btn btn-success' onClick={()=>alert("Currently Payment Option is not Available")}> Proceed For Payment </button></div>
      }
      </>
    
  )
}
