import styles from '../styles/quantiky.module.css'

const QuantityItem = ({ item , addToCart, deleteToCart }) => {

  const { id, quantity } = item

  return (
    <div className={styles.cantidadProduct}>

        <h2>{quantity}</h2>

        <span className={styles.containerButtons}>
            <button className={styles.buttonQuantiky} onClick={() => addToCart(item, id)}>▲</button>
            <button className={styles.buttonQuantiky} onClick={() => deleteToCart(id)}>▼</button>
        </span>

    </div>

  )
}

export default QuantityItem

// onClick={() => deleteFromCart(id, false)}
// onClick={() => borrarDelCart(id)}

// mira pelotudo te quedaste en poner la cantidadd e los items, arreglar bien el diseño de itemcart y arreglar el cartinicialstate...... dale q podes hdp
