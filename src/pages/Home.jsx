import profile from "../assets/profile.jpg";

import { NavLink } from "react-router-dom";
 
export default function Home() {

  return (
<section className="hero container">
<div className="hero-text">
<h1>Hoi, ik ben <span className="highlight">Arda</span></h1>
<p>

      Ik bouw gebruiksvriendeljke websites en interactieve apps. Leuk dat je hier bent!
</p>
<div className="hero-buttons">
<NavLink to="/projecten" className="btn primary">Bekijk Projecten</NavLink>
<NavLink to="/contact" className="btn">Neem Contact Op</NavLink>
</div>
</div>
<div className="hero-photo">
<div className="photo-ring">
<img src={profile} alt="Arda" />
</div>
</div>
</section>

  );

}

 