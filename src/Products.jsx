import React, { useRef } from "react";
import {Card} from "./Card";
import{Circles}from "react-loader-spinner"
import { useNavigate } from 'react-router-dom';
import {  useContext } from 'react';
import {Context} from "./Cartprovider"
import { Vcard } from "./Vcard";

export function Products({}){
    const [products,setProducts]=React.useState([])
    const [pop,setpop]=React.useState(false)
    const navigate=useNavigate()
    const cartcontext=useContext(Context)
    const {cart,dispatch}=cartcontext;
    console.log("prodetails::",cart)
       
            
React.useEffect(()=> {

    const getData=async()=>{
    const {products}=await fetch("https://dummyjson.com/products").then(res=>res.json());
    setProducts(products)
   
      }
    setTimeout(getData,500) 
     
    
 },[])
 
if(!products.length){
    return(
              
          <div className="loader-con"> 
              <Circles
                 height="80"
                 width="80"
                 color="#4FF7FF"
                 ariaLabel="circles-loading"
                 wrapperStyle={{}}
                 wrapperClass=""
                 visible={true}
              />
          </div>
 )
}

const itemTotal=cart.reduce((acc,currvalue)=>
acc+currvalue.qty,0
)    
    return(
         <>
            <div className="vcart-btn">
               <button className="cart-btn" onClick={()=>{setpop(!pop)}} >cart :{itemTotal}
               </button>
            </div> 
               {pop? 
               <div className="vcart-details">
               {cart.map((product)=> (
               <Vcard vcart={product}
                 dispatch={dispatch}
               />
               ))}
           </div>:""}
              
          <div className="productde">
             {products.map((product)=> (
                <Card product={product}
                 dispatch={dispatch}
                />
                ))
              }
          </div>
 
     </>
     )

}