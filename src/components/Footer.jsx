import {Navbar as NavbarBS }from 'react-bootstrap'
import {BsTelegram,BsInstagram,BsThreads} from 'react-icons/bs'

function Footer(){
return(  
    
    <div className='m-4'>
  
    <footer className='footer border-top border-secondary' >
    <div className='footer2'>
            <p>با ما همراه باشید</p>
            <div className='mx-2 '>
            <BsTelegram className='mx-2' fontSize={35}></BsTelegram>
            <BsInstagram className='mx-2 ' fontSize={35}></BsInstagram>
            <BsThreads className='mx-2' fontSize={35}></BsThreads>
        </div></div>
        <div className='footer1'>
            <p fontSize={40}>خدمات فروشگاهی</p>
            <h6>پرسش متداول</h6>
            <h6>راهنما</h6>
            <h6>تماس با ما</h6>
            <h6>درباره ما</h6>
            <h6>ارتباط پشتیبانی</h6>

        </div>
        
     

    </footer>
 

    
    </div>

)
}
export default Footer