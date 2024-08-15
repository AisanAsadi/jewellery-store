import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function CustomerDetail() {
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [country, setCountry] = useState('');
    const [phone, setPhone] = useState('');
    const [zipcode, setZipcode] = useState('');

    const navigate = useNavigate();

    const handleDetailSubmit = async (e) => {
        e.preventDefault();
    
        const detailObj = { address, city, country, phone, zipcode };
    
        try {
            const token = localStorage.getItem('token');
    
            if (!token) {
                toast.error('Token not found. Please log in.');
                navigate('/login');
                return;
            }
    
            const response = await fetch('https://jewellery-store.chbk.run/api/customer/details/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${token}`, // توکن را در هدر اضافه کنید
                },
                body: JSON.stringify(detailObj),
            });
    
            const data = await response.json();
    
            if (response.ok) {
                toast.success('Details submitted successfully');
                navigate('/');
            } else {
                console.log(`Error ${response.status}:`, data);
                if (data.non_field_errors) {
                    toast.error(data.non_field_errors[0]);
                } else {
                    toast.error(`Submission failed: ${data.detail || 'Unknown error'}`);
                }
            }
        } catch (err) {
            toast.warning('Submission failed: ' + err.message);
        }
    };
    

    return (
        <div className="container mt-5">
            <div className="row justify-content-center">
                <div className="col-lg-6">
                    <div className="card">
                        <div className="card-header text-center">
                            <h1>جزئیات مشتری</h1>
                        </div>
                        <div className="card-body">
                            <form onSubmit={handleDetailSubmit}>
                                <div className="mb-3">
                                    <label className="form-label">آدرس <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={address}
                                        onChange={(e) => setAddress(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">شهر <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={city}
                                        onChange={(e) => setCity(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">کشور <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={country}
                                        onChange={(e) => setCountry(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">تلفن <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={phone}
                                        onChange={(e) => setPhone(e.target.value)}
                                    />
                                </div>
                                <div className="mb-3">
                                    <label className="form-label">کد پستی <span className="text-danger">*</span></label>
                                    <input
                                        type="text"
                                        className="form-control"
                                        required
                                        value={zipcode}
                                        onChange={(e) => setZipcode(e.target.value)}
                                    />
                                </div>
                                <div className="d-grid">
                                    <button type="submit" className="btn btn-primary">ارسال</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <ToastContainer />
        </div>
    );
}

export default CustomerDetail;
