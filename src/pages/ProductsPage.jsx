import { useMemo, useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const ProductsPage = ({ onQuickAdd }) => {
  const [filter, setFilter] = useState('alles');
  const [sort, setSort] = useState('default');

  const filteredProducts = useMemo(() => {
    const base = filter === 'alles' ? [...products] : products.filter((product) => product.slug === filter);

    if (sort === 'price-low') return base.sort((a, b) => a.price - b.price);
    if (sort === 'price-high') return base.sort((a, b) => b.price - a.price);
    return base;
  }, [filter, sort]);

  return (
    <section className="container section">
      <h1>Shop</h1>
      <div className="shop-toolbar">
        <div className="chips">
          {['alles', 'blauw', 'groen', 'rood'].map((chip) => (
            <button
              type="button"
              key={chip}
              className={filter === chip ? 'chip active' : 'chip'}
              onClick={() => setFilter(chip)}
            >
              {chip === 'alles' ? 'Alles' : chip[0].toUpperCase() + chip.slice(1)}
            </button>
          ))}
        </div>

        <select value={sort} onChange={(event) => setSort(event.target.value)} aria-label="Sorteer producten">
          <option value="default">Sorteren</option>
          <option value="price-low">Prijs laag → hoog</option>
          <option value="price-high">Prijs hoog → laag</option>
        </select>
      </div>

      <div className="product-grid premium-grid">
        {filteredProducts.map((product) => (
          <ProductCard key={product.slug} product={product} onQuickAdd={onQuickAdd} />
        ))}
      </div>
    </section>
  );
};
