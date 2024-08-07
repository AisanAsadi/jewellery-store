import React,{useState,useEffect} from "react";
import {Row,Col} from 'react-bootstrap'
import Productitem from '../Productitem'


function Neckless(){
   
    const[neckless, setplansneckless]=useState([]);


   useEffect(()=>{
    fetch('https://jewellery-store.chbk.run/api/products/necklaces',
     {header:"Access-Control-Allow-Origin: *"}
    )
  .then(response=>response.json())
 .then(json=>{
    console.log('e',json)
    setplansneckless(json)

 })
    .catch(e=>{
console.log(e)
 })

   },[]);
 


 return(
    <>
     <Row xs={1} md={4} className='g-4'>
         {neckless.map((item)=>(
             <Col align='center' key={item.id}>
                 <Productitem product={item}/>
             </Col>
         ))}
     
     </Row>
     </>
    )
}
export default Neckless