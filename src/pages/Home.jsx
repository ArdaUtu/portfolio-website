import profile from "../assets/profile.jpg";

import { NavLink } from "react-router-dom";
 
export default function Home() {

  return (
<section className="HomeBody">
<div className="Hometext">
<h1 class ="H1Home">Hoi, ik ben Arda</h1>
<p>

      Ik bouw gebruiksvriendeljke websites en interactieve apps. Leuk dat je hier bent!
</p>
<div className="HomeButtons">
<NavLink to="/projecten" className="BtnProject">Bekijk Projecten</NavLink>
<NavLink to="/contact" className="BtnContact">Neem Contact Op</NavLink>
</div>
</div>
<div className="AfbeeldingHome">
<div className="AfbeeldingCircle">
<img src={profile} alt="Arda" />
</div>
</div>
</section>

  );

}

 