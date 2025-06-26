import { TYPES } from "./cartActions";
import { cartInitialState } from "./cartInitialState";



export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload.products,
                cart: action.payload.cartItems
            }
        }
        case TYPES.ADD_TO_CART: { // id (de cada card) -> action.payload
           const newItem = state.products.find(product => product.id === action.payload)
 
           const itemInCart = state.cart.find(item => item.id === newItem.id)

           return itemInCart // {} -> true - undefined -> false
                ? {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === newItem.id 
                            ? {...item, 
                                quantity: item.quantity + 1}
                            : item
                    )
                }
                : {
                    ...state,
                    cart: [...state.cart, {...newItem, quantity: 1}]
                }
        }
        
        case TYPES.REMOVE_ONE_PRODUCT: {
            const itemToDelete = state.cart.find(item => item.id === action.payload)

            return itemToDelete.quantity > 1
                ? {
                    ...state,
                    cart: state.cart.map(item => 
                        item.id === itemToDelete.id
                            ? {...item, quantity: item.quantity - 1}
                            : item
                    )
                }
                : {
                    ...state,
                    cart: state.cart.filter(item => item.id !== itemToDelete.id)
                }
        }
        case TYPES.REMOVE_ALL_PRODUCTS: {
            return {
                    ...state,
                    cart: state.cart.filter(item => item.id !== action.payload)
                }
        }
        case TYPES.CLEAR_CART: {
            return cartInitialState
        }

        default:
            return state;
    }
}
 



