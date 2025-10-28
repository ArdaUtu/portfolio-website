import { useParams, useNavigate } from "react-router-dom";

import projects from "../data/projects";
 
export default function ProjectDetail() {

  const { id } = useParams();

  const navigate = useNavigate();

  const project = projects.find((p) => p.id === Number(id));
 
  if (!project) return <p>Project niet gevonden.</p>;
 
  return (
<section className="container section">
<button className="btn" onClick={() => navigate(-1)}>← Terug</button>
<h1>{project.title}</h1>
<img src={project.image} alt={project.title} />
<p>{project.description}</p>
</section>

  );

}

 