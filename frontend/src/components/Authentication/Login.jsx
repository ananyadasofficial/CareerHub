import React, { useState } from "react";
import Shared from "../shared";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(email, password);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <div
        className="form-container"
        style={{ fontFamily: "Arial, sans-serif" }}
      >
        <div
          className="form-box shadow"
          style={{ padding: "20px", borderRadius: "10px" }}
        >
          <h2 className="text-center mb-4">Login</h2>
          <form onSubmit={handleSubmit}>
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

            <div className="d-flex justify-content-between align-items-center">
              <p>
                Not a User <Link to="/register">Register Here!</Link>
              </p>
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
