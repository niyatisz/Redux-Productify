import React from 'react'
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

const ChangePassword = () => {
    const { changePassword } = useAuth();
    const { register, handleSubmit, formState: { errors } } = useForm();

    const onFormSubmit = (data) => {
        changePassword(data);
    }

    return (
        <div className='login'>
            <div className="box">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form">
                        <h2>Change Password</h2>
                        <div className="inputBox">
                            <input 
                                type="email" 
                                required 
                                {...register('email', { required: true })}
                            />
                            <span>Email</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input 
                                type="password" 
                                required 
                                {...register('currentPassword', { required: true })}
                            />
                            <span>Current Password</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input 
                                type="password" 
                                required 
                                {...register('password', { 
                                    required: true, 
                                    minLength: 8, 
                                    maxLength: 32, 
                                    pattern: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,32}$/
                                })}
                            />
                            <span>New Password</span>
                            <i></i>
                        </div>
                        {errors.password && <span>Password must be 8-32 characters, include at least one uppercase letter, one lowercase letter, one digit, and one special character</span>}
                        <div className="inputBox">
                            <input 
                                type="password" 
                                required 
                                {...register('confirmNewPassword', { required: true })}
                            />
                            <span>Confirm New Password</span>
                            <i></i>
                        </div>
                        <input type="submit" value="Change Password" />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ChangePassword;
