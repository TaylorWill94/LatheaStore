import { Link } from "react-router-dom";
import "./Nav.css";

export const Nav = () => {
  return (
    <nav className="nav">
      <Link to="/">
        <h3 className="nav-item">Home</h3>
      </Link>
      <Link to="/shop">
        <h3 className="nav-item">Shop</h3>
      </Link>
      <h3 className="nav-item">About</h3>
    </nav>
  );
};
