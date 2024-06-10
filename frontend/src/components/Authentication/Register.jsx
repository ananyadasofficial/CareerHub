import React, { useState } from "react";
import { Link } from "react-router-dom";
import Shared from "../shared";

const Register = () => {
  const [name, setName] = useState("");
  const [mobile, setMobile] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(name, mobile, email, password, role);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="form-container" style={{ fontFamily: "Arial, sans-serif" }}>
      <div
        className="form-box shadow"
        style={{ padding: "20px", borderRadius: "10px", margin: "20px 0" }}
      >
        <h2 className="text-center mb-4">Register</h2>
        <form onSubmit={handleSubmit}>
          <Shared
            htmlFor="name"
            labelText="Name"
            type="text"
            value={name}
            handleChange={(e) => setName(e.target.value)}
            name="name"
          />
          <Shared
            htmlFor="mobile"
            labelText="Contact Number"
            type="text"
            value={mobile}
            handleChange={(e) => setMobile(e.target.value)}
            name="mobile"
          />
          <Shared
            htmlFor="email"
            labelText="Email address"
            type="email"
            value={email}
            handleChange={(e) => setEmail(e.target.value)}
            name="email"
          />
          <Shared
            htmlFor="password"
            labelText="Password"
            type="password"
            value={password}
            handleChange={(e) => setPassword(e.target.value)}
            name="password"
          />
          <div className="mb-3">
            <label htmlFor="role" className="form-label">
              Role
            </label>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="role"
                id="applicant"
                value="Applicant"
                checked={role === "Applicant"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="applicant" className="form-check-label">
                Applicant
              </label>
            </div>
            <div className="form-check">
              <input
                type="radio"
                className="form-check-input"
                name="role"
                id="recruiter"
                value="Recruiter"
                checked={role === "Recruiter"}
                onChange={(e) => setRole(e.target.value)}
              />
              <label htmlFor="recruiter" className="form-check-label">
                Recruiter
              </label>
            </div>
          </div>

          <div className="d-flex justify-content-between align-items-center">
            <p>
              Already Registered? <Link to="/login">Login</Link>
            </p>
            <button type="submit" className="btn btn-primary">
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
