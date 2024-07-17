import "./about.css";
import aboutSkills from "../../assets/json/aboutSkills.json";
import personnalPic from "../../assets/images/person.png";

const About = () => {
  return (
    <section id="about">
      <h2 className="aboutTitle">About</h2>
      <div className="about-info">
        <div className="about-detail">
          <p>
            Hi! I'm <span>Ya-Hsuan (Terry) Yang</span>.<br />
            <br />
            Currently pursing my Masters degree in Human Computer Interaction at
            Rochester Institute of Technology, New York.
            <br />
            I'm a software developer turned UI/UX enthusiast. My journey began
            in college, where I discovered my love for coding. After graduating,
            I dived into software development, realizing the profound impact of
            good UI/UX on user interactions.
            <br />
            <br />
            Now, my focus is on becoming a skilled Front-End Developer,
            specializing in creating websites that are not only functional but
            also user-friendly and visually appealing. I'm passionate about
            blending creativity with functionality to craft seamless digital
            experiences.
          </p>
          <p>&#9866;</p>
          <div className="about-skills">
            <h4>SKILLS</h4>
            <ul>
              {aboutSkills.skills.length > 0 &&
                aboutSkills.skills.map((skill, id) => (
                  <li key={id}>{skill}</li>
                ))}
            </ul>
          </div>
          <p>&#9866;</p>
          <div>
            <h4>Language</h4>
            <div className="about-language">
              <ul>
                <li>Mandarin(Native)</li>
                <li>English</li>
              </ul>
            </div>
          </div>
          <p>&#9866;</p>
          <div>
            <h4>HOBBIES</h4>
            <div className="about-hobbies">
              <div>
                <h4>Outdoor hobbies</h4>
                <ul>
                  <li>Freediving</li>
                  <li>Traveling</li>
                  <li>Snowboarding</li>
                </ul>
              </div>

              <div>
                <h4>Indoor hobbies</h4>
                <ul>
                  <li>Reading</li>
                  <li>Illustrating</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="about-img">
          <img src={personnalPic} alt="YA-HSUAN YANG" />
        </div>
      </div>
    </section>
  );
};

export default About;
