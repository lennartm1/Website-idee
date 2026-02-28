import { Link } from 'react-router-dom';
import { useCart } from '../components/CartContext';

export const CartPage = () => {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <section className="container section">
      <h1>Jouw winkelmand</h1>
      {items.length === 0 ? (
        <p>
          Je winkelmand is leeg. <Link to="/producten">Shop producten</Link>
        </p>
      ) : (
        <>
          <div className="cart-page-lines">
            {items.map((item) => (
              <article key={item.slug} className="cart-page-line">
                <img src={item.image} alt={item.name} />
                <div>
                  <h3>{item.name}</h3>
                  <p>€ {item.price.toFixed(2)}</p>
                  <div className="line-controls">
                    <button type="button" onClick={() => updateQuantity(item.slug, item.quantity - 1)}>
                      −
                    </button>
                    <span>{item.quantity}</span>
                    <button type="button" onClick={() => updateQuantity(item.slug, item.quantity + 1)}>
                      +
                    </button>
                    <button type="button" className="text-link" onClick={() => removeFromCart(item.slug)}>
                      Verwijder
                    </button>
                  </div>
                </div>
                <strong>€ {item.lineTotal.toFixed(2)}</strong>
              </article>
            ))}
          </div>

          <div className="cart-page-summary">
            <h3>Subtotaal: € {subtotal.toFixed(2)}</h3>
            <p>Checkout is een placeholder in deze demo.</p>
            <button type="button" className="btn solid" onClick={() => alert('Checkout placeholder')}>
              Afrekenen
            </button>
          </div>
        </>
      )}
    </section>
  );
};
