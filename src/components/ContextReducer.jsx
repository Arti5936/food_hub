 import React, { createContext, useContext, useReducer } from 'react'
const cartState = createContext();
const cartDispatch = createContext();
const reducer = (state,action)=>{
 switch(action.type){
    case "ADD":
        return[...state,{id:action.id,name:action.name,qty:action.qty,size:action.size,price:action.price,img:action.img}]
        default:
            console.log("error in Reducer");
 }
}
 export const CartProvider=({children})=> {
 const[state,dispatch]= useReducer(reducer,[]);


   return (
     <div>
  <cartDispatch.Provider value = {dispatch}>
<cartState.Provider value={state}>
    {children}
</cartState.Provider>
  
  </cartDispatch.Provider>

     </div>
   )
 }

 export const useCart=()=>{
  useContext(cartState);
 };
 export const useDispatch=()=>{
    useContext(cartDispatch);

 }
 