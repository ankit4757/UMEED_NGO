import React, { useState } from "react";

function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message submitted!");
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div style={{ padding: "60px 20px", minHeight: "80vh" }}>
      <h1 style={{ textAlign: "center", fontSize: "3rem", marginBottom: "30px" }}>Contact Us</h1>
      <form
        onSubmit={handleSubmit}
        style={{ maxWidth: "500px", margin: "0 auto", display: "flex", flexDirection: "column", gap: "20px" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        <input
          type="email"
          name="email"
          placeholder="Your Email"
          value={form.email}
          onChange={handleChange}
          required
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        <textarea
          name="message"
          placeholder="Your Message"
          value={form.message}
          onChange={handleChange}
          required
          rows="5"
          style={{ padding: "10px", fontSize: "1rem" }}
        />
        <button
          type="submit"
          style={{ padding: "15px", fontSize: "1.2rem", backgroundColor: "#388e3c", color: "#fff", border: "none", cursor: "pointer" }}
        >
          Send Message
        </button>
      </form>
    </div>
  );
}

export default Contact;
