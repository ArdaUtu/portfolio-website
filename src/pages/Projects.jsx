import { useState } from "react";
import ProjectCard from "../components/ProjectCard";
import projects from "../data/projects";

export default function Projects() {
  const [search, setSearch] = useState("");

  
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(search.toLowerCase()) ||
    project.description.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <section className="ProjectBody">

      <h1 className="h1Project">Mijn Projecten</h1>

      <input
        type="text"
        placeholder="Zoek een project"
        className="searchInput"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />


      <div className="Projects">
        {filteredProjects.map((p) => (
          <ProjectCard key={p.id} project={p} />
        ))}


        {filteredProjects.length === 0 && (
          <p>Geen projecten gevonden.</p>
        )}
      </div>
    </section>
  );
}
