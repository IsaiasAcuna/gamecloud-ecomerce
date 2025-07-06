import { useState, useEffect } from 'react';
import CardItems from './cartItems';

const Carrito = ( {cart , addToCart, borrarDelCart, vaciarCart}) => {
  
  const [abierto, setAbierto] = useState(false);

  const toggleCarrito = () => setAbierto(prev => !prev);

  const priceTotal = cart.reduce((suma, item) => suma + item.price * item.quantity, 0)  

  useEffect(() => {
  if (cart.length > 0) {
    setAbierto(true);
  }
}, [cart]);


  const panelStyle = {
    width: '450px',
    height: '100vh',
    backgroundColor: '#f2f2f2',
    position: 'fixed',
    top: 0,
    right: abierto ? '0' : '-450px',
    transition: 'right 0.3s ease',
    padding: '20px',
    boxShadow: '-2px 0 5px rgba(0,0,0,0.2)',
    zIndex: 1000,
    overflowY: 'auto' 
  };

  const botonStyle = {
    position: 'fixed',
    top: '20px',
    right: '20px',
    padding: '10px 20px',
    backgroundColor: '#956',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100
  };

  const contadorStyle = {
    position: 'absolute',
    top: '-8px',
    right: '-8px',
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '4px 8px',
    fontSize: '12px'
  };

  return (
    <>
      <button style={botonStyle} onClick={toggleCarrito}>
        🛒
        {cart.length > 0 && (
          <span style={contadorStyle}>{cart.length}</span>
        )}
      </button>

      <div style={panelStyle}>
        <h2>Tu Carrito</h2>
        

        {cart.map(item => ( <CardItems item={item} addToCart={addToCart} borrarDelCart={borrarDelCart} />))}

        <h3>TOTAL: ${(priceTotal).toLocaleString('es-AR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })} 
        </h3>

        <button onClick={() => vaciarCart()}>Limpiar Carrito</button>

      </div>
    </>
  );
};

// 

export default Carrito;
