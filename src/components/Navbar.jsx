import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar ({cartCount}) {
  return (
    <nav className="navbar">
      <ul className="nav-links-left">
        <li><Link to="/about">About Us</Link></li>
        <li><Link to="/catalog">Catalog</Link></li>
        <li><Link to="/services">Services</Link></li>
      </ul>

      <div><Link to="/" className="web-logo">𝐹𝐿𝒪𝑅𝒜𝐿</Link></div>

      <ul className="nav-links-right">
       <li><Link to="/delivery">Delivery</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>

      <div className="icons">
         <Link to="/wishlist" className="icon">♡</Link>
        <Link to="/cart" className="icon">🛒({cartCount})</Link>
        <Link to="/profile" className="icon">👤</Link>
      </div>
    </nav>
  );
}
