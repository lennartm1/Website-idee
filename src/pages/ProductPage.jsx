import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getProductBySlug, products } from '../data/products';
import { useCart } from '../components/CartContext';
import { useSEO } from '../hooks/useSEO';

export const ProductPage = () => {
  const { kleur } = useParams();
  const product = getProductBySlug(kleur);
  const { addToCart } = useCart();
  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return (
      <section className="container section">
        <h1>Product niet gevonden</h1>
        <Link to="/producten">Terug naar producten</Link>
      </section>
    );
  }

  useSEO({
    title: `${product.name} | KleurSnoep`,
    description: `${product.shortDescription} Bestel nu ${product.name.toLowerCase()} bij KleurSnoep.`,
    url: `https://kleursnoep.nl/product/${product.slug}`,
    image: product.image,
  });

  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <section className="container section product-page">
      <img src={product.image} alt={product.name} className="product-image" />
      <div>
        <h1>{product.name}</h1>
        <p className="price">€ {product.price.toFixed(2)}</p>
        <p className="stock">{product.stock}</p>
        <p>{product.description}</p>
        <ul>
          <li>
            <strong>Ingrediënten:</strong> {product.ingredients}
          </li>
          <li>
            <strong>Smaak:</strong> {product.taste}
          </li>
          <li>
            <strong>Inhoud:</strong> {product.weight}
          </li>
          <li>
            <strong>Allergenen:</strong> {product.allergens}
          </li>
        </ul>

        <div className="row gap-sm center">
          <label htmlFor="quantity">Aantal:</label>
          <input
            id="quantity"
            type="number"
            min="1"
            max="10"
            value={quantity}
            onChange={(event) => setQuantity(Math.min(10, Math.max(1, Number(event.target.value))))}
          />
          <button type="button" className="btn" onClick={() => addToCart(product.slug, quantity)}>
            Toevoegen aan winkelwagen
          </button>
        </div>

        <div className="shipping">
          <h3>Verzending & retour</h3>
          <p>Voor 22:00 besteld, morgen in huis. Retour binnen 14 dagen met originele verpakking.</p>
        </div>
      </div>

      <div className="related">
        <h2>Gerelateerde producten</h2>
        <div className="product-grid">
          {related.map((item) => (
            <article key={item.slug} className="related-card">
              <h4>{item.name}</h4>
              <p>{item.shortDescription}</p>
              <Link to={`/product/${item.slug}`}>Bekijk product</Link>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};
