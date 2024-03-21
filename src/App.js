import React from "react";
import { createElement,useState,useEffect } from "react";
import {Card} from "./Card";
import {BrowserRouter,Route,Routes,Link,useNavigate} from "react-router-dom"
//pages
import{Products}from "./Products";
import {Login}from "./Login"
import {Home} from "./Home"


const card=[{title:"moblie1",desc:"nice mobile"},{title:"moblie2",desc:"type mobile"}]




export function App() {
  const navigate=useNavigate();
  //hook
  
 
 const [isAuthenticated,setAuth]=useState(false)
 useEffect(()=>{
  if(isAuthenticated){
    navigate('/products')
  }
 },[isAuthenticated]
 )
  return (

  <div className="appcon">
  
<Routes>
  <Route path="/" element={<Home/> }/>
<Route path="/login" element={<Login setAuth ={setAuth}/>} 
/>
 

<Route path="/products" element={
 
  <Products/>
  }/>
</Routes>



   </div>
 
  
  )
}


export default App