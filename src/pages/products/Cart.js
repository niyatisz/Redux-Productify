import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart } from '../../redux/action/Action';
import './Cart.css';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  return (
    <div className='Cart'>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <div>
          {cart.map(item => (
            <div key={item.id} className="cart-item">
              <img src={item.thumbnail} alt={item.title} className="cart-item-image" />
              <div className="cart-item-details">
                <p><strong>{item.title}</strong></p>
                <p>{item.price}€</p>
                <div className="cart-item-quantity">
                  <button onClick={() => handleDecrementQuantity(item.id)}>-</button>
                  <span>{item.quantity}</span>
                  <button onClick={() => handleIncrementQuantity(item.id)}>+</button>
                </div>
                <button className="remove-btn" onClick={() => handleRemoveFromCart(item.id)}>Remove</button>
              </div>
            </div>
          ))}
          <div className="cart-total">
            <h3>Total: {cart.reduce((acc, item) => acc + item.price * item.quantity, 0)}€</h3>
          </div>
          <button className="payment-btn" style={{display: 'flex', position:'relative', justifyContent:'center'}} onClick={() => window.location.href = '/payment'}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
