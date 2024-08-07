import { useState,useContext} from 'react'
import {Navbar as NavbarBS ,Button,Modal}from 'react-bootstrap'
import {BsCart} from 'react-icons/bs'
import {Cardcontext} from '../context/Cardcontext'
import CardProduct from './CardProduct'
import { Link } from "react-router-dom";

function Navbar(){
    const cart=useContext(Cardcontext)
    const productsCount=cart.items.reduce((sum,product)=>sum+product.quantity,0)
    const [showModal,setShowModal]=useState(false)

    const handleShow = ()=>{setShowModal(true)}
    const handleclose = ()=>{setShowModal(false)}

    async function checkout(id) {
        try {
            const token = localStorage.getItem('token'); // یا هر جایی که توکن را ذخیره کرده‌اید
            const id=localStorage.getItem('username')
            const res = await fetch('https://jewellery-store.chbk.run/api/order/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`,
                    'X-Product-ID': id, // ارسال productId در هدر سفارشی
             
                },
                body: JSON.stringify({ items: cart.items })
            });
            if (!res.ok) {
                console.error('Network response was not ok', res.statusText);
                return;
            }
            const data = await res.json();
            console.log('Response data:', data);
            if (data.token) {
                window.location.assign(data.token);
            }
        } catch (error) {
            console.error('Fetch error:', error);
        }
    }
 
    return(
        <>
        <NavbarBS className='border-bottom border-secondary'>
         
                 <div className='search'>
                 <Button variant='btn btn-danger'className='text-white' >جست و جو</Button></div>
                     <input type='search'name='search rtl' className='dark' placeholder='جست و جو' ></input>
                  
                 <NavbarBS.Collapse className='justify-content-end gap-2'>
                <Button onClick={handleShow} variant='btn btn-outline-secondary m-1'className='text-white'>
                    ({productsCount})<BsCart className='mx-1'></BsCart>
                    
      
                    سبد خرید</Button>
                   
                    <Button type='button' variant='btn btn-outline-secondary'className=' text-decoration-none text-white'><Link className='text-decoration-none  text-white' to={'/'} >خانه</Link></Button>
                    <Button variant='btn btn-outline-secondary'className='text-white '> <Link className='text-decoration-none  text-white' to={'/Signin'}> ثبت نام</Link></Button>
                    <Button variant='btn btn-outline-secondary'className='text-white '><Link className='text-decoration-none  text-white' to={'/login'}> ورود </Link> </Button>
               
            </NavbarBS.Collapse>
            
        </NavbarBS>
        <NavbarBS className='justify-content-end gap-2'>
        <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/bangle'}> پلاک </Link></Button>
                         <Button variant='btn btn-outline-secondary'className='text-white category '><Link className='text-decoration-none  text-white' to={'/ring'}> انگشتر </Link></Button>
                          <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/neckless'}> گردنبند </Link></Button>
                          <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/bangle'}> النگو </Link></Button>
                          <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/bangle'}> دستبند </Link></Button>
                          <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/bangle'}> اکسسوری </Link></Button>
                          <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/bangle'}> گوشواره </Link></Button>
                          <Button variant='btn btn-outline-secondary'className='text-white category'><Link className='text-decoration-none  text-white' to={'/bangle'}> پابند </Link></Button>
                        
                        
</NavbarBS>
        <Modal show={showModal} onHide={handleclose}
        contentClassName='card-bg' dir='rtl'>
            <Modal.Header closeButton closeVariant='white'></Modal.Header>
          
            <Modal.Body>
                {productsCount>0?(
                    <>
                    <h3 className='mb-4'> سبد خرید</h3>
                    {cart.items.map((item)=>(
                        <CardProduct key={item.id} id={item.id} quantity={item.quantity} productId={item.id}></CardProduct>
                    ))}
                    <CardProduct></CardProduct>
                    <h3> مجموع:{cart.getTotalAmount()}تومان</h3>
                    </>
                ):(
                    <h3>سبد خرید خالی است</h3>
                )}
                <Button className='mt-4 btn-light' onClick={checkout}>ثبت سفارش</Button>
                 
            </Modal.Body>
        </Modal>
        </>
    )
}


export default Navbar