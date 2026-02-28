import { Route, Routes } from 'react-router-dom';
import { useState } from 'react';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import { CustomerServicePage } from './pages/CustomerServicePage';
import { CartPage } from './pages/CartPage';
import { CartDrawer } from './components/CartDrawer';
import { Toast } from './components/Toast';
import { useCart } from './components/CartContext';

export default function App() {
  const { addToCart } = useCart();
  const [isCartOpen, setCartOpen] = useState(false);
  const [toast, setToast] = useState('');

  const handleAddToCart = (slug, quantity = 1) => {
    addToCart(slug, quantity);
    setCartOpen(true);
    setToast('Toegevoegd aan winkelmand');
    setTimeout(() => setToast(''), 1800);
  };

  return (
    <div className="app-shell">
      <Header onOpenCart={() => setCartOpen(true)} />
      <main>
        <Routes>
          <Route path="/" element={<HomePage onQuickAdd={(slug) => handleAddToCart(slug, 1)} />} />
          <Route path="/producten" element={<ProductsPage onQuickAdd={(slug) => handleAddToCart(slug, 1)} />} />
          <Route path="/product/:kleur" element={<ProductPage onAddToCart={handleAddToCart} />} />
          <Route path="/klantenservice" element={<CustomerServicePage />} />
          <Route path="/cart" element={<CartPage />} />
        </Routes>
      </main>
      <Footer />
      <CartDrawer open={isCartOpen} onClose={() => setCartOpen(false)} />
      <Toast message={toast} visible={Boolean(toast)} />
    </div>
  );
}
