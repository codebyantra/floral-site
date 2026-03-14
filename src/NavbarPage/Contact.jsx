import React, { useState } from "react";
import "./Contact.css";
import contactImg from "../assets/login-flowers.jpg";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("http://localhost:5000/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json"}, 
      body: JSON.stringify(formData),
    });

    const result = await response.json();
    alert(result.message);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrapper">

      <div className="contact-card">

        {/* LEFT IMAGE + INFO */}
        <div className="contact-info">
          <img src={contactImg} alt="flower" />
          <h2>Get In Touch</h2>
          <p>
            We're here to help!  
            Fill out the form and we'll get back to you soon.
          </p>

          <div className="info-item">📧 Floral@gmail.com</div>
          <div className="info-item">📍 New Delhi, India</div>
        </div>

        {/* RIGHT FORM */}
        <div className="contact-form-area">
          <h1>Contact Us</h1>

          <form onSubmit={handleSubmit}>
            <div className="field-row">
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
              />

              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>

            <textarea
              name="message"
              placeholder="Write your message..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>

            <button className="send-btn">Send Message</button>
          </form>
        </div>

      </div>
    </div>
  );
}
