import { Link } from 'react-router-dom';

export const ProductCard = ({ product }) => (
  <article className="product-card">
    <img src={product.image} alt={product.name} />
    <h3>{product.name}</h3>
    <p>{product.shortDescription}</p>
    <div className="row between center">
      <strong>€ {product.price.toFixed(2)}</strong>
      <Link to={`/product/${product.slug}`} className="btn btn-small" style={{ background: product.accentColor }}>
        Bekijk product
      </Link>
    </div>
  </article>
);
