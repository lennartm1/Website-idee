import { createContext, useContext, useMemo, useState } from 'react';
import { getProductBySlug } from '../data/products';

const CartContext = createContext(null);

const initialCart = () => {
  try {
    const saved = localStorage.getItem('kleursnoep-cart');
    return saved ? JSON.parse(saved) : [];
  } catch {
    return [];
  }
};

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(initialCart);

  const persist = (nextItems) => {
    setItems(nextItems);
    localStorage.setItem('kleursnoep-cart', JSON.stringify(nextItems));
  };

  const addToCart = (slug, quantity = 1) => {
    const safeQuantity = Math.min(10, Math.max(1, quantity));
    const existing = items.find((item) => item.slug === slug);

    if (existing) {
      persist(
        items.map((item) =>
          item.slug === slug
            ? { ...item, quantity: Math.min(10, Math.max(1, item.quantity + safeQuantity)) }
            : item,
        ),
      );
      return;
    }

    persist([...items, { slug, quantity: safeQuantity }]);
  };

  const updateQuantity = (slug, nextQuantity) => {
    const safeQuantity = Math.min(10, Math.max(0, nextQuantity));

    if (safeQuantity === 0) {
      persist(items.filter((item) => item.slug !== slug));
      return;
    }

    persist(items.map((item) => (item.slug === slug ? { ...item, quantity: safeQuantity } : item)));
  };

  const removeFromCart = (slug) => persist(items.filter((item) => item.slug !== slug));
  const clearCart = () => persist([]);

  const detailedItems = useMemo(
    () =>
      items
        .map((item) => {
          const product = getProductBySlug(item.slug);
          if (!product) return null;
          return {
            ...product,
            quantity: item.quantity,
            lineTotal: item.quantity * product.price,
          };
        })
        .filter(Boolean),
    [items],
  );

  const subtotal = detailedItems.reduce((sum, item) => sum + item.lineTotal, 0);
  const itemCount = detailedItems.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <CartContext.Provider
      value={{
        items: detailedItems,
        subtotal,
        itemCount,
        addToCart,
        updateQuantity,
        removeFromCart,
        clearCart,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const useCart = () => {
  const context = useContext(CartContext);
  if (!context) throw new Error('useCart must be used within CartProvider');
  return context;
};
