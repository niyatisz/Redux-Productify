import { FETCH_PRODUCTS_REQUEST, FETCH_PRODUCTS_SUCCESS, FETCH_PRODUCTS_FAILURE, FETCH_PRODUCTS_BY_ID_REQUEST, FETCH_PRODUCTS_BY_ID_SUCCESS, FETCH_PRODUCTS_BY_ID_FAILURE, ADD_TO_CART, REMOVE_FROM_CART, INCREMENT_QUANTITY, DECREMENT_QUANTITY, CLEAR_CART } from '../../constant/Constant'


const initialState = {
    products: [],
    productsById: [],
    cart: [],
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
        case ADD_TO_CART:
            const itemInCart = state.cart.find(item => item.id === action.payload.id);
            if (itemInCart) {
                return {
                    ...state,
                    cart: state.cart.map(item =>
                        item.id === action.payload.id ? { ...item, quantity: item.quantity + 1 } : item
                    )
                };
            }
            return {
                ...state,
                cart: [...state.cart, { ...action.payload, quantity: 1 }]
            };

        case REMOVE_FROM_CART:
            return {
                ...state,
                cart: state.cart.filter(item => item.id !== action.payload)
            };
        case INCREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload ? { ...item, quantity: item.quantity + 1 } : item
                )
            };
        case DECREMENT_QUANTITY:
            return {
                ...state,
                cart: state.cart.map(item =>
                    item.id === action.payload && item.quantity > 1
                        ? { ...item, quantity: item.quantity - 1 }
                        : item
                )
            };
        case CLEAR_CART:
            return {
                ...state,
                cart: []
            };

        default:
            return state
    }
}

export default reducer