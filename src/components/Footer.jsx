import { Link } from 'react-router-dom';

export const Footer = () => (
  <footer className="site-footer">
    <div className="container footer-grid">
      <div>
        <h4>Contact</h4>
        <p>Email: hallo@kleursnoep.nl</p>
        <p>Telefoon: +31 20 123 4567</p>
      </div>
      <div>
        <h4>Openingstijden</h4>
        <p>Ma-Vr: 09:00 - 18:00</p>
        <p>Za: 10:00 - 16:00</p>
      </div>
      <div>
        <h4>Volg ons</h4>
        <p>Instagram · TikTok · Facebook</p>
        <Link to="/klantenservice">Naar Klantenservice</Link>
      </div>
    </div>
  </footer>
);
