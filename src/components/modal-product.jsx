import styles from '../styles/modal-product.module.css';
import Image from 'next/image';
import Button from './button';


const ModalProduct = ({ product, addToCart, toggleModal }) => {

    const { id, title, category, price, imagen_url } = product

  return (
    <div>
        <>
            <article className={styles.modal}>
                <figure className={styles.imagen}>
                    <Image src={imagen_url} alt="" 
                        layout="intrinsic"
                        width={250}
                        height={300}/>

                </figure>
                <div className={styles.dataModal}>
                    <h3 className={styles.titleModal}>{title}</h3>
                    <h5 className={styles.categoryModal}>{category}</h5>
                    <h6 className={styles.priceModal}>${price.toLocaleString('es-AR', {
                                minimumFractionDigits: 2,
                                maximumFractionDigits: 2
                            })}</h6>


                    <Button onClick={() => addToCart(product, id)} texto={"AGREGAR AL CARRITO"} />

                    <button className={styles.closeModal} onClick={() => toggleModal()}> x </button>

                </div>
            </article>
        </>
    </div>
    )
}

export default ModalProduct
