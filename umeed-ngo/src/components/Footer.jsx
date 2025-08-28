import React from "react";

function Footer() {
  return (
    <footer style={{ backgroundColor: "#004D40", color: "#fff", padding: "40px 20px" }}>
      <div
        style={{
          maxWidth: "1200px",
          margin: "auto",
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "space-between",
          gap: "20px",
        }}
      >
        {/* About / NGO Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h2 style={{ marginBottom: "15px" }}>Our NGO</h2>
          <p>
            We are committed to helping children and communities through education, health, and social initiatives. Join us in making a difference.
          </p>
        </div>

        {/* Quick Links */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ marginBottom: "15px" }}>Quick Links</h3>
          <ul style={{ listStyle: "none", padding: 0 }}>
            <li><a href="/" style={{ color: "#fff", textDecoration: "none" }}>Home</a></li>
            <li><a href="/projects" style={{ color: "#fff", textDecoration: "none" }}>Projects</a></li>
            <li><a href="/donate" style={{ color: "#fff", textDecoration: "none" }}>Donate</a></li>
            <li><a href="/contact" style={{ color: "#fff", textDecoration: "none" }}>Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div style={{ flex: "1 1 250px" }}>
          <h3 style={{ marginBottom: "15px" }}>Contact Us</h3>
          <p>Email: info@XXXXX.org</p>
          <p>Phone: +91 XXXXXXXXX</p>
          <p>Address: 123 NGO Street, City, Country</p>
        </div>

        {/* Social Media */}
        <div style={{ flex: "1 1 150px" }}>
          <h3 style={{ marginBottom: "15px" }}>Follow Us</h3>
          <div style={{ display: "flex", gap: "10px" }}>
            <a href="#" style={{ color: "#fff" }}>Facebook</a>
            <a href="#" style={{ color: "#fff" }}>Instagram</a>
            <a href="#" style={{ color: "#fff" }}>Twitter</a>
            <a href="#" style={{ color: "#fff" }}>LinkedIn</a>
          </div>
        </div>
      </div>

      <div style={{ textAlign: "center", marginTop: "30px", fontSize: "14px" }}>
        &copy; {new Date().getFullYear()} Our NGO. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
