import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import { useCart } from './CartContext';

export const Header = ({ onOpenCart }) => {
  const { itemCount } = useCart();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <header className="site-header">
        <div className="container header-grid">
          <Link to="/" className="brand-mark">
            KleurSnoep <span>Studio</span>
          </Link>

          <nav className="desktop-nav" aria-label="Hoofdmenu">
            <NavLink to="/">Home</NavLink>
            <div className="nav-dropdown">
              <NavLink to="/producten">Producten</NavLink>
              <div className="dropdown-panel">
                <Link to="/producten">Shop All</Link>
                <Link to="/product/blauw">Blauwe Snoepjes</Link>
                <Link to="/product/groen">Groene Snoepjes</Link>
                <Link to="/product/rood">Rode Snoepjes</Link>
              </div>
            </div>
            <NavLink to="/klantenservice">Klantenservice</NavLink>
          </nav>

          <div className="header-actions">
            <button className="icon-btn" type="button" aria-label="Zoeken">
              ⌕
            </button>
            <button className="icon-btn" type="button" aria-label="Account">
              ◯
            </button>
            <button className="icon-btn cart-trigger" type="button" onClick={onOpenCart} aria-label="Winkelmand openen">
              🛍
              {itemCount > 0 && <span className="cart-badge">{itemCount}</span>}
            </button>
            <button
              className="icon-btn mobile-menu-btn"
              type="button"
              onClick={() => setMenuOpen(true)}
              aria-label="Menu openen"
            >
              ☰
            </button>
          </div>
        </div>
      </header>

      <div className={`mobile-drawer ${menuOpen ? 'open' : ''}`}>
        <button className="drawer-backdrop" type="button" aria-label="Sluit menu" onClick={() => setMenuOpen(false)} />
        <aside className="drawer-panel">
          <button className="close-btn" type="button" onClick={() => setMenuOpen(false)}>
            Sluiten
          </button>
          <nav className="mobile-nav" aria-label="Mobiel menu">
            <NavLink to="/" onClick={() => setMenuOpen(false)}>
              Home
            </NavLink>
            <NavLink to="/producten" onClick={() => setMenuOpen(false)}>
              Shop All
            </NavLink>
            <NavLink to="/product/blauw" onClick={() => setMenuOpen(false)}>
              Blauwe Snoepjes
            </NavLink>
            <NavLink to="/product/groen" onClick={() => setMenuOpen(false)}>
              Groene Snoepjes
            </NavLink>
            <NavLink to="/product/rood" onClick={() => setMenuOpen(false)}>
              Rode Snoepjes
            </NavLink>
            <NavLink to="/klantenservice" onClick={() => setMenuOpen(false)}>
              Klantenservice
            </NavLink>
          </nav>
        </aside>
      </div>
    </>
  );
};
