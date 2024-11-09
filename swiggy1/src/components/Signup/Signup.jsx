import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Signup.css";
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { useToasts } from "react-toast-notifications";

const SignupPage = () => {
  const navigate = useNavigate();
  const { addToast } = useToasts();
  const [information, setInformation] = useState({
    name: "",
    email: "",
    password: "",
    ConfirmPassword: "",
    agree: false,
  });
  const [visible, setVisible] = useState(false);
  const [confirmVisible, setConfirmVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const toggleVisible = () => setVisible(!visible);
  const toggleConfirmVisible = () => setConfirmVisible(!confirmVisible);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setInformation({
      ...information,
      [name]: type === "checkbox" ? checked : value,
    });
    setErrors({ ...errors, [name]: "" });
  };

  const validateForm = () => {
    const newErrors = {};
    if (information.name.trim().length < 3)
      newErrors.name = "Name must be at least 3 characters";
    if (!/\S+@\S+\.\S+/.test(information.email))
      newErrors.email = "Invalid email address";
    if (information.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";
    if (information.password !== information.ConfirmPassword)
      newErrors.ConfirmPassword = "Passwords do not match";
    if (!information.agree)
      newErrors.agree = "You must agree to the terms";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!validateForm()) {
      addToast("Please fix the errors", { appearance: "error", autoDismiss: true, autoDismissTimeout: 3000 });
      return;
    }
    localStorage.setItem("user", JSON.stringify(information));
    setInformation({
      name: "",
      email: "",
      password: "",
      ConfirmPassword: "",
      agree: false,
    });
    navigate("/");
  };

  return (
    <div className="loginsignup">
      <div className="loginsignupcontainer">
        <h1>Sign Up</h1>
        <div className="loginsignupfields">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={information.name}
            onChange={handleInputChange}
          />
          {errors.name && <p className="error">{errors.name}</p>}
          <input
            type="email"
            name="email"
            placeholder="Your email"
            value={information.email}
            onChange={handleInputChange}
          />
          {errors.email && <p className="error">{errors.email}</p>}
          <div className="pass">
            <input
              type={visible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={information.password}
              onChange={handleInputChange}
            />
            <div className="eye-icon" onClick={toggleVisible}>
              {visible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {errors.password && <p className="error">{errors.password}</p>}
          <div className="pass">
            <input
              type={confirmVisible ? "text" : "password"}
              name="ConfirmPassword"
              placeholder="Confirm Password"
              value={information.ConfirmPassword}
              onChange={handleInputChange}
            />
            <div className="eye-icon" onClick={toggleConfirmVisible}>
              {confirmVisible ? <FaEye /> : <FaEyeSlash />}
            </div>
          </div>
          {errors.ConfirmPassword && <p className="error">{errors.ConfirmPassword}</p>}
          <button
            style={{ opacity: information.agree ? 1 : 0.5 }}
            disabled={!information.agree}
            onClick={handleSubmit}
          >
            Continue
          </button>
          {errors.agree && <p className="error">{errors.agree}</p>}
        </div>
        <p className="loginsignup-login">
          Already have an account?{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button className="new-login">Login here</button>
          </Link>
        </p>
        <div className="loginsignup-agree">
          <input
            type="checkbox"
            name="agree"
            checked={information.agree}
            onChange={handleInputChange}
          />
          <p>By continuing, I agree to the terms of use and privacy policy</p>
        </div>
      </div>
    </div>
  );
};

export default SignupPage;
