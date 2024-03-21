import {useState } from "react";
let userName="deepika"
let userPassword="12345"

export function Login({setAuth}){
    const [name,setName]=useState('')
    const [password,setPassword]=useState('')
   
            const handleUserName=(e)=>{
        const data=e.target.value;
        setName(data);
      }
      const handlePassword=(e)=>{
        setPassword(e.target.value);
        
      }
      const handleClick=()=>{
        if(userName==name &&password==userPassword){
          setAuth(true)
        }
        else{
          alert("Try Again")
        }
      }
      return(
<>
<input value={name} onChange={handleUserName} placeholder="username" />
 <input type="password" value={password}onChange={handlePassword} placeholder="password" />
<button onClick={handleClick}>Summit</button>



</>


      )







}