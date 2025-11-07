import { useNavigate } from "react-router-dom";
 
export default function ProjectCard({ project }) {
  const navigate = useNavigate();
  return (
<div className="card" onClick={() => navigate(`/projecten/${project.id}`)}>
<img src={project.image} alt={project.title} />
<div className="card-content">
<h3>{project.title}</h3>
<p>{project.description}</p>
<p>{project.description1}</p>
</div>
</div>
  );
}