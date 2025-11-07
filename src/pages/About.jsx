import profile from "../assets/profile.jpg";

export default function About() {
  return (
<section className="AboutBody">
<h1>Over mij</h1>

<h1 class ="h1About">Hallo</h1>

<p class ="PAbout">
Ik ben een gepassioneerde programmeur met een sterke interesse in programmeertalen zoals JavaScript,<br></br>
Lua en HTML/CSS.Ik blijf mezelf continu uitdagen om mijn kennis te vergroten en nieuwe dingen te leren.
</p>
<section class ="VaardighedenSection">
<h3>Vaardigheden:</h3>
<ul>
<li>HTML / CSS / JavaScript</li>
<li>React</li>
<li>PHP & MySQL</li>
<li>Design & UI</li>
</ul>
</section>
<section class ="SectionAfbeelding">
<div className="AfbeeldingHome">
<div className="AfbeeldingCircle">
<img src={profile} alt="Arda" />
</div>
</div>
</section>
</section>
  );
}