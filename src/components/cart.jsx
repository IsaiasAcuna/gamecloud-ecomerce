import { useState, useEffect } from 'react';
import CardItems from './CartItems';
import Button from './Button';

const Cart = ( {cart , addToCart, deleteToCart, cleanCart}) => {
  
  const [abierto, setAbierto] = useState(false);

  const toggleCarrito = () => setAbierto(prev => !prev);

  const priceTotal = cart.reduce((suma, item) => suma + item.price * item.quantity, 0)  

  useEffect(() => {
  if (cart.length > 0) {
    setAbierto(true);
  }
}, [cart]);


  const panelStyle = {
    width: 'auto',
    height: 'auto',
    backgroundColor: '#fff',
    position: 'fixed',
    top: '10vh',
    right: '2%',
    display: abierto ? 'block' : 'none',
    transition: 'top 0.3s ease',
    padding: '20px',
    boxShadow: '0 2px 5px rgba(0,0,0,0.2)',
    borderRadius: '0 0 10px 10px',
    zIndex: '1',
    overflowY: 'auto',
    color: 'black'
  };

  const botonStyle = {
    backgroundColor: '#ffffff00',
    color: 'white',
    border: 'none',
    cursor: 'pointer',
    zIndex: 1100,
    fontSize: '35px',
    padding: '10px 20px',
    display: "flex",
    alignItems: "center",
  };

  const contadorStyle = {
    
    backgroundColor: 'red',
    color: 'white',
    borderRadius: '50%',
    padding: '4px 8px',
    fontSize: '12px'
  };

  const totalStyle = {
    margin: '2% 0',
  }

  return (
    <>
      <button style={botonStyle} onClick={toggleCarrito}>
        🛒
        {cart.length > 0 && (
          <span style={contadorStyle}>{cart.length}</span>
        )}
      </button>

      <div style={panelStyle}>

        <div>
        {cart.map(item => ( <CardItems item={item} addToCart={addToCart} deleteToCart={deleteToCart} />))}

        </div>


        <h3 style={totalStyle}>TOTAL: ${(priceTotal).toLocaleString('es-AR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })} 
        </h3>

        <Button onClick={() => cleanCart()} texto={"Limpiar Carrito"} />

      </div>
    </>
  );
};

// 

export default Cart;
