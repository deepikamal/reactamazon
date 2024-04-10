import {useState } from "react";
let userName="deepika"
let userPassword="12345"
export function Login({setAuth}){
          const [name,setName]=useState('')
          const [password,setPassword]=useState('')
          const handleUserName=(e)=>
                    {
                      const data=e.target.value;
                      setName(data);
                    }
          const handlePassword=(e)=>
                   {
                     setPassword(e.target.value);
                   }
          const handleClick=()=>
                  {
                   if(userName==name &&password==userPassword)
                   {
                    setAuth(true)
                   }
                   else
                   {
                     alert("Try Again")
                   }
           }   
      return(
               <>
              <div className="login">
                  <div>
                  <input value={name} onChange={handleUserName} placeholder="username" /> 
                  </div>
                  <div><input type="password" value={password}onChange={handlePassword}
                   placeholder="password" />
                   </div>
                   <button onClick={handleClick}>Summit</button>
             </div>
</>

)







}