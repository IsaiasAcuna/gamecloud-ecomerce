
import React, { useState, useEffect, useReducer } from "react"; // Asegúrate de que `useState` esté importado
import axios from "axios";
import { cartInitialState } from "@/reducer/cartInitialState";
import { cartReducer } from "@/reducer/cartReducer";
import { TYPES } from "@/reducer/cartActions";
import Carrito from "./cart";       // <--- VERIFICA ESTA RUTA si no está en la misma carpeta
import Card from "../components/card"; // <--- VERIFICA ESTA RUTA si no está en `../components/card`

const Index = () => {
    const [state, dispatch] = useReducer(cartReducer, cartInitialState);
    const { products, cart } = state;

    // Estados para el manejo de carga y errores
    const [loading, setLoading] = useState(true); // Se inicia en true para mostrar "Cargando..."
    const [error, setError] = useState(null); // Se inicia en null (sin error)

    // Función para leer el estado inicial (productos y carrito)
    const readState = async () => {
        try {
        setLoading(true); // Indica que la carga ha comenzado
        setError(null); // Limpia cualquier error anterior

        const resProducts = await axios.get("http://localhost:5000/products");
        const resCart = await axios.get("http://localhost:5000/cart");

        const productsData = resProducts.data;
        const cartData = resCart.data;

        dispatch({
            type: TYPES.READ_STATE,
            payload: {
            products: productsData,
            cartItems: cartData,
            },
        });

        setLoading(false); // La carga fue exitosa

        } catch (err) {
        console.error("Error al cargar los datos:", err);
        setError(err); // Guarda el objeto de error para mostrarlo
        setLoading(false); // La carga terminó (con error)
        }
    }; 

    // Efecto para llamar a readState
    useEffect(() => {
        readState();
    }, []);

    // Función para añadir productos al carrito (se usa en el botón "COMPRAR")
    const addToCart = async (product, id) => {
        axios
        .get(`http://localhost:5000/cart/${id}`)
        .then((res) => {
            const newQuantity = res.data.quantity + 1;
            axios.patch(`http://localhost:5000/cart/${id}`, {
            quantity: newQuantity,
            });
            readState();
        })
        .catch((err) => {
            if (err.response && err.response.status === 404) {
            axios.post("http://localhost:5000/cart", {
                ...product,
                quantity: 1,
            });
            } else {
            console.error("Error al consultar o añadir al carrito", err);
            }
            readState();
        });
    };

    // Función para borrar o disminuir cantidad del carrito
    const borrarDelCart = async (id) => {
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
    const vaciarCart = async () => {
        // Obtenemos todos los ítems del carrito para borrarlos individualmente
        const res = await axios.get(`http://localhost:5000/cart`);
        const deletePromises = res.data.map((item) =>
        axios.delete(`http://localhost:5000/cart/${item.id}`)
        );
        
        // Esperamos a que todas las promesas de borrado se completen
        await Promise.all(deletePromises);
        
        readState();
    };

    // Condicionales de carga y error
    if (loading) {
        return (
        <div className="app-loading-container">
            <p className="loading-message">Cargando productos y carrito...</p>
        </div>
        );
    }

    if (error) {
        return (
        <div className="app-error-container">
            <p className="error-message">Error: {error.message}. No se pudieron cargar los datos.</p>
            <button onClick={readState} className="retry-button">Reintentar</button>
        </div>
        );
    }

    return (
        <>
        <h3>Productos</h3>
        {/* Mapeamos los productos solo si 'products' existe y tiene elementos */}
        {products && products.length > 0 ? (
            products.map((product) => (
            <Card
                key={product.id}
                product={product}
                addToCart={addToCart}
            />
            ))
        ) : (
            // Este mensaje se muestra si no hay productos disponibles después de la carga
            <p>No hay productos disponibles para mostrar.</p>
        )}

        <Carrito
            cart={cart}
            addToCart={addToCart}
            borrarDelCart={borrarDelCart}
            vaciarCart={vaciarCart}
        />
        </>
    );
    };

export default Index;