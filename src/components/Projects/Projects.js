import "./projects.css";

import ProjectItem from "../ProjectItem/ProjectItem";
import webProjects from "../../assets/json/projects.json";
import otherProjects from "../../assets/json/otherprojects.json";

const Projects = () => {
  return (
    <section id="projects">
      <h2 className="projectsTitle">Projects</h2>
      <div className="web-projects">
        <h3>Web Projects</h3>
        {webProjects.length > 0 && (
          <div className="project-container">
            {webProjects.map((data, id) => (
              <ProjectItem data={data} key={id} />
            ))}
          </div>
        )}
      </div>
      <div className="other-projects">
        <h3>Other Projects</h3>
        {otherProjects.length > 0 && (
          <div className="project-container">
            {otherProjects.map((data, id) => (
              <ProjectItem data={data} key={id} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Projects;
