import { useState } from 'react';
import { ProductCard } from '../components/ProductCard';
import { products } from '../data/products';

export const ProductsPage = () => {
  const [filter, setFilter] = useState('alle');

  const filtered = filter === 'alle' ? products : products.filter((product) => product.slug === filter);

  return (
    <section className="container section">
      <h1>Producten</h1>
      <div className="filter-row">
        <label htmlFor="kleur">Filter op kleur:</label>
        <select id="kleur" value={filter} onChange={(event) => setFilter(event.target.value)}>
          <option value="alle">Alle kleuren</option>
          <option value="blauw">Blauw</option>
          <option value="groen">Groen</option>
          <option value="rood">Rood</option>
        </select>
      </div>
      <div className="product-grid">
        {filtered.map((product) => (
          <ProductCard key={product.slug} product={product} />
        ))}
      </div>
    </section>
  );
};
