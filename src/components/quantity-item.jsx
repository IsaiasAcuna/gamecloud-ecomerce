

const QuantityItem = ({ item , addToCart, borrarDelCart }) => {

  const { id, quantity } = item

  return (
    <div className="cantidad-product">

        <h2>{quantity}</h2>

        <span className="buttons-">
            <button className="button-quantiky" onClick={() => addToCart(item, id)}>▲</button>
            <button className="button-quantiky" onClick={() => borrarDelCart(id)}>▼</button>
        </span>

    </div>

  )
}

export default QuantityItem

// onClick={() => deleteFromCart(id, false)}
// onClick={() => borrarDelCart(id)}

// mira pelotudo te quedaste en poner la cantidadd e los items, arreglar bien el diseño de itemcart y arreglar el cartinicialstate...... dale q podes hdp
