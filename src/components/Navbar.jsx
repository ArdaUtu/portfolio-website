import { NavLink } from "react-router-dom";
 
export default function Navbar() {
  return (
<nav className="navbar">
<div className="navbar-container">
<h2 className="logo">Arda</h2>
<ul className="nav-links">
<li>
<NavLink to="/" className={({ isActive }) => (isActive ? "active" : "")}>
              Home
</NavLink>
</li>
<li>
<NavLink to="/over-mij" className={({ isActive }) => (isActive ? "active" : "")}>
              Over mij
</NavLink>
</li>
<li>
<NavLink to="/projecten" className={({ isActive }) => (isActive ? "active" : "")}>
              Projecten
</NavLink>
</li>
<li>
<NavLink to="/contact" className={({ isActive }) => (isActive ? "active" : "")}>
              Contact
</NavLink>
</li>
</ul>
</div>
</nav>
  );
}