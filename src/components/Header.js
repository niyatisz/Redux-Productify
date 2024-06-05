import React, { useState } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { FaBars } from "react-icons/fa6";

const Header = () => {
    const { logout } = useAuth();
    const navigate = useNavigate();
    const isLoggedIn = localStorage.getItem('isLoggedIn')
    const handleLogout = () => {
        logout();
        navigate('/');
    };
    const cart = useSelector((state) => state.cart);

    const getTotalItems = () => {
        return cart.reduce((total, item) => total + item.quantity, 0);
    };

    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
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
                                <Link to='/cart' className='btn'>Cart ({getTotalItems()})</Link>
                                <Link to='/' className='btn logout' onClick={handleLogout}>Logout</Link>
                                <Link to='/edit-profile' className='btn logout'>Edit Profile</Link>
                                <Link to='/change-password' className='btn logout'>Change Password</Link>

                            </>
                        ) : (
                            <><Link to='/register' class="btn register">Register</Link><Link to='/' class="btn login">Log In</Link></>
                        )}
                    </li>
                    <div className="small-screens">
                        <FaBars className='bar-icon' onClick={toggleMenu} />
                        <ul className={menuOpen ? 'open' : ''}>
                            <li>
                                <Link to='/products' onClick={toggleMenu}>Products</Link>
                            </li>
                            {isLoggedIn ? (
                                <>
                                    <li><Link to='/cart' className='btn' onClick={toggleMenu}>Cart ({getTotalItems()})</Link></li>
                                    <li><Link to='/' className='btn logout' onClick={handleLogout}>Logout</Link></li>
                                    <li><Link to='/edit-profile' className='btn logout' onClick={toggleMenu}>Edit Profile</Link></li>
                                    <li><Link to='/change-password' className='btn logout' onClick={toggleMenu}>Change Password</Link></li>
                                </>
                            ) : (
                                <>
                                    <li><Link to='/register' className="btn register" onClick={toggleMenu}>Register</Link></li>
                                    <li><Link to='/' className="btn login" onClick={toggleMenu}>Log In</Link></li>
                                </>
                            )}
                        </ul>
                    </div>
                </ul>
            </nav>
        </div>
    )
}

export default Header