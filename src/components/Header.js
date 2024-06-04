import React from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    return (
        <div className='header'>
            <nav class="flex align-center">
                <p><span>Pro</span>ductify</p>
                <ul>
                    <li class="big-screens">
                        <Link to='/products' >Products</Link>

                        {isLoggedIn ? (
                            <>
                            <Link to='/' className='btn logout' onClick={handleLogout}>Logout</Link>
                            <Link to='/edit-profile' className='btn logout'>Edit Profile</Link>
                            <Link to='/change-password' className='btn logout'>Change Password</Link>

                            </>
                        ) : (
                            <><Link to='/register' class="btn register">Register</Link><Link to='/' class="btn login">Log In</Link></>
                        )}
                    </li>
                    <li class="small-screens">
                        <i class="fa-solid fa-bars"></i>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Header