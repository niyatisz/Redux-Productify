import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { useAuth } from '../../context/AuthContext';

const EditProfile = () => {
    const { user, editProfile } = useAuth();
    console.log('user: ', user);
    const [userData, setUserData] = useState({});
    console.log('userData: ', userData);
    const { register, handleSubmit, setValue, reset, formState: { errors } } = useForm();

    useEffect(() => {
        setUserData(user);
        reset(user)
    }, [user]);

    const onFormSubmit = (data) => {
        const updatedUser = { ...userData, ...data, oldEmail: userData.email };
        editProfile(updatedUser);
    };

    return (
        <div className='register'>
            <div className="register-box">
                <form onSubmit={handleSubmit(onFormSubmit)}>
                    <div className="form">
                        <h2>Edit Profile</h2>
                        <div className="inputBox">
                            <input
                                type="text"
                                required
                                {...register('firstName', { required: true })}
                            />
                            <span>First Name</span>
                            <i></i>
                        </div>
                        <div className="inputBox">
                            <input
                                type="text"
                                required
                                {...register('lastName', { required: true })}
                            />
                            <span>Last Name</span>
                            <i></i>
                        </div>
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
                                type="number"
                                required
                                {...register('phoneNumber', { required: true })}
                            />
                            <span>Phone Number</span>
                            <i></i>
                        </div>
                        <input type="submit" value="Save Changes" />
                    </div>
                </form>
            </div>
        </div>
    );
};

export default EditProfile;
