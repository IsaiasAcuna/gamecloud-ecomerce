import React, { useState } from 'react'
import { FaSearch } from 'react-icons/fa'
import Image from 'next/image';
import Cart from './Cart';

const Navbar = ({ products, cart , addToCart, deleteToCart, cleanCart }) => {
    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        const foundProduct = products.find(
        (product) => product.title.toLowerCase() === searchTerm.toLowerCase()
        );

        if (foundProduct) {
        console.log(`Producto encontrado: ${foundProduct.title}`);
        const productElement = document.getElementById(foundProduct.id);
        if (productElement) {
            // Redirige o desplaza hasta la posición del producto
            productElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
        } else {
            alert('Producto encontrado, pero el elemento no está en la página. Asegúrate de que el producto tenga un ID único en el DOM.');
        }
        } else {
        alert('Error: Producto no encontrado o nombre incorrecto.');
        }
    }

    return (
        <>
        <header className='header'>

        
            <nav className="navbar">
            <div className="navbar-left">
            <div className="navbar-logo">
            {/* **IMPORTANTE:** Reemplaza '/path/to/your/logo.png' con la ruta real de tu logo.
                Por ejemplo, si tu logo está en 'public/logo.png', usa '/logo.png' */}
            <Image src="/GameCloud_logo.png" width={80} height={80} alt="GameCloud - Logo de la pagina"/>
            </div>
            </div>
            <div className="navbar-center">
            </div>
            <div className="navbar-right">
            <div className="search-bar">
            <input
                type="text"
                placeholder="Buscar producto..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                // Permite buscar al presionar Enter
                onKeyPress={(e) => {
                if (e.key === 'Enter') {
                    handleSearch();
                }
                }}
            />
            <button onClick={handleSearch} className="search-button">
                <FaSearch /> {/* Icono de lupa */}
            </button>
            </div>

            <Cart cart={cart}
                addToCart={addToCart}
                deleteToCart={deleteToCart}
                cleanCart={cleanCart} />
            </div>
            </nav>
            </header>

        {/* Estilos CSS */}
            <style jsx>{`

            .header {
                width: 100%;
                height: 10vh;
                background-color: #171717;
                position: sticky;
                top: 0;
                display: flex;
                align-items: center;
                z-index: 100;
                
            }
                .navbar {
                display: flex;
                justify-content: space-between;
                align-items: center;
                padding: 10px 0;
                width: 85%;
                margin: 0 auto;
                color: white;
                box-sizing: border-box;
                z-index: 100;
                }

            .navbar-left {
            display: flex;
            align-items: center;
            }

            .navbar-logo {
            margin-right: 20px;
            }

            .navbar-logo img {
                width: 10px;
                height: auto; {/* Ajuste de tamaño del logo */}
            }

            {/* Estilos para enlaces de navegación*/}
            .navbar-center ul {
            list-style: none;
            margin: 0;
            padding: 0;
            display: flex;
            }

            .navbar-center li {
            margin: 0 15px;
            }

            .navbar-center a {
            color: white;
            text-decoration: none;
            font-weight: bold;
            transition: color 0.3s ease;
            }

            .navbar-center a:hover {
            color: red;
            }

            .navbar-right {
            display: flex;
            align-items: center;
            gap: 20px;
            }

            .search-bar {
            display: flex;
            align-items: center;
            background-color: #333;
            border-radius: 5px;
            overflow: hidden;
            }

            .search-bar input {
            border: none;
            padding: 8px 10px;
            font-size: 16px;
            background-color: transparent;
            color: white;
            outline: none;
            width: 200px;
            }

            .search-bar input::placeholder {
            color: #ccc;
            }

            .search-button {
            background-color: red;
            border: none;
            padding: 8px 12px;
            cursor: pointer;
            color: white;
            font-size: 18px;
            display: flex;
            align-items: center;
            justify-content: center;
            transition: background-color 0.3s ease;
            }

            .search-button:hover {
            background-color: darkred;
            }

            @media only screen and (max-width: 480px) {
                /* Estilos para celulares */

                .search-bar input {
                    width: 100px;
            }
}
        `}</style>
        

        </>
    )
}

export default Navbar
