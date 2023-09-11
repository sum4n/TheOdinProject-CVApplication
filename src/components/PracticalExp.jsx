import { useState } from "react";
import "../styles/style.css";

function PracticalExp() {
  const [workInfo, setWorkInfo] = useState({
    company: "",
    position: "",
    responsibility: "",
    workDuration: "",
  });

  function handleChange(e) {
    setWorkInfo({
      ...workInfo,
      [e.target.name]: e.target.value,
    });
  }

  const [showForm, setShowForm] = useState(true);

  function handleSubmit() {
    setShowForm(!showForm);
  }

  return (
    <div className="info-box">
      <h2>Practical Experience</h2>

      {showForm ? (
        <div className="info-content">
          <label>
            Company:
            <input
              type="text"
              name="company"
              value={workInfo.company}
              onChange={handleChange}
            />
          </label>
          <label>
            Position:
            <input
              type="text"
              name="position"
              value={workInfo.position}
              onChange={handleChange}
            />
          </label>
          <label>
            Responsibility:
            <input
              type="text"
              name="responsibility"
              value={workInfo.responsibility}
              onChange={handleChange}
            />
          </label>
          <label>
            Work Duration:
            <input
              type="text"
              name="workDuration"
              value={workInfo.workDuration}
              onChange={handleChange}
            />
          </label>
          <button onClick={handleSubmit}>Submit</button>
        </div>
      ) : (
        <div className="info-content">
          <p>Company: {workInfo.company}</p>
          <p>Position: {workInfo.position}</p>
          <p>Responsibility: {workInfo.responsibility}</p>
          <p>Work duration: {workInfo.workDuration}</p>
          <button onClick={handleSubmit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default PracticalExp;
