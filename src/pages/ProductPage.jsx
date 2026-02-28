import { Link, useParams } from 'react-router-dom';
import { useState } from 'react';
import { getProductBySlug, products } from '../data/products';
import { QtySelector } from '../components/QtySelector';
import { useSEO } from '../hooks/useSEO';

const sections = [
  { key: 'ingredients', label: 'Ingrediënten' },
  { key: 'allergens', label: 'Allergenen' },
  { key: 'shipping', label: 'Verzending & retour' },
];

export const ProductPage = ({ onAddToCart }) => {
  const { kleur } = useParams();
  const product = getProductBySlug(kleur);
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
    title: `${product.name} | KleurSnoep Studio`,
    description: `${product.shortDescription} Premium candy drop van KleurSnoep Studio.`,
    url: `https://kleursnoep.nl/product/${product.slug}`,
    image: product.image,
  });

  const related = products.filter((item) => item.slug !== product.slug);

  return (
    <section className="container section">
      <div className="product-layout">
        <div>
          <img src={product.image} alt={product.name} className="detail-image" />
        </div>

        <div>
          <p className="eyebrow">KLEURSNOEP STUDIO</p>
          <h1>{product.name}</h1>
          <p className="price">€ {product.price.toFixed(2)}</p>
          <p className="stock">{product.stock}</p>
          <p>{product.description}</p>

          <div className="highlights">
            <span>Smaak: {product.taste}</span>
            <span>Inhoud: {product.weight}</span>
          </div>

          <div className="purchase-row">
            <QtySelector value={quantity} onChange={setQuantity} />
            <button type="button" className="btn solid btn-wide" onClick={() => onAddToCart(product.slug, quantity)}>
              Toevoegen aan winkelmand
            </button>
          </div>

          <div className="accordion-list">
            {sections.map((section) => (
              <details key={section.key}>
                <summary>{section.label}</summary>
                <p>
                  {section.key === 'ingredients' && product.ingredients}
                  {section.key === 'allergens' && product.allergens}
                  {section.key === 'shipping' &&
                    'Voor 22:00 besteld, morgen in huis. Retour binnen 14 dagen in originele verpakking.'}
                </p>
              </details>
            ))}
          </div>
        </div>
      </div>

      <div className="section">
        <h2>Gerelateerde producten</h2>
        <div className="product-grid premium-grid">
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
