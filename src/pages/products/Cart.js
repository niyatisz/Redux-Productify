import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { incrementQuantity, decrementQuantity, removeFromCart, clearCart } from '../../redux/action/Action';
import './Cart.css';
import { useNavigate } from 'react-router-dom';

const Cart = () => {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch();
  const navigate = useNavigate()

  const handleIncrementQuantity = (productId) => {
    dispatch(incrementQuantity(productId));
  };

  const handleDecrementQuantity = (productId) => {
    dispatch(decrementQuantity(productId));
  };

  const handleRemoveFromCart = (productId) => {
    dispatch(removeFromCart(productId));
  };

  const handlePayNow = (cartItems) => {
    dispatch(clearCart(cartItems));
    localStorage.removeItem('cart');
    navigate('/payment')
  };

  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

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
          <button className="payment-btn" style={{display: 'flex', position:'relative', justifyContent:'center'}} onClick={()=>handlePayNow(cart)}>Pay Now</button>
        </div>
      )}
    </div>
  );
};

export default Cart;
