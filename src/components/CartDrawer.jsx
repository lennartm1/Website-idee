import { Link } from 'react-router-dom';
import { useCart } from './CartContext';

export const CartDrawer = ({ open, onClose }) => {
  const { items, subtotal, updateQuantity, removeFromCart } = useCart();

  return (
    <div className={`cart-drawer ${open ? 'open' : ''}`} aria-hidden={!open}>
      <button className="drawer-backdrop" type="button" onClick={onClose} aria-label="Sluit winkelmand" />
      <aside className="cart-panel">
        <div className="cart-header">
          <h2>Winkelmand</h2>
          <button type="button" className="close-btn" onClick={onClose}>
            Sluiten
          </button>
        </div>

        {items.length === 0 ? (
          <p>Je winkelmand is nog leeg.</p>
        ) : (
          <ul className="cart-lines">
            {items.map((item) => (
              <li key={item.slug} className="cart-line">
                <img src={item.image} alt={item.name} />
                <div>
                  <p>{item.name}</p>
                  <small>€ {item.price.toFixed(2)}</small>
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
              </li>
            ))}
          </ul>
        )}

        <div className="cart-footer">
          <p className="subtotal">Subtotaal: € {subtotal.toFixed(2)}</p>
          <p className="muted">Verzendkosten en kortingen worden berekend bij checkout.</p>
          <button type="button" className="btn solid btn-wide" onClick={() => alert('Checkout placeholder')}>
            Afrekenen
          </button>
          <div className="row-links">
            <button type="button" className="btn ghost" onClick={onClose}>
              Verder winkelen
            </button>
            <Link to="/cart" onClick={onClose}>
              Volledige winkelmand
            </Link>
          </div>
        </div>
      </aside>
    </div>
  );
};
