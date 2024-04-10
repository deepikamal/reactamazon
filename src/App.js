import React from "react";
import { useState,useEffect } from "react";
import {Card} from "./Card";
import {BrowserRouter,Route,Routes,Link,useNavigate} from "react-router-dom"
import{Products}from "./Products";
import {Login}from "./Login"
import {Home} from "./Home"
import {Procard} from "./procard"
import {Cartprovider} from "./Cartprovider"

export function App() {
  const navigate=useNavigate();
  const [isAuthenticated,setAuth]=useState(false)
        useEffect(()=>
        {
             if(isAuthenticated)
             {
             navigate('/products')
             }
  
        },[isAuthenticated])

  return (

   <div className="appcon">
    
      <Cartprovider>
             <Routes>
                 <Route path="/" element={<Home/> }/>
                 <Route path="/login" element={<Login setAuth ={setAuth}/>} />
                 <Route path="/products" element={<Products/>}/>
                 <Route path="/procard" element={<Procard/>}/>
             </Routes>
       </Cartprovider>
  </div>
     )

}

export default App