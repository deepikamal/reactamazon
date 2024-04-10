import React from "react";
import { useState,useEffect } from "react";

export function CardDetails({productcart,dispatch}){
      const {id,thumbnail,title,description,rating,price,qty}=productcart
      const[number,setnumber]=useState(1)
      console.log(productcart)
      console.log(qty)
      return( 
             <> 
                <div className="con">
                   <div><img className="imgall"src={thumbnail} alt="iii"/></div>
                   <div className="title"><h4>{title}</h4></div>
                   <div className="desc"><h3>{description}</h3></div>
                   <div><h4>{"Price :"+price}</h4></div>
                   <div><h4>{"Rating :"+rating}</h4></div>
                   <div> 
                    item qty<button onClick={()=>dispatch({type:"mins",payload:productcart})}>-</button>
                    <button className="qty-btn">{qty}</button>
                    <button onClick={()=>dispatch({type:"plus",payload:productcart})}>+</button>
                    </div>
               </div>
    
  </>
   )
 }