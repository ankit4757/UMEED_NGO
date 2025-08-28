import React from "react";

function Donate() {
  return (
    <section style={{ padding: "100px 20px", backgroundColor: "#d1f7d6" }}>
      <h2 style={{ textAlign: "center", marginBottom: "40px" }}>Support Us / Donate</h2>
      <div style={{ maxWidth: "600px", margin: "0 auto", textAlign: "center" }}>
        <p>Your support helps us continue our projects and initiatives.</p>
        <button 
          style={{
            padding: "12px 30px",
            fontSize: "16px",
            backgroundColor: "#28a745",
            color: "#fff",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer"
          }}
        >
          Donate Now
        </button>
      </div>
    </section>
  );
}

export default Donate;
