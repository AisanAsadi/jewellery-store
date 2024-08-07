  import React,{ useState,} from "react";
import {useNavigate} from "react-router-dom";
import { toast } from "react-toastify";
import {BsPerson} from 'react-icons/bs'
import { Link } from "react-router-dom";

import '../CSS/signin.css'
function SignIn(){
    
    
    const[username, setusername]=useState("");
    const[password1, setpassword1]=useState("");
    const[password2, setpassword2]=useState("");

    const navigate=useNavigate();

    const handelsubmit=(e)=>{
      
        e.preventDefault();
        let regobj={username,password1,password2};
        console.log(regobj);
        fetch('https://jewellery-store.chbk.run/auth/registration/',{
            method:"POST",
            headers:{'content-type' :'application/json'},
            body:JSON.stringify(regobj),
    }).then((res)=>{
      toast.success(res+'registerd')
        navigate('/login');
        
    }).catch((err)=>{
        toast.warning(err+"failed")
    })
}
    

    return(


        <div className="register-photo">
            <div className="form-container ">
                <form className="image-holder m-5 " onSubmit={handelsubmit}>
                    <div className="cardd">
                      
                        <div className="card-header bg-dark  text-white ">  
                            <BsPerson className="mx-3 " fontSize={80}></BsPerson>
                        <h1 className="text-center ">ثبت نام</h1>
                       
                    
                        <div className="card-body m-1 justify-content-center">
                            <div className="justify-content-center">
                           
                                <div >
                                    <div className="form-group ">
                                        <label ><span className="errmsg">*</span>نام کاربری</label>
                                        <input className="form-control"placeholder="نام کاربری" required value={username} onChange={e=>setusername(e.target.value)}></input>
                                    </div>
                                </div>

                              
                                <div  >
                                    <div className="form-group">
                                        <label><span className="errmsg ">*</span>رمز</label>
                                        <input className="form-control rtl" placeholder="رمز" name="password" required type="password" value={password1} onChange={e=>setpassword1(e.target.value)}></input>
                                    </div>
                                </div>
                                <div  >
                                    <div className="form-group ">
                                        <label><span className="errmsg">*</span>تکرار رمز</label>
                                        <input className="form-control " placeholder='رمز' name="password" type="text" required value={password2} onChange={e=>setpassword2(e.target.value)}></input>
                                    </div>
                                </div>
      



                            </div>
                        </div>
                       
                            <button type="submit" className="btn btn-outline-secondary">ثبت نام</button>

                        </div>
                        <Link className="text-decoration-none btn btn-outline-secondary justify-content-end align-item-end signin" >ورود</Link>
                     
                    </div>
                   
                </form>
            </div>
           
        </div>
    )



}



export default SignIn