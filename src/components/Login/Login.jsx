import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useToasts } from "react-toast-notifications";
import "./Login.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";

const LoginPage = () => {
  const { addToast } = useToasts();
  const navigate = useNavigate();
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleVisible = () => setVisible(!visible);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (data.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!/\S+@\S+\.\S+/.test(data.email))
      newErrors.email = "Invalid email address";
    if (data.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateForm()) {
      addToast("Please fix the errors", { appearance: "error", autoDismiss: true, autoDismissTimeout: 3000 });
      return;
    }

    const user = JSON.parse(localStorage.getItem("user"));

    if (user) {
      if (
        user.name === data.name &&
        user.email === data.email &&
        user.password === data.password
      ) {
        addToast("Login Successful", { appearance: "success", autoDismiss: true, autoDismissTimeout: 3000 });
        navigate("/");
        localStorage.setItem("login", JSON.stringify(data));
      } else {
        addToast("Invalid credentials", { appearance: "error", autoDismiss: true, autoDismissTimeout: 3000 });
      }
    } else {
      addToast("User does not exist", { appearance: "error", autoDismiss: true, autoDismissTimeout: 3000 });
    }
  };

  return (
    <div className="logindetails">
      <div className="logincontainer">
        <h1>Login</h1>
        <div className="loginfields">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={data.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={data.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <div className="pass">
            <input
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={data.password}
              onChange={handleInputChange}
            />
            <div className="eye-icon" onClick={toggleVisible}>
              {visible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <button onClick={handleSubmit}>Continue</button>
        </div>
        <p className="Signup">
          New account?{" "}
          <Link to="/signup" style={{ textDecoration: "none" }}>
            <button className="signupbutton">Signup here</button>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;
