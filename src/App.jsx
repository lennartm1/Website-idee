import { Route, Routes } from 'react-router-dom';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { HomePage } from './pages/HomePage';
import { ProductsPage } from './pages/ProductsPage';
import { ProductPage } from './pages/ProductPage';
import { CustomerServicePage } from './pages/CustomerServicePage';
import { Cart } from './components/Cart';

export default function App() {
  return (
    <div className="app-shell">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/producten" element={<ProductsPage />} />
          <Route path="/product/:kleur" element={<ProductPage />} />
          <Route path="/klantenservice" element={<CustomerServicePage />} />
        </Routes>
      </main>
      <Cart />
      <Footer />
    </div>
  );
}
