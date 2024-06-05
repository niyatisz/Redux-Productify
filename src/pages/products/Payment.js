import React from 'react';
import './Cart.css';
import { IoCheckmarkDoneCircleOutline } from "react-icons/io5";
import { IoMdArrowRoundBack } from "react-icons/io";
import { useNavigate } from 'react-router-dom';

const Payment = () => {
  const navigate = useNavigate()
  return (
    <div className='Cart'>

            <div className="cart-item">
              <div className="cart-item-details">
                <IoCheckmarkDoneCircleOutline className='icon'/>
                <h1 className='h1'>Payment Successful</h1>
                <button className="payment-btn" onClick={() => navigate('/products')}><IoMdArrowRoundBack className='arrow-icon'/>Continue Shopping</button>
              </div>
            </div>
    </div>
  );
};

export default Payment;
