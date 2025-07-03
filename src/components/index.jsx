
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
    
    
    // levantar el server en otra terminal: npm run server

    const readState = async () => {

      const resProducts = await axios.get("http://localhost:5000/products"),
            resCart = await axios.get("http://localhost:5000/cart")

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
        

        // esta funcion van al boton de "COMPRAR" y el incrementador de los cartItems dentro del cart
        
        
        const addToCart = async (product, id) => {
            
            axios.get(`http://localhost:5000/cart/${id}`)
            
            .then(res => {
                
                const newQuantity = res.data.quantity + 1;
                
                axios.patch(`http://localhost:5000/cart/${id}`, {
                    quantity: newQuantity
                });
                
                readState()
                
            })
            .catch(err => {
                if (err.response && err.response.status === 404) {
                    
                    axios.post("http://localhost:5000/cart", {
                        ...product,
                        quantity: 1
                    });
                } else {
                    console.error('Error al consultar el carrito', err);
                }
                readState()
                
            });
            
        }
        

        
        const borrarDelCart = async (id) => {
            
            await axios.get(`http://localhost:5000/cart/${id}`)
            .then(res => {
                
                if (res.data.quantity > 1) {
                    
                    const newQuantity = res.data.quantity - 1;
                    
                    axios.patch(`http://localhost:5000/cart/${id}`, {
                        quantity: newQuantity
                    });
                    readState()
                    
                }else{
                    axios.delete(`http://localhost:5000/cart/${id}`)
                    readState()
                }
                
            })
            ;
            
        }

        //delete .map al cart multiple

        
        const vaciarCart = async () => {
            await axios.get(`http://localhost:5000/cart`)
            
            .then(res => {
            
            res.data.map((item => 
                axios.delete(`http://localhost:5000/cart/${item.id}`)
            ))
            
        })

        readState()

    }


    return (
        <>

            <h3>Productos</h3>

            {products.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}


            <Carrito cart={cart} addToCart={addToCart} borrarDelCart={borrarDelCart} vaciarCart={vaciarCart}/>

            

        </>
    );
};


export default Index
