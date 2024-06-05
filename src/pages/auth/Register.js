import React, { useEffect } from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
    const {register, handleSubmit} = useForm();   
    const {signup} = useAuth();
    const navigate = useNavigate();

    const onFormSubmit = (data) => {
        signup(data);
    }

    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
          navigate('/products');
        }
      }, [navigate]); 
  return (
    <div className='register'>
         <div class="register-box">
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <div class="form">
                <h2>Register</h2>
                <div class="inputBox">
                    <input type="text" required="required"
                    {...register('firstName', {required: true})} />
                    <span>First Name</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="text" required="required"
                    {...register('lastName', {required: true})} />
                    <span>Last Name</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="email" required="required"
                    {...register('email', {required: true})}/>
                    <span>Email</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="number" required="required"
                    {...register('phoneNumber', {required: true})}/>
                    <span>Phone Number</span>
                    <i></i>
                </div>
                
                <div class="inputBox">
                    <input type="password" required="required"
                    {...register('password', {required: true})}/>
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required"
                    {...register('confirmPassword', {required: true})}/>
                    <span>Confirm Password</span>
                    <i></i>
                </div>
                <div class="links">
                    <Link to='/'>Already have an account? Login</Link>
                </div>
                <a href="https://akhs1.com/"><input type="submit" value="Register" /></a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Register