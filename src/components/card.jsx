import ButtonCard from './button-card'
import styles from '../styles/card-design.module.css'
import Image from 'next/image'


const Card = ({product, agregarAlCarrito, addToCart}) => {

  const {title, category, price, imagen_url} = product

  return (
    <>
        <article className={styles.article}>
            <figure className={styles.imagen}>
                <Image src={imagen_url} alt="" 
                  layout="intrinsic"
                  width={150}
                  height={300}/>
                  
            </figure>
            <div className={styles.dataProduct}>
                <h3 className={styles.titleCard}>{title}</h3>
                <h5 className={styles.categoryCard}>{category}</h5>
                <h6 className={styles.priceCard}>${price.toLocaleString('es-AR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</h6>
                <ButtonCard product={product} agregarAlCarrito={agregarAlCarrito} addToCart={addToCart} />
            </div>
        </article>
    </>
      
    
  )
}

export default Card
