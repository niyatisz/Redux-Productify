import axios from 'axios'
import {FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_BY_ID_REQUEST, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_ID_FAILURE} from '../../constant/Constant'

export const fetchRequestProducts = () => {
    return {
        type: FETCH_PRODUCTS_REQUEST
    }
}

export const fetchProductsSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_SUCCESS,
        payload: products
    }
}

export const fetchProductsFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_FAILURE,
        payload: error
    }
}

export const fetchProductsByIdRequest = () => {
    return {
        type: FETCH_PRODUCTS_BY_ID_REQUEST
    }
}

export const fetchProductsByIdSuccess = (products) => {
    return {
        type: FETCH_PRODUCTS_BY_ID_SUCCESS,
        payload: products
    }
}

export const fetchProductsByIdFailure = (error) => {
    return {
        type: FETCH_PRODUCTS_BY_ID_FAILURE,
        payload: error
    }
}

export const fetchProducts = (page = 1) => {
    return async (dispatch) => {
        dispatch(fetchRequestProducts())
        const productsPerPage = 8
        const skip = (page - 1) * productsPerPage
        try {
            const res = await axios.get(`https://dummyjson.com/products?limit=${productsPerPage}&skip=${skip}`)
            dispatch(fetchProductsSuccess(res.data.products))
        } catch (error) {
            dispatch(fetchProductsFailure(error.message))
        }
    }
}
export const fetchProductsById = (productId) => {
    console.log('productId: ', productId);
    return async (dispatch) => {
        dispatch(fetchProductsByIdRequest())
        console.log('productId: ', productId);
        try {
            const res = await axios.get(`https://dummyjson.com/products/${productId}`)
            dispatch(fetchProductsByIdSuccess(res.data))
        } catch (error) {
            dispatch(fetchProductsByIdFailure(error.message))
        }
    }
}
