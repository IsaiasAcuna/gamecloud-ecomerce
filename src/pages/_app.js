import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return <Component {...pageProps} />;
}

// funcion para buscador 
function App() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch('http://localhost:5000/products');
        if (!response.ok) {
          throw new Error(`Error HTTP! estado: ${response.status}`);
        }
        const data = await response.json();
        setProducts(data);
      } catch (err) {
        console.error("Error al cargar los productos:", err);
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []); // El array vacío asegura la función sea ejecutado solo una vez 

  if (loading) {
    return (
      <div className="App">
        <p className="loading-message">Cargando productos...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="App">
        <p className="error-message">Error: {error.message}. No se pudieron cargar los productos.</p>
      </div>
    );
  }

  return (
    <div className="App">
      {/* Pasa los productos cargados a la Navbar */}
      <Navbar products={products} />

      <div className="content">
        <h1>Bienvenido a nuestra tienda de videojuegos</h1>
        <p>Explora nuestros títulos y usa la barra de búsqueda para encontrar tu juego favorito.</p>

        <div className="product-list">
          {products.length > 0 ? (
            products.map((product) => (
              <div
                key={product.id}
                id={`producto-${product.title.toLowerCase().replace(/ /g, '-')}`}
                className="product-section"
              >
                <h2>{product.title}</h2>
                <p>Categoría: {product.category}</p>
                <p className="product-price">Precio: ${product.price.toLocaleString()}</p>
                {product.imagen_url && (
                  <img src={product.imagen_url} alt={product.title} className="product-image" />
                )}
              </div>
            ))
          ) : (
            <p>No hay productos disponibles para mostrar.</p>
          )}
        </div>
      </div>
    </div>
  );
}