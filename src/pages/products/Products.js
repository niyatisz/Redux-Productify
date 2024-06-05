import React, { useEffect, useState } from 'react';
import { addToCart, fetchProducts } from '../../redux/action/Action';
import { useDispatch, useSelector } from 'react-redux';
import './Products.css';
import { useNavigate } from 'react-router-dom';

const Products = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const products = useSelector(state => state.products);
  const isLoading = useSelector(state => state.isLoading);
  const error = useSelector(state => state.error);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  
  useEffect(() => {
    dispatch(fetchProducts(currentPage));
  }, [dispatch, currentPage]);
  
  const handlePrevPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };
  
  const handleNextPage = () => {
    setCurrentPage(currentPage + 1);
  };

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };
  
  return (
    <div className='Products'>
      {isLoading && <p>Loading...</p>}
      {error && <p className='error'>{error}</p>}
      {!isLoading && !error && (
        <div className="row">
          {products.map(product => (
            <div key={product.id} className="col l3 m3 s12 product">
              <div className="product-card">
                <div className="card">
                  <div className="card-image" onClick={() => navigate(`/product/${product.id}`)}>
                    <img src={product.thumbnail} alt="product-img" />
                    <span className="card-title"><span>{product.title}</span></span>
                  </div>
                  <div className="card-content">
                    <div className="row">
                      <div className="col s12">
                        <p>
                          <strong>Description:</strong> <br />
                          <p className='line-clamp'>{product.description}</p>
                        </p>
                        <p>
                          <strong>Brand:</strong> {product.brand}
                        </p>
                        <p>
                          <strong>Category:</strong> {product.category}
                        </p>
                        <p>
                          <strong>Rating:</strong> {product.rating}
                        </p>
                        <p>
                          <strong>Discount:</strong> {product.discountPercentage}%
                        </p>
                        <p>
                          <strong>Price:</strong> {product.price}€
                        </p>
                      </div>
                    </div>
                  </div>
                  <button className='cart-btn' onClick={()=> handleAddToCart(product)}>Add to cart</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button className='btn' onClick={handlePrevPage} disabled={currentPage === 1}>Prev</button>
        <button className='btn' onClick={handleNextPage}>Next</button>
      </div>
    </div>
  );
};

export default Products;
