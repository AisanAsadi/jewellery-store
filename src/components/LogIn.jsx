import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();

    const handleLogin = async (e) => {
        e.preventDefault();

        const loginObj = { username, password };

        try {
            const response = await fetch('https://jewellery-store.chbk.run/auth/login/', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(loginObj),
            });

            const data = await response.json();
            console.log('Server response:', data);  // Log the response for debugging

            if (response.ok) {
                if (data.token) {
                  
                    localStorage.setItem('username', loginObj.username);
                    localStorage.setItem('TOKEN', data.token);
                    toast.success('Login successful');
               
                } else {
                    navigate('/');
                    toast.error('Login failed: No token received');
                }
            } else {
                if (data.non_field_errors) {
                    toast.error(data.non_field_errors[0]);
                } else {
                    toast.error('Login failed');
                }
            }
        } catch (err) {
            toast.warning('Login failed: ' + err.message);
        }
    };

    return (
        <div>
            <div className="offset-lg-3 col-lg-6">
                <form className="container" onSubmit={handleLogin}>
                    <div className="card">
                        <div className="card-header">
                            <h1>ورود</h1>
                        </div>
                        <div className="card-body">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label> <span className="errmsg">*</span>نام کاربری </label>
                                        <input
                                            className="form-control"
                                            required
                                            value={username}
                                            onChange={(e) => setUsername(e.target.value)}
                                        />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="form-group">
                                        <label><span className="errmsg">*</span>رمز </label>
                                        <input
                                            className="form-control"
                                            name="password"
                                            required
                                            type="password"
                                            value={password}
                                            onChange={(e) => setPassword(e.target.value)}
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <button type="submit" className="btn btn-outline-secondary">ورود</button>
                    </div>
                </form>
            </div>
            <ToastContainer />
        </div>
    );
}

export default Login;
