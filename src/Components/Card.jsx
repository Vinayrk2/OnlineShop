
const Card = ({item, addToCart})=>{

    return (
    <>
 
  <div className="card m-3">
    <img src={item.image} className="card-img-top image gt-2" alt="..." />
    <div className="card-body">
      <h5 className="card-title">{item.name}</h5>
      <p> RAM : {item.ram}</p>
      <p> CPU : {item.cpu} </p>
      <p className="card-text" style={{"color":"green","fontWeight":"bolder"}}>Price : {item.price}₹</p>
      <button className="btn btn-primary" onClick={()=>addToCart(item)}> Add To Cart </button>
    </div>
  </div>

    </>
    )
}

 export default Card;