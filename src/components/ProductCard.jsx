import { Link } from 'react-router-dom';

export const ProductCard = ({ product, onQuickAdd }) => (
  <article className="product-card" style={{ '--accent': product.accentColor }}>
    <Link to={`/product/${product.slug}`} className="product-image-link">
      <img src={product.image} alt={product.name} />
    </Link>
    <div className="product-meta">
      <p className="eyebrow">{product.slug.toUpperCase()}</p>
      <h3>{product.name}</h3>
      <p>{product.shortDescription}</p>
      <div className="product-actions">
        <strong>€ {product.price.toFixed(2)}</strong>
        <div>
          <button type="button" className="btn ghost" onClick={() => onQuickAdd(product.slug)}>
            Quick add
          </button>
          <Link to={`/product/${product.slug}`} className="btn solid">
            Bekijk
          </Link>
        </div>
      </div>
    </div>
  </article>
);
