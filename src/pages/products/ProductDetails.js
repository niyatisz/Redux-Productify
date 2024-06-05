import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart, fetchProductsById } from '../../redux/action/Action';
import { useParams } from 'react-router-dom';
import './ProductDetails.css'

const ProductDetails = () => {
  const { id } = useParams();
  const product = useSelector(state => state.productsById);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id) {
      dispatch(fetchProductsById(id));
    }
  }, [dispatch, id]);

  if (!product) {
    return <div>Loading...</div>;
  }

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };


  return (
    <div className='Product'>
      <h1>{product.title}</h1>
      <img src={product.thumbnail} alt={product.title} />
      <p>{product.description}</p>
      <p><strong>Brand:</strong> {product.brand}</p>
      <p><strong>Category:</strong> {product.category}</p>
      <p><strong>Rating:</strong> {product.rating}</p>
      <p><strong>Discount:</strong> {product.discountPercentage}%</p>
      <p><strong>Price:</strong> {product.price}€</p>
      <button className='cart-btn' onClick={() => handleAddToCart(product)}>Add To Cart</button>
    </div>
  );
};

export default ProductDetails;
