import { createContext, useContext, useState } from "react";
import { CHANGE_PASSWORD_MATCH_ERROR, CHANGE_PASSWORD_SUCCESS, CURRENT_PASSWORD_ERROR, EDIT_PROFILE_SUCCESS, LOGIN_ERROR, LOGIN_SUCCESS, LOGOUT_SUCCESS, SIGNUP_EMAIL_EXIST_ERROR, SIGNUP_LIMIT_ERROR, SIGNUP_SUCCESS, USER_NOT_FOUND } from "../constant/Messages";
import toast from 'react-hot-toast';
import { useNavigate } from "react-router-dom";
const CryptoJS = require("crypto-js");

export const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
}
export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(false);
    const navigate = useNavigate()
    const signup = (data) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const isDuplicate = existingUsers.some(user => user.email === data.email);
        if (isDuplicate) {
          toast.error(SIGNUP_EMAIL_EXIST_ERROR);
        } else if (existingUsers.length+1 > 5) {
          toast.error(SIGNUP_LIMIT_ERROR);
        }
        else if (data.password !== data.confirmPassword) {
          toast.error(CHANGE_PASSWORD_MATCH_ERROR);
        }
        else {
          data.password = CryptoJS.AES.encrypt(data.password, 'niyti@124').toString();
          existingUsers.push(data);
          localStorage.setItem('users', JSON.stringify(existingUsers));
          toast.success(SIGNUP_SUCCESS);
          setUser(data);
          navigate('/');
        }
      };
    
      const login = (data) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const user = existingUsers.find(user => {
          const decryptedPassword = CryptoJS.AES.decrypt(user.password, 'niyti@124').toString(CryptoJS.enc.Utf8);
          return user.email === data.email && decryptedPassword === data.password;
        });
        if (user) {
          setUser(user);
          localStorage.setItem('user', JSON.stringify(user));
          localStorage.setItem('isLoggedIn', true);
          toast.success(LOGIN_SUCCESS);
          navigate('/products');
        }else {
          toast.error(LOGIN_ERROR);
        }
      };
    
      const logout = () => {
        setUser(null);
        localStorage.removeItem('user');
        localStorage.removeItem('isLoggedIn');
        toast.success(LOGOUT_SUCCESS);
        navigate('/');
      };

      const editProfile = (updatedData) => {
        const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
        const updatedUsers = existingUsers.map((user) =>
            user.email === updatedData.oldEmail ? { ...user, ...updatedData } : user
        );
        localStorage.setItem('users', JSON.stringify(updatedUsers));
        localStorage.setItem('user', JSON.stringify(updatedData));
        setUser(updatedData);
        toast.success(EDIT_PROFILE_SUCCESS);
    };

    const changePassword = (data) => {
      const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
      const user = existingUsers.find(user => user.email === data.email);
      console.log('user: ', user);
      if (user) {
          const decryptedPassword = CryptoJS.AES.decrypt(user.password, 'niyti@124').toString(CryptoJS.enc.Utf8);
          if (decryptedPassword === data.currentPassword) {
              if (data.password === data.confirmNewPassword) {
                  user.password = CryptoJS.AES.encrypt(data.password, 'niyti@124').toString();
                  const updatedUsers = existingUsers.map(u => u.email === user.email ? user : u);
                  localStorage.setItem('users', JSON.stringify(updatedUsers));
                  localStorage.setItem('user', JSON.stringify(data));
                  toast.success(CHANGE_PASSWORD_SUCCESS);
              } else {
                  toast.error(CHANGE_PASSWORD_MATCH_ERROR);
              }
          } else {
              toast.error(CURRENT_PASSWORD_ERROR);
          }
      } else {
          toast.error(USER_NOT_FOUND);
      }
  }

      return (
        <AuthContext.Provider value={{user, setUser, signup, login, logout, editProfile, changePassword}}>
          {children}
        </AuthContext.Provider>
      )
}
