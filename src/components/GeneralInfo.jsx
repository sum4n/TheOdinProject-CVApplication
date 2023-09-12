import { useState } from "react";
import "../styles/style.css";
import Input from "./Input";

function GeneralInfo() {
  const [inititalInfo, setInfo] = useState({ name: "", email: "", phone: "" });

  const [showForm, setShowForm] = useState(true);

  function handleChange(e) {
    setInfo({
      ...inititalInfo,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit() {
    setShowForm(!showForm);
  }

  return (
    <div className="info-box">
      <h2>General Info</h2>

      {showForm ? (
        <div className="info-content">
          <Input
            name="name"
            value={inititalInfo.name}
            onChange={handleChange}
          />
          <Input
            name="email"
            value={inititalInfo.email}
            onChange={handleChange}
          />

          <Input
            name="phone"
            value={inititalInfo.phone}
            onChange={handleChange}
          />
          <button type="submit" onClick={handleSubmit}>
            Submit
          </button>
        </div>
      ) : (
        <div className="info-content">
          <p>Name: {inititalInfo.name}</p>
          <p>Email: {inititalInfo.email}</p>
          <p>Phone: {inititalInfo.phone}</p>
          <button onClick={handleSubmit}>Edit</button>
        </div>
      )}
    </div>
  );
}

export default GeneralInfo;
