import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';
import { useSEO } from '../hooks/useSEO';

export const HomePage = ({ onQuickAdd }) => {
  useSEO({
    title: 'KleurSnoep Studio | Premium candy drops',
    description: 'Premium sport/lifestyle candy storefront met snelle levering en iconische kleurcollecties.',
    url: 'https://kleursnoep.nl/',
    image: '/images/blauw.svg',
  });

  return (
    <>
      <section className="hero-premium">
        <div className="container hero-inner">
          <p className="eyebrow">NEW DROP · KLEURSNOEP STUDIO</p>
          <h1>Candy, elevated.</h1>
          <p>Minimalistische snoepbeleving met premium smaken in blauw, groen en rood.</p>
          <div className="cta-row">
            <Link to="/producten" className="btn solid">
              Shop alle snoepjes
            </Link>
            <a href="#bestsellers" className="btn ghost">
              Bekijk bestsellers
            </a>
          </div>
        </div>
      </section>

      <section className="container section editorial-grid" id="bestsellers">
        {products.map((product) => (
          <article key={product.slug} className="editorial-card">
            <img src={product.image} alt={product.name} />
            <div>
              <p className="eyebrow">{product.name}</p>
              <h3>{product.shortDescription}</h3>
              <Link to={`/product/${product.slug}`}>Explore</Link>
            </div>
          </article>
        ))}
      </section>

      <section className="container section">
        <div className="section-heading">
          <h2>Shop de collectie</h2>
          <Link to="/producten">Bekijk alles</Link>
        </div>
        <div className="product-grid premium-grid">
          {products.map((product) => (
            <ProductCard key={product.slug} product={product} onQuickAdd={onQuickAdd} />
          ))}
        </div>
      </section>

      <section className="container brand-block section">
        <h2>Gemaakt voor smaakliefhebbers met een lifestyle mindset.</h2>
        <p>
          KleurSnoep Studio combineert versheid, strakke presentatie en betrouwbare service in één premium shopervaring.
        </p>
        <div className="icon-bullets">
          <p>⚡ Snelle levering</p>
          <p>📦 Vers verpakt</p>
          <p>🔒 Veilig betalen</p>
        </div>
      </section>
    </>
  );
};
