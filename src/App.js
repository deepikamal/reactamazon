import React from "react";
import { useState,useEffect } from "react";
import {Card} from "./Card";
import {BrowserRouter,Route,Routes,Link,useNavigate} from "react-router-dom"
//pages
import{}from "./Products";

const card=[{title:"moblie1",desc:"nice mobile"},{title:"moblie2",desc:"type mobile"}]
let userName="deepika"
let userPassword="12345"



function App() {
  //hook
  const [products,setProducts]=useState([])
 const [name,setName]=useState('')
 const [password,setPassword]=useState('')
 const [isAuthenticated,setAuth]=useState(false)

  useEffect(()=> {
    const getData=async()=>{
    const {products}=await fetch("https://dummyjson.com/products").then(res=>res.json());
    
    setProducts(products)
    console.log(products);
    }
    if(isAuthenticated){
getData()
    }
    
  
  
  
},[isAuthenticated])


const handleClick=()=>{
  if(userName==name &&password==userPassword){
    setAuth(true)
  }
  else{
    alert("Try Again")
  }
}

const handleUserName=(e)=>{
  const data=e.target.value;
  setName(data);
}
const handlePassword=(e)=>{
  setPassword(e.target.value);
  
}
  return (<>
<input value={name} onChange={handleUserName} placeholder="username" />
<input type="password" value={password}onChange={handlePassword} placeholder="password" />
<button onClick={handleClick}>Summit</button>
  <div className="appcon">
  
  {products.map(({title,description,thumbnail,price,rating})=><Card title={title} desc={description} thumbnail={thumbnail} price={price}rating={rating}/>)}

  </div>
  </>
  
  );
}

export default App;
