import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
 
export default function Projects() {
  return (
<section className="ProjectBody">

<h1 class ="h1Project">Mijn Projecten</h1>
<div className="Projects">
        {projects.map((p) => (
<ProjectCard key={p.id} project={p} />
        ))}
</div>
</section>
  );
}