import axios from "axios";
import { useEffect, useState } from "react";
import Card from "../Components/Card";
import Items from "../API/db";
import "../CSS/extra.css";


function App({cartItemCount, setCartItemCount,cartItems,setCartItems}) {

  const [items, setItems] = useState([]);
  const [error, setError] = useState("");
  // const [cartItems, setCartItems] = useState([]);

  useEffect(()=>{
    
    if(localStorage.getItem("CartItems")){
      // console.log(cartItems)
      // setCartItemCount(cartItems.reduce((pre,curr)=>{return pre+curr.quantity},0) )
      setCartItemCount(cartItems.length)
    }

    // axios.get("./db.json")
    // .then((res) => {setItems(res.data); console.log("Data loaded ")})
    // .catch((err)=>{
    //   console.log(err.message)
    //   setError(err.message);
    // });
    // console.log(Items.Items)
    setItems(Items.Items)
  },[]);

  const addToCart = (newItem)=>{
    let index = cartItems.length > 0? cartItems.findIndex((i)=>i.id == newItem.id): -1;
    let newItems;
  
                    // item is no in the cart
  if(index === -1){
    newItem.quantity = 1;
    setCartItems((preItems)=> ([...preItems,newItem]))
    newItems = [...cartItems,newItem];
    setCartItemCount(cartItemCount+1);
  }
                    // item is there, it need to increase the quantity
  else if(index !== -1){
      newItems = cartItems.slice();
      newItems[index].quantity += 1;
      setCartItems([...newItems]);
      
  }
  else{
    newItems = [...cartItems];
  }
    localStorage.setItem("CartItems",JSON.stringify(newItems));
    
    // console.log(cartItems)
  }

  return (
    
    <>
    <div className="mt-3">
    {error !== "" && <div>{error}</div>}
    <div className="card-group">
    {
      
      items.map((item)=>{
        return <Card item={item} key={item.id} addToCart={addToCart}/>
      })
    }
    </div>
    </div>
    <div className="toast" role="alert" aria-live="assertive" aria-atomic="true">
  <div className="toast-header">
    {/* <img src="..." className="rounded me-2" alt="..."> */}
    <strong className="me-auto">Bootstrap</strong>
    <small>11 mins ago</small>
    <button type="button" className="btn-close" data-bs-dismiss="toast" aria-label="Close"></button>
  </div>
  <div className="toast-body">
    Hello, world! This is a toast message.
  </div>
</div>
    </>

  )
}

    // let newItems;
    // let item = cartItems.find((i)=> i.id == newItem.id);
    // console.log(newItem);

    // if(!item){
    //   newItem.quantity = newItem.quantity? newItem.quantity: 1;
    //   newItems = [...cartItems,newItem];
    //   console.log(newItem.quantity)
    // }
    // else if(item){
    //   console.log("Adding one more")
    // }
    // setCartItems(newItems);
    // setCartItemCount(cartItemCount+1);
    // localStorage.setItem("CartItems", JSON.stringify(newItems));x  
    // console.log(cartItems);

export default App
