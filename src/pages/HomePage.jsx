import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useSEO } from '../hooks/useSEO';

export const HomePage = () => {
  useSEO({
    title: 'KleurSnoep | Snoep in kleur, geleverd aan huis',
    description:
      'Bestel Blauwe, Groene en Rode snoepjes bij KleurSnoep. Snelle levering, vers verpakt en veilig betalen.',
    url: 'https://kleursnoep.nl/',
    image: '/icons/icon.svg',
  });

  return (
    <>
      <section className="hero container">
        <div>
          <h1>Snoep in kleur, geleverd aan huis</h1>
          <p>Moderne snoepwinkel met snelle levering en vrolijke smaken voor elk moment.</p>
          <Link to="/producten" className="btn">
            Bekijk producten
          </Link>
        </div>
      </section>

      <section className="container section">
        <h2>Populaire kleuren</h2>
        <div className="product-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} />
          ))}
        </div>
      </section>

      <section className="container trust section">
        <article>⚡ Snelle levering</article>
        <article>📦 Vers verpakt</article>
        <article>🔒 Veilig betalen</article>
      </section>
    </>
  );
};
