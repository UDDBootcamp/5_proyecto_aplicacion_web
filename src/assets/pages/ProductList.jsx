import { useLocation } from "react-router-dom";

const SingleProduct = () => {
  const location = useLocation();
  const product = location.state.product;
  console.log(location);
  console.log(product);

  return (
    <div className="single-product-container">
      <div className="single-product-card">
        <img
          src={product.image}
          alt={product.title}
          className="single-product-image"
        />
        <div className="single-product-info">
          <h1 className="single-product-title">{product.title}</h1>
          <p className="single-product-category">
            Categoría: {product.category}
          </p>
          <p className="single-product-description">{product.description}</p>
          <p className="single-product-price">${product.price}</p>
          <button className="buy-button">Comprar</button>
        </div>
      </div>
    </div>
  );
};
export default SingleProduct;
