import { useCart } from './CartContext';

export const Cart = () => {
  const { items, removeFromCart, total, clearCart } = useCart();

  return (
    <aside className="cart">
      <div className="row between center">
        <h3>Winkelwagen</h3>
        {items.length > 0 && (
          <button type="button" className="link-btn" onClick={clearCart}>
            Leegmaken
          </button>
        )}
      </div>
      {items.length === 0 ? (
        <p>Je winkelwagen is leeg.</p>
      ) : (
        <>
          <ul>
            {items.map((item) => (
              <li key={item.slug} className="cart-item">
                <div>
                  <p>{item.name}</p>
                  <small>
                    {item.quantity} × € {item.price.toFixed(2)}
                  </small>
                </div>
                <button type="button" onClick={() => removeFromCart(item.slug)}>
                  Verwijder
                </button>
              </li>
            ))}
          </ul>
          <p className="cart-total">Totaal: € {total.toFixed(2)}</p>
          <button type="button" className="btn btn-full" onClick={() => alert('Checkout placeholder')}>
            Naar checkout
          </button>
        </>
      )}
    </aside>
  );
};
