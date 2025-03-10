import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h2>CommunionHub</h2>
        <p>Connecting people across faiths and interests through meaningful events.</p>

        <ul className="footer-links">
          <li><Link to="/">Home</Link></li>
          <li><Link to="/events">Events</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>

        <div className="footer-bottom">
          <p>© {new Date().getFullYear()} CommunionHub. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
