import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../../context/AuthContext';


const Login = () => {
    const {register, handleSubmit, formState: {errors}} = useForm();  
    const { login } = useAuth();
    const onFormSubmit = (data) => {
       login(data)
    }
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
                    <a href="https://akhs1.com/">Forgot password?</a>
                    <a href="/register">Don't have an account? Sign Up</a>
                </div>
                <a href="https://akhs1.com/"><input type="submit" value="Login" /></a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Login