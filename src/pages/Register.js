import React from 'react'
import './Login.css'
import {useForm} from 'react-hook-form'
import { useAuth } from '../context/AuthContext';

const Register = () => {
    const {register, getValues, handleSubmit, formState: {errors}} = useForm();   
    const {signup} = useAuth();

    const onFormSubmit = (data) => {
        signup(data);
    }
  return (
    <div className='register'>
         <div class="register-box">
            <form onSubmit={handleSubmit(onFormSubmit)}>
            <div class="form">
                <h2>Register</h2>
                <div class="inputBox">
                    <input type="text" required="required"
                    {...register('username', {required: true})} />
                    <span>Username</span>
                    <i></i>
                </div>
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
                <div class="inputBox">
                    <input type="password" required="required"
                    {...register('confirmPassword', {required: true})}/>
                    <span>Confirm Password</span>
                    <i></i>
                </div>
                <div class="links">
                    <a href="https://akhs1.com/">Forgot password?</a>
                    <a href="/">Already have an account? Login</a>
                </div>
                <a href="https://akhs1.com/"><input type="submit" value="Register" /></a>
            </div>
            </form>
        </div>
    </div>
  )
}

export default Register