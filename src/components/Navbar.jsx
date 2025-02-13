import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

export default function Navbar() {
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.removeItem('authToken');
        navigate('/login');
    };

    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-dark bg-danger position-sticky" style={{ boxShadow: '0px 10px 20px black', filter: 'blur(20)', position: 'fixed', zIndex: '10', width: '100%' }}>
                <div className="container bg-danger">
                    <Link className="navbar-brand fs-1 fst-italic" to="/">foodhub</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link fs-5 mx-3 active" aria-current="page" to="/">Home</Link>
                            </li>
                           {
                            (localStorage.getItem("authToken"))?
                            <li className='nav-item'>
                              <Link className='nav-link active fs-5' to='/'>MYOrders</Link>
                             
                            </li>
                          :"" }
                        </ul>
                        {(!localStorage.getItem('authToken')) ? 
                            <div className="d-flex">
                                <Link className="btn bg-white text-success mx-1" to="/login">Login</Link>
                                <Link className="btn bg-white text-success mx-1" to="/creatuser">Signup</Link>
                            </div>
                        : 
                            <div>
                            <div className="btn bg-white text-danger mx-2" >MYCART</div>
                            <div className="btn bg-white text-danger mx-2" onClick={handleLogout}>Logout
                            </div>
                          
                            </div>
                        }  
                    </div>
                      
                      
                </div>
            </nav>
        </div>
    );
}
