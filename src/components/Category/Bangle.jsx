import React,{useState,useEffect} from "react";
import {Row,Col} from 'react-bootstrap'
import Productitem from '../Productitem'


function Ring(){
   
   

    const[plans, setplans]=useState([]);


   

    useEffect(()=>{
    fetch('https://jewellery-store.chbk.run/api/products/ring',
     {header:"Access-Control-Allow-Origin: *"}
    )
  .then(response=>response.json())
 .then(json=>{
    console.log('e',json)
      setplans(json)

 })
    .catch(e=>{
console.log(e)
 })

   },[]);
   
   

   useEffect(()=>{
    fetch('https://jewellery-store.chbk.run/api/products/necklaces',
     {header:"Access-Control-Allow-Origin: *"}
    )
  .then(response=>response.json())
 .then(json=>{
    console.log('e',json)
      setplans(json)

 })
    .catch(e=>{
console.log(e)
 })

   },[]);
   
   useEffect(()=>{
    fetch('https://jewellery-store.chbk.run/api/products/bangle',
     {header:"Access-Control-Allow-Origin: *"}
    )
  .then(response=>response.json())
 .then(json=>{
    console.log('e',json)
      setplans(json)

 })
    .catch(e=>{
console.log(e)
 })

   },[]);
   






 return(
     <Row xs={1} md={4} className='g-4'>
         {plans.map((item)=>(
             <Col align='center' key={item.id}>
                 <Productitem product={item}/>
             </Col>
         ))}
     
     </Row>
    )
}
export default Ring