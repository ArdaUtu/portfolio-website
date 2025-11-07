import { Link, Outlet } from "react-router-dom";

export default function Navbar() {
  return (
    <>
    <nav className="navbar">
      <div className="navbar-container">
        <Link to="/" h2 className="logoArda">Arda</Link>
        <ul className="nav-links">
          <li>
            <Link to="/">
              Home
            </Link>
          </li>
          <li>
            <Link to="/over-mij">
              Over mij
            </Link>
          </li>
          <li>
            <Link to="/projecten">
              Projecten
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
    <Outlet />
    </>
  );
}