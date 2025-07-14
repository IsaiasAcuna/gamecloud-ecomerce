import { useState } from 'react'
import Image from 'next/image'
import Button from './button'
import ModalProduct from './modalProduct'
import styles from '../styles/card-design.module.css'


const Card = ({product, addToCart }) => {

    const {title, category, price, imagen_url} = product

    const [visible, setVisible] = useState(false)

    const toggleModal = (prev) => setVisible(prev => !prev);

    return (
    <>
        <article className={styles.article} id={product.id}>
            <figure className={styles.imagen}>
                <Image src={imagen_url} alt={title} 
                    
                    width={170}
                    height={200}
                    priority
                />

            </figure>
            <div className={styles.dataProduct}>
                <h3 className={styles.titleCard}>{title}</h3>
                <h5 className={styles.categoryCard}>{category}</h5>
                <h6 className={styles.priceCard}>${price.toLocaleString('es-AR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</h6>

                <Button onClick={() => toggleModal()} texto={"COMPRAR"} />

                {visible && <ModalProduct product={product} addToCart={addToCart} toggleModal={toggleModal} />}

            </div>
        </article>
    </>

    )
}

export default Card
