import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  return (
    <section className="ProjectDetailBody">
      <button className="btn" onClick={() => navigate('/projecten')}>Terug</button>
      <h1>{project.title}</h1>
        <section className="middel">
      <section className="ImageProjectDetail">
        <img className="ImageProjectDetail" src={project.image} alt={project.title} />
        <img className="ImageProjectDetail" src={project.image1} alt={project.title} />
        <img className="ImageProjectDetail" src={project.image2} alt={project.title} />
        <img className="ImageProjectDetail" src={project.image3} alt={project.title} />
      </section>
      <section className="DescriptionDetail">
        <p className="DescriptionDetail">{project.descriptionId}</p>
      </section>
      </section>
    </section>

  );
}

