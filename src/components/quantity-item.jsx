import React from 'react'

const QuantityItem = ({ item , addToCart, deleteFromCart }) => {

  const { id, quantity } = item

  return (
    <div className="cantidad-product">

        <h2>{quantity}</h2>

        <span className="buttons-">
            <button className="button-quantiky" onClick={() => addToCart(id)}>▲</button>
            <button className="button-quantiky" onClick={() => deleteFromCart(id, false)}>▼</button>
        </span>

    </div>

  )
}

export default QuantityItem

// mira pelotudo te quedaste en poner la cantidadd e los items, arreglar bien el diseño de itemcart y arreglar el cartinicialstate...... dale q podes hdp
