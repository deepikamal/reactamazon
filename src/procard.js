import React from "react";
import { useState,useEffect } from "react";
import {  useContext } from 'react';
import {Context} from "./Cartprovider"
import {CardDetails} from "./CardDetails"
export function Procard(){

   const cartcontext=useContext(Context)
   const {cart,dispatch}=cartcontext;
   console.log("procard::",cart)
        return( 
                <> 
                  <div className="procard"> <h2>product details</h2>  <br></br>
                  </div>
                 <div className="procartdetails">
                      {cart.map((productcart)=> (
                      <CardDetails productcart={productcart}
                      dispatch={dispatch}
                      />
                      ))
                      }
                      
                </div>
 </>
   )
 
}