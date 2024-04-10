import { createContext,useReducer} from 'react';

export const Context = createContext(null);
export function Cartprovider(props){
        const reducer=(cart,action)=> {
                const{type,payload}=action
                   if(type==="add")
                   {
                     return [...cart,{...payload, qty: 1}]                  
                   }
                   if(type==="remove")
                   {
                      return cart.filter((value) => value.id !== payload.id)
                   }
                   if(type==="plus")
                   {
                      return (
                                cart.map(item=>{
                                if(item.id==payload.id){
                                payload.qty++
                                return payload
                                }
                                return item 
                               })
                        )  
                   }
                   if(type==="mins")
                   {  
                        if(payload.qty<2)
                        {
                        return cart.filter((item) => item.id !== payload.id)
                        }
                
                        return (
                                cart.map(item=>{
                                if(item.id==payload.id)
                                {
                                payload.qty--
                                return payload
                                }
                                return item 
                        })
                        )  
                   }
                   
        }
         
    const [cart,dispatch]=useReducer(reducer,[])
   
            return (
                   <Context.Provider value={{cart,dispatch}}>
                        {props.children}
                   </Context.Provider>

                   )

}