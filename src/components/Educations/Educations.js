import React from "react";
import "./educations.css";
import educations from "../../assets/json/educations.json";
import Timeline from "../Timeline/Timeline";

const Educations = () => {
  return (
    <section id="educations">
      <h2 className="educationsTitle">Educations</h2>
      <Timeline timelineData={educations} />
    </section>
  );
};

export default Educations;
