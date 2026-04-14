import { useParams, useNavigate } from "react-router-dom";
import projects from "../data/projects";
export default function ProjectDetail() {
  const { id } = useParams();
  const navigate = useNavigate();
  const project = projects.find((p) => p.id === Number(id));

  if (!project) {
    return (
      <section className="ProjectDetailBody">
        <button className="btn" onClick={() => navigate("/projecten")}>Terug</button>
        <h1>Project niet gevonden</h1>
      </section>
    );
  }

  return (
    <section className="ProjectDetailBody">
      <button className="btn" onClick={() => navigate("/projecten")}>Terug</button>
      <h1>{project.title}</h1>
      <section className="middel">
        <section className="ImageProjectDetail">
          <img className="ImageProjectDetail" src={project.image1} alt={project.title} />
          <img className="ImageProjectDetail" src={project.image2} alt={project.title} />
          <img className="ImageProjectDetail" src={project.image3} alt={project.title} />
          <img className="ImageProjectDetail" src={project.image4} alt={project.title} />
        </section>
        <section className="DescriptionDetail">
          <p className="DescriptionDetail">{project.descriptionId}</p>
          {project.Link && (
            <a
              href={project.Link}
              target="_blank"
              rel="noopener noreferrer"
              className="ProjectLink"
            >
              Bekijk Project
            </a>
          )}
        </section>
      </section>
    </section>

  );
}

