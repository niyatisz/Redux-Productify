import React, { useEffect } from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';
import { Link, useNavigate } from 'react-router-dom';


const Login = () => {
    const {register, handleSubmit} = useForm();  
    const { login } = useAuth();

    const navigate = useNavigate();
    const onFormSubmit = (data) => {
       login(data)
    }
    useEffect(() => {
        const isLoggedIn = localStorage.getItem('isLoggedIn');
        if (isLoggedIn) {
          navigate('/products');
        }
      }, [navigate]); 
  return (
    <div className='login'>
         <div class="box">
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <div class="form">
                <h2>Login</h2>
               
                <div class="inputBox">
                    <input type="text" required="required"
                    {...register('email', {required: true})}/>
                    <span>Email</span>
                    <i></i>
                </div>
                <div class="inputBox">
                    <input type="password" required="required"
                    {...register('password', {required: true})}/>
                    <span>Password</span>
                    <i></i>
                </div>
                <div class="links">
                    <Link to='/register'>Don't have an account? Sign Up</Link>
                </div>
                <a href="https://akhs1.com/"><input type="submit" value="Login" /></a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login