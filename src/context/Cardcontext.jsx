import { createContext,useState } from "react";
import {getProductData } from "../components/data/items";

export const Cardcontext= createContext({
    items:[],
    getProductQuantity:()=>{},
    addItemToCard:     ()=>{},
    removeItemFromCard:()=>{},
    deleteFromCard:    ()=>{},
    getTotalAmount:    ()=>{},

})

export function CardProvider({children}){
    const [cardProduct,setCardProduct]=useState([])

    function getProductQuantity(id){
        const quantity=cardProduct.find((item)=>item.id===id)?.quantity
        
        if (quantity===undefined){
            return 0
        }
        return quantity

    }
    function addItemToCard(id){
        const quantity =getProductQuantity(id)

        if(quantity===0){
            setCardProduct([...cardProduct,{id:id, quantity: 1}])
        }else{
            setCardProduct(
                cardProduct.map((item)=>item.id===id?{...item,
               quantity:item.quantity + 1}:item)
            )
        }
    }

    function deleteFromCard(id){
        setCardProduct((cardProduct)=>
          cardProduct.filter((item)=>{
            return item.id !== id
       })
      )
    }
    
    function removeItemFromCard(id){
        const quantity=getProductQuantity(id)
        if (quantity===1){
            deleteFromCard(id)
        }else{
            setCardProduct(
                cardProduct.map((item)=>item.id===id?{...item,
                    quantity:item.quantity-1
                }:item)
            )
        }
    }

    function getTotalAmount(){
        let totalAlmost= 0

        cardProduct.map((item)=>{const productData=getProductData(item.id)
            totalAlmost += productData.price*item.quantity
            
        })
        return totalAlmost
    }
    
    const ContextValue={
        items:cardProduct,
        getProductQuantity,
        addItemToCard,
        removeItemFromCard,
        deleteFromCard,
        getTotalAmount,
    }
    return(
        <Cardcontext.Provider value={ContextValue}>{children}</Cardcontext.Provider>
    )
}