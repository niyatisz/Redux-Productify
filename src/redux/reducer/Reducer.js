import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_BY_ID_REQUEST, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_ID_FAILURE } from '../../constant/Constant'


const initialState = {
    products: [],
    productsById: [],
    isLoading: false,
    error: null
}

const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_PRODUCTS_REQUEST:
            return {
                ...state,
                isLoading: true
            }
        case FETCH_PRODUCTS_SUCCESS:
            return {
                ...state,
                isLoading: false,
                products: action.payload
            }
        case FETCH_PRODUCTS_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        case FETCH_PRODUCTS_BY_ID_REQUEST:
            return {
                ...state,
                isLoading: true
            }

        case FETCH_PRODUCTS_BY_ID_SUCCESS:
            return {
                ...state,
                isLoading: false,
                productsById: action.payload
            }

        case FETCH_PRODUCTS_BY_ID_FAILURE:
            return {
                ...state,
                isLoading: false,
                error: action.payload
            }
        default:
            return state
    }
}

export default reducer