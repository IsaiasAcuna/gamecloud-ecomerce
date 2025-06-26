
import cartItemStyles from '../styles/cartItem-design.module.css'
import Image from 'next/image'
import QuantityItem from './quantity-item';


const CardItems = ({item, addToCart, deleteFromCart}) => {

    console.log(item);
    

  const {title, price, imagen_url, quantity} = item

  return (
    <>
        <article className={cartItemStyles.article}>
            <figure className={cartItemStyles.imagen}>
                <Image src={imagen_url} alt="" 
                    layout="intrinsic"
                    width={70}
                    height={300}/>

            </figure>
            <div className={cartItemStyles.dataItem}>
                <h3 className={cartItemStyles.titleItem}>{title}</h3>

                <span className={cartItemStyles.spanNashe}><h6 className={cartItemStyles.priceItem}>${price * quantity}</h6>
                
                <QuantityItem item={item} addToCart={addToCart} deleteFromCart={deleteFromCart} />
                </span>

                

            </div>
        </article>
    </>
      
    
  )
}

export default CardItems
