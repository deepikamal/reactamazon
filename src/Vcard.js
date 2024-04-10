import React from "react";
import image from "./Untitled.jpeg"
import { useState,useEffect } from "react";

export function Vcard({vcart,dispatch}){
  const {id,thumbnail,title,description,rating,price,qty}=vcart
  const[number,setnumber]=useState(1)
  console.log(vcart)
  console.log(qty)
 
  
   return( <> 
       <div className="vcontainer">
          <img className="vimgall"src={thumbnail} alt="iii"/>
           <div className="title"><h5>{title}</h5></div>
           <div><h6>{"Price :$"+price}</h6></div>
           <div><h6>{"Rating :"+rating}</h6></div>
           <div> <h6>item qty:</h6>
           <button className="mins-btn"onClick={()=>dispatch({type:"mins",payload:vcart})}>-</button>
           <button>{qty}</button>
           <button className="plus-btn"onClick={()=>dispatch({type:"plus",payload:vcart})}>+</button>
           </div>
 
  </div>
    
 </>
   )

 
}