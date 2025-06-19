import ButtonCard from './button-card'
import styles from '../styles/card-design.module.css'
import Image from 'next/image'


const card = ({product}) => {

  const {title, category, price} = product

  return (
    <>
        <article className={styles.article}>
            <figure className={styles.imagen}>
                <Image src="https://raw.githubusercontent.com/IsaiasAcuna/games-store/main/img/halo-infinite.jpg" alt="" 
                  layout="intrinsic"
                  width={150}
                  height={300}/>
                  
            </figure>
            <div className={styles.dataProduct}>
                <h3 className={styles.titleCard}>{title}</h3>
                <h5 className={styles.categoryCard}>{category}</h5>
                <h6 className={styles.priceCard}>${price}</h6>
                <ButtonCard />
            </div>
        </article>
    </>
      
    
  )
}

export default card
