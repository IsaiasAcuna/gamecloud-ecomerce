
import { useEffect, useReducer } from "react";
import axios from "axios";
import { cartInitialState } from "@/reducer/cartInitialState";
import { cartReducer } from "@/reducer/cartReducer";
import { TYPES } from "@/reducer/cartActions";
import Navbar from "./Navbar";
import SectionGames from "./SectionGames";

const MainHome = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const { products, cart } = state;

    //HACER NPM RUN DEV Y NPM RUN SERVER

    // Función para leer el estado inicial (productos y carrito)
    const readState = async () => {
        try {
            const [resProducts, resCart] = await Promise.all([
                axios.get("http://localhost:5000/products"),
                axios.get("http://localhost:5000/cart")
            ]);

            dispatch({
                type: TYPES.READ_STATE,
                payload: {
                    products: resProducts.data,
                    cartItems: resCart.data,
                },
            });
        } catch (error) {
            console.error("Error al leer estado:", error.message);
        }

        }

    // Efecto para llamar a readState
    useEffect(() => {
        readState();
    }, []);

    // Función para añadir productos al carrito (se usa en el botón "COMPRAR")
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

    // Función para borrar o disminuir cantidad del carrito
    const deleteToCart = async (id) => {
        await axios
        .get(`http://localhost:5000/cart/${id}`)
        .then((res) => {
            if (res.data.quantity > 1) {
            const newQuantity = res.data.quantity - 1;
            axios.patch(`http://localhost:5000/cart/${id}`, {
                quantity: newQuantity,
            });
            readState(); // Vuelve a leer el estado para actualizar la UI
            } else {
            axios.delete(`http://localhost:5000/cart/${id}`);
            readState(); // Vuelve a leer el estado para actualizar la UI
            }
        });
    };

    // Función para vaciar completamente el carrito
    const cleanCart = async () => {
        // Obtenemos todos los ítems del carrito para borrarlos individualmente
        const res = await axios.get(`http://localhost:5000/cart`);
        const deletePromises = res.data.map((item) =>
        axios.delete(`http://localhost:5000/cart/${item.id}`)
        );
        
        // Esperamos a que todas las promesas de borrado se completen
        await Promise.all(deletePromises);
        
        readState();
    };

    return (
        <>

            <Navbar products={products} 
                cart={cart}
                addToCart={addToCart}
                deleteToCart={deleteToCart}
                cleanCart={cleanCart} />

            <SectionGames products={products} addToCart={addToCart} />

        </>
    );
    };

export default MainHome;