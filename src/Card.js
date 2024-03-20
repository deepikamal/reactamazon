import image from "./Untitled.jpeg"
export function Card({title,desc,thumbnail,price,rating}){

   return(
    
   <>
   
   <div className="con">
    <div><img className="imgall"src={thumbnail} alt="iii"/></div>
<div className="title"><h4>{title}</h4></div>
<div className="desc"><h3>{desc}</h3></div>
<div><h4>{"Price :"+price}</h4></div>
 <div><h4>{"Rating :"+rating}</h4></div>
 </div>
 </>
    



   )
 
}