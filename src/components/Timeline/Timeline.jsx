import "./timeline.css";
import TimelineItem from "../TimelineItem/TimelineItem";

const Timeline = ({ timelineData }) => {
  return (
    <>
      {timelineData.length > 0 && (
        <div className="timeline-container">
          {timelineData.map((data, id) => (
            <TimelineItem data={data} key={id} />
          ))}
        </div>
      )}
    </>
  );
};

export default Timeline;
