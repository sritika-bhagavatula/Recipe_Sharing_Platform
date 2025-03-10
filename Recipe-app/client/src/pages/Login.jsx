import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [credentials, setCredentials] = useState({ email: "", password: "" });
  const [error, setError] = useState(""); // Error handling
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCredentials({ ...credentials, [name]: value });
    setError(""); // Clear errors on input change
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!credentials.email || !credentials.password) {
      setError("Please fill in both fields.");
      return;
    }

    console.log("Login details:", credentials);
    alert("Login Successful!");
    navigate("/");
  };

  return (
    <div className="container mt-4">
      <h2 className="text-center">Login</h2>
      
      {error && <div className="alert alert-danger">{error}</div>} {/* Show error message */}
      
      <form onSubmit={handleSubmit} className="mt-3">
        <div className="mb-3">
          <label className="form-label" htmlFor="email">Email</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={credentials.email}
            onChange={handleChange}
            aria-label="Enter your email"
            required
          />
        </div>
        
        <div className="mb-3">
          <label className="form-label" htmlFor="password">Password</label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            aria-label="Enter your password"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary" disabled={!credentials.email || !credentials.password}>
          Login
        </button>
      </form>
    </div>
  );
};

export default Login;
