import React from "react";

export function Card({handlenum,handleRemove,dispatch,product}){
  const {id,thumbnail,title,description,rating,price}=product
  const[cart,setCart]=React.useState(true)
  const handleAddCard=()=>
  {
           if(cart)
           {
            setCart(cartstate=>!cartstate)
            dispatch({type:"add",payload:product})
           }
          else
           {
            setCart(cartstate=>!cartstate)
            dispatch({type:"remove",product,payload:1})
           }
  }
   return(
         <> 
              <div className="con">
                 <div><img className="imgall"src={thumbnail} alt="iii"/></div>
                 <div className="title"><h4>{title}</h4></div>
                 <div className="desc"><h3>{description}</h3></div>
                 <div><h4>{"Price :"+price}</h4></div>
                 <div><h4>{"Rating :"+rating}</h4></div>
                 <button onClick={handleAddCard}>{cart?"addcart" :"removecart"}</button> 
             </div>
    
   </>
   )
 }