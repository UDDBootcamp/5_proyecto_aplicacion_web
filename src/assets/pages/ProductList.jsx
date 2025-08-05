import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState("");

  const fetchProducts = async () => {
    try {
      const response = await fetch("https://fakestoreapi.com/products");
      if (!response.ok) throw new Error("Error en la api");

      const formatedResponse = await response.json();
      setProducts(formatedResponse);
    } catch (error) {
      setError(error.message);
    }
  };

  useEffect(() => {
    fetchProducts();
  });

  return (
    <div className="catalog-container">
      <h1 className="catalog-title">Catalogo de productos</h1>
      {error && <p>{error}</p>}

      <div className="product-grid">
        {products &&
          products.map((product) => (
            <Link
              to={`/product/${product.id}`}
              key={product.id}
              className="product.link"
              state={{ product }}
            >
              <div className="product-card">
                <img
                  className="product-image"
                  src={product.image}
                  alt={product.title}
                />
              <h2 className="product-title">{product.title}</h2>
              <p className="product-price">{product.price}</p>
              </div>
            </Link>
          ))}
      </div>
    </div>
  );
};
export default ProductList;
