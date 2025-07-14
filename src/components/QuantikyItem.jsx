import styles from '../styles/quantiky.module.css'

const QuantikyItem = ({ item , addToCart, deleteToCart }) => {

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

export default QuantikyItem
