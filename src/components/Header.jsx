import { Link, NavLink } from 'react-router-dom';

export const Header = () => (
  <header className="site-header">
    <div className="container row between center">
      <Link to="/" className="brand">
        🍬 KleurSnoep
      </Link>
      <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/producten">Producten</NavLink>
        <NavLink to="/klantenservice">Klantenservice</NavLink>
      </nav>
    </div>
  </header>
);
