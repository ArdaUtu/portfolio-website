import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";
 
export default function Projects() {
  return (
<section className="container section">
<h1>Mijn Projecten</h1>
<div className="projects-grid">
        {projects.map((p) => (
<ProjectCard key={p.id} project={p} />
        ))}
</div>
</section>
  );
}