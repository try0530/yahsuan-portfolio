import React from "react";

const TimelineItem = ({ data }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-item-content">
        <h3 className="name">{data.name}</h3>
        <p className="title">{data.title}</p>
        <span className="location">{data.location}</span>
        <span className="time">{data.time}</span>
        <p className="description">{data.description}</p>
        <span className="circle" />
      </div>
    </div>
  );
};

export default TimelineItem;
