import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <div style={{
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      height: "100vh",
      backgroundColor: "#f8f9fa",
      textAlign: "center"
    }}>
      <h1 style={{ fontSize: "80px", marginBottom: "10px" }}>404</h1>
      <h2>Oops! Page Not Found</h2>
      <p>The page you are looking for doesn’t exist or has been moved.</p>
      <Link 
        to="/" 
        style={{
          marginTop: "20px",
          padding: "10px 20px",
          backgroundColor: "#28a745",
          color: "white",
          borderRadius: "8px",
          textDecoration: "none"
        }}
      >
        Go Back Home
      </Link>
    </div>
  );
}
