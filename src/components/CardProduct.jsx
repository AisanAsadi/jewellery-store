import { Button } from "react-bootstrap"
import {useContext,useEffect,useState} from 'react'
import {getProductData} from '../components/data/items'
import { Cardcontext } from '../context/Cardcontext'


function CardProduct({id,quantity,productId}){
    const cart=useContext(Cardcontext)
    const [product, setProduct] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
  
    useEffect(() => {
      const fetchProduct = async () => {
        try {
          const result = await getProductData(productId);
          setProduct(result);
        } catch (err) {
          setError(err);
        } finally {
          setLoading(false);
        }
      };
  
      fetchProduct();
    }, [productId]);
    


    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error.message}</div>;
    if (!product) return <div>Product not found</div>;
    return(
        <>
        <div>
        
          <p key={product.id}>{product.name}</p>
          <p>تعداد:{quantity}</p>
          <p> قیمت:{quantity*product.price}</p>  
       
          <Button 
          size="sm"
          className="mb-5 text-white"
          variant="btn btn-outline-secondary"
          onClick={()=>cart.deleteFromCard(id)}>حذف</Button>
       </div> </> 
    )


}
export default  CardProduct