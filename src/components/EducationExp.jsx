import { useState } from "react";
import "../styles/style.css";
import Input from "./Input";

function EducationExp() {
  const [experience, setExperience] = useState({
    school: "",
    course: "",
    session: "",
  });

  function handleChange(e) {
    setExperience({
      ...experience,
      [e.target.name]: e.target.value,
    });
  }

  const [showForm, setShowForm] = useState(true);

  function handleClick() {
    setShowForm(!showForm);
  }

  return (
    <div className="info-box">
      <h2>Educational Experience</h2>
      {showForm ? (
        <div className="info-content">
          <Input
            name="school"
            value={experience.school}
            onChange={handleChange}
          />
          <Input
            name="course"
            value={experience.course}
            onChange={handleChange}
          />
          <Input
            name="session"
            value={experience.session}
            onChange={handleChange}
          />
          <button onClick={handleClick}>Submit</button>
        </div>
      ) : (
        <div className="info-content">
          <p>School: {experience.school}</p>
          <p>Course: {experience.course}</p>
          <p>Session: {experience.session}</p>
          <button onClick={handleClick}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default EducationExp;
