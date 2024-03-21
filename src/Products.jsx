import React from "react";
import {Card} from "./Card";
import{Circles}from "react-loader-spinner"
export function Products({}){
    const [products,setProducts]=React.useState([])
React.useEffect(()=> {

    const getData=async()=>{
    const {products}=await fetch("https://dummyjson.com/products").then(res=>res.json());
    
    setProducts(products)
   
    console.log(products);
    }
    setTimeout(getData,5000) 
    
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




return(
<>
 
 <div className="list"><h1>products list</h1></div>
 {products.map(({title,description,thumbnail,price,rating})=><Card title={title} desc={description} thumbnail={thumbnail} price={price}rating={rating}/>)}

 </>)


}