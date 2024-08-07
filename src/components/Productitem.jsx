import {Card,Button,Form,Row,Col}from 'react-bootstrap'
import {useContext} from 'react'
import {Cardcontext} from '../context/Cardcontext'

function Productitem({product}){
    const cart = useContext(Cardcontext)
    const productQuantity=cart.getProductQuantity(product.id)
    return(
        <Card className='mt-5 card-bg'>
            <Card.Body>
                <Card.Img variant='top' src={product.image} height={200} style={{objectFit:'cover'}}/>
                <Card.Title align='right' className='text-light pt-4' >{product.name}</Card.Title>
                <Card.Text align='right' className='text-light' dir='rtl'>{product.price}تومان</Card.Text>
                {productQuantity>0?(
                    <><Form as={Row}>
                        <Form.Label column='true' sm='6' className ='text-white'>
                            تعداد:{productQuantity}
                        </Form.Label>
                        <Col sm='6'>
                         <Button onClick={()=>cart.addItemToCard(product.id)} sm='6' className='mx-1 text-white' variant='btn btn-outline-secondary' >+</Button>
                        <Button onClick={()=>cart.removeItemFromCard(product.id)} sm='6' className='mx-1 text-white' variant='btn btn-outline-secondary'>-</Button>
                        </Col>
                       
                        
                    </Form>
                    <Button 
                    onClick={()=>cart.deleteFromCard(product.id)}
                    className='my-4'
                    variant='btn btn-light'>حذف از سبد</Button>
                    </>
                ):(
                    <Button onClick={()=>cart.addItemToCard(product.id)}
                    variant='btn btn-outline-secondary' 
                    className='text-white'>افزودن سبد خرید</Button>
                )}

             
            </Card.Body>
        </Card>

    )
}
export default Productitem