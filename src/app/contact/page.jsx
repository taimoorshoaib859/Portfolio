"use client";

import React, { useState } from "react";
import styles from "./EmialMe.module.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        alert("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          message: "",
        });
      } else {
        alert(data.message);
      }
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
  };

  return (
    <section className={styles.contact}>
      <div className={styles.glow}></div>

      <div className={styles.container}>
        <div className={styles.left}>
          <span className={styles.label}>LET'S WORK TOGETHER</span>

          <h1>
            Have a project
            <span> in mind?</span>
          </h1>

          <p>
            Tell me a little about your project and I'll get back to you as soon
            as possible.
          </p>

          <div className={styles.email}>
            <span>EMAIL</span>
            <a href="mailto:your@email.com">taimoorshoaib456@gmail.com</a>
          </div>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <div className={styles.inputGroup}>
            <label htmlFor="name">Your Name</label>

            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="email">Your Email</label>

            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className={styles.inputGroup}>
            <label htmlFor="message">Tell Me About Your Project</label>

            <textarea
              id="message"
              name="message"
              placeholder="I'd like to build..."
              rows="5"
              value={formData.message}
              onChange={handleChange}
              required
            ></textarea>
          </div>

          <button type="submit" className={styles.submit}>
            Send Message
            <span>→</span>
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
