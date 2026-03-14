import React, { useState } from "react";
import "./UserProfile.css";
import loginFlowers from "../assets/login-flowers.jpg";

// Firebase
import { auth, googleProvider } from "../context/firebase";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signInWithPopup,
} from "firebase/auth";

export default function UserProfile() {
  const [mode, setMode] = useState("login"); // login OR signup
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  // LOGIN FUNCTION
  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await signInWithEmailAndPassword(auth, email, password);
      alert("Login Successful!");
    } catch (err) {
      setError(err.message);
    }
  };

  // SIGNUP FUNCTION
  const handleSignup = async (e) => {
    e.preventDefault();
    setError("");

    try {
      await createUserWithEmailAndPassword(auth, email, password);
      alert("Account Created Successfully!");
      setMode("login");
    } catch (err) {
      setError(err.message);
    }
  };

  // GOOGLE LOGIN
  const handleGoogleLogin = async () => {
    try {
      await signInWithPopup(auth, googleProvider);
      alert("Logged in with Google!");
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="login-page">
      {/* LEFT IMAGE SECTION */}
      <div className="left-section">
        <img src={loginFlowers} alt="login" className="astro-img" />
      </div>

      {/* RIGHT FORM SECTION */}
      <div className="right-section">
        <div className="login-box">

          <h1>{mode === "login" ? "Welcome Back" : "Create Account"}</h1>
          <p className="subtitle">
            {mode === "login"
              ? "Login to your account"
              : "Sign up and start your journey"}
          </p>

          {error && <p className="error">{error}</p>}

          <form onSubmit={mode === "login" ? handleLogin : handleSignup}>
            <label>Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />

            <label>Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />

            <button className="login-btn">
              {mode === "login" ? "Login" : "Sign Up"}
            </button>
          </form>

          {/* GOOGLE LOGIN ONLY ON LOGIN MODE */}
          {mode === "login" && (
            <div className="social-login">
              <button className="google-btn" onClick={handleGoogleLogin}>
                Google
              </button>
              <button className="fb-btn">Facebook</button>
            </div>
          )}

          <p className="signup-text">
            {mode === "login" ? (
              <>
                New User?{" "}
                <a onClick={() => setMode("signup")}>Create an account</a>
              </>
            ) : (
              <>
                Already have an account?{" "}
                <a onClick={() => setMode("login")}>Login here</a>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  );
}
