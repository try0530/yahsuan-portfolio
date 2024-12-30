import "./works.css";
import works from "../../assets/json/works.json";
import Timeline from "../Timeline/Timeline";

const Works = () => {
  return (
    <section id="works">
      <h2 className="worksTitle">Works</h2>
      <Timeline timelineData={works} />
    </section>
  );
};

export default Works;
