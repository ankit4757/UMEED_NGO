import React from "react";

function Projects() {
  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#f0f8ff" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Our Projects</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "20px" }}>
        <div style={{ width: "300px", padding: "20px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h3>Project 1</h3>
          <p>Short description of Project 1.</p>
        </div>
        <div style={{ width: "300px", padding: "20px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h3>Project 2</h3>
          <p>Short description of Project 2.</p>
        </div>
        <div style={{ width: "300px", padding: "20px", backgroundColor: "#fff", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h3>Project 3</h3>
          <p>Short description of Project 3.</p>
        </div>
      </div>
    </section>
  );
}

export default Projects;
