import Card from "./card"
import styles from '../styles/Main.module.css'


const Main = ( {products, addToCart} ) => {

    const productosPlaystation = products.filter((product) => product.platafrom.includes("PLAYSTATION"));
    const productosXbox = products.filter((product) => product.platafrom.includes("XBOX"));
    const productosNintendo = products.filter((product) => product.platafrom.includes("NINTENDO"));

    return (
        <>

            <main>
                <h2 className={styles.titleSection}>PLAYSTATION</h2>
                    <section className={styles.section}>

                        {productosPlaystation.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}

                    </section>

                <h2 className={styles.titleSection}>XBOX</h2>
                    <section className={styles.section}>

                        {productosXbox.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}

                    </section>

                <h2 className={styles.titleSection}>NINTENDO</h2>
                    <section className={styles.section}>

                        {productosNintendo.map(product => <Card key={product.id} product={product} addToCart={addToCart} />)}

                    </section>

            </main>

        </>
    )
}

export default Main