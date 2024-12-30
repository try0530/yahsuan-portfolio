import "./projectItem.css";
import pokemon from "../../assets/images/pokemon.jpg";
import portfolio from "../../assets/images/portfolio.jpg";

import studentRecycleCenter from "../../assets/images/student-recycle-center.jpg";
import kaleidoscope from "../../assets/images/kaleidoscope.jpg";
import ischool from "../../assets/images/ischool.jpg";

const ProjectItem = ({ data }) => {
  // import the images first and use the images to match with the data.img
  const images = {
    portfolio: portfolio,
    ischool: ischool,
    pokemon: pokemon,
    studentRecycleCenter: studentRecycleCenter,
    kaleidoscope: kaleidoscope,
  };

  return (
    <div className="project-item">
      <div className="project-details">
        <img src={images[data.img]} alt={data.imgdesc} />
        <p>&#9866;</p>
        <h4 className="project-name">{data.name}</h4>
        <p className="project-desc">{data.desc}</p>
        <div className="project-skills">
          <ul>
            {data.skills.map((skill, id) => (
              <li key={id}>{skill}</li>
            ))}
          </ul>
        </div>
        <div className="project-links">
          {data.github ? (
            <a href={data.github} target="_blank" rel="noopener noreferrer">
              Github
            </a>
          ) : null}
          {data.live ? (
            <a href={data.live} target="_blank" rel="noopener noreferrer">
              Live
            </a>
          ) : null}
        </div>
      </div>
    </div>
  );
};

export default ProjectItem;
