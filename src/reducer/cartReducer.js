import { TYPES } from "./cartActions";


export function cartReducer(state, action) {
    switch (action.type) {
        case TYPES.READ_STATE: {
            return {
                ...state,
                products: action.payload.products,
                cart: action.payload.cartItems
            }
        }
    }}
 



