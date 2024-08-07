import {Link} from 'react-router-dom'

function Success(){

    return(
        <div className="d-flex align-itemss-center justify-content-center flex-column my-4">
            <h2>سفارش با موفقیت ثبت شد</h2>
            <Link to='/' className='btn btn-light m-2'>بازگشت</Link>
        </div>
    )
}
export default Success