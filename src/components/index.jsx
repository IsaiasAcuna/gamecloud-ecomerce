
import { cartInitialState } from "@/reducer/cartInitialState";
import { useReducer, useEffect } from "react";
import { cartReducer } from "@/reducer/cartReducer";
import { TYPES } from "@/reducer/cartActions";
import Carrito from "./cart";
import Card from '../components/card'
import axios from "axios";


const Index = () => {

    const [state, dispatch] = useReducer(cartReducer, cartInitialState)
    
    const {products, cart} = state;

    const readState = async () => {
      const ENDPOINTS = {
        products: "http://localhost:5000/products",
        cart: "http://localhost:5000/cart"
      }


      // llevantar el server en otra terminal: npm run server


      const resProducts = await axios.get(ENDPOINTS.products),
            resCart = await axios.get(ENDPOINTS.cart)

      const productsData = await resProducts.data,
            cartData = await resCart.data

      dispatch({type: TYPES.READ_STATE, payload: {
        products: productsData,
        cartItems: cartData
      }})
    }

    useEffect(() => {
      readState()
    }, [])
    

    const addToCart = (id) => dispatch({type: TYPES.ADD_TO_CART, payload: id})

    const deleteFromCart = (id, all = false) => {
      if (all) {
        dispatch({type: TYPES.REMOVE_ALL_PRODUCTS, payload: id})
      } else {
        dispatch({type: TYPES.REMOVE_ONE_PRODUCT, payload: id})
      }
    }

    const clearCart = () => dispatch({type: TYPES.CLEAR_CART})


  return (
    <>

        <h3>Productos</h3>

        {products.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}
       

        <Carrito cart={cart} clearCart={clearCart} addToCart={addToCart} deleteFromCart={deleteFromCart}/>
        

    </>
  );
};


export default Index
