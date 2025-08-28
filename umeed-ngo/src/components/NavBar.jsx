import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function NavBar({ scrollRefs }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Styles
  const navStyle = { backgroundColor: "#dce7e5ff", position: "sticky", top: 0, zIndex: 1000 };
  const containerStyle = { maxWidth: "1200px", margin: "auto", padding: "12px 20px", display: "flex", justifyContent: "space-between", alignItems: "center" };
  const logoStyle = { height: "50px" };
  const menuStyle = {
    listStyle: "none",
    display: isMobile ? (menuOpen ? "flex" : "none") : "flex",
    flexDirection: isMobile ? "column" : "row",
    position: isMobile ? "absolute" : "static",
    top: isMobile ? "70px" : "auto",
    right: 0,
    background: isMobile ? "#dfebe9ff" : "transparent",
    width: isMobile ? "200px" : "auto",
    margin: 0,
    padding: isMobile ? "15px" : 0,
    borderRadius: "8px",
    boxShadow: isMobile ? "0 2px 8px rgba(0,0,0,0.3)" : "none",
    alignItems: isMobile ? "flex-start" : "center",
  };
  const menuItemStyle = { margin: isMobile ? "10px 0" : "0 0 0 18px" };
  const linkStyle = { textDecoration: "none", color: "black", fontSize: "16px", fontWeight: 600, padding: "8px 12px", display: "block", borderRadius: "4px", cursor: "pointer" };
  const linkHover = { backgroundColor: "#004D40", color: "white" };

  // HoverLink component
  const HoverLink = ({ children, onClick }) => {
    const [hovered, setHovered] = useState(false);
    return (
      <div
        onClick={onClick}
        style={hovered ? { ...linkStyle, ...linkHover } : linkStyle}
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        {children}
      </div>
    );
  };

  // Hamburger bars for mobile
  const toggleStyle = { display: isMobile ? "flex" : "none", flexDirection: "column", cursor: "pointer" };
  const barStyle = { height: "3px", width: "25px", background: "black", margin: "4px 0", transition: "0.3s" };

  return (
    <nav style={navStyle}>
      <div style={containerStyle}>
        <Link to="/">
          <img src="/logo.png" alt="NGO Logo" style={logoStyle} />
        </Link>

        <div style={toggleStyle} onClick={() => setMenuOpen(!menuOpen)}>
          <span style={barStyle}></span>
          <span style={barStyle}></span>
          <span style={barStyle}></span>
        </div>

        <ul style={menuStyle}>
          <li style={menuItemStyle}>
            <HoverLink onClick={() => scrollRefs.home && scrollRefs.home.current.scrollIntoView({ behavior: "smooth" })}>Home</HoverLink>
          </li>
          <li style={menuItemStyle}>
            <HoverLink onClick={() => scrollRefs.about && scrollRefs.about.current.scrollIntoView({ behavior: "smooth" })}>About</HoverLink>
          </li>
          <li style={menuItemStyle}>
            <HoverLink onClick={() => scrollRefs.projects && scrollRefs.projects.current.scrollIntoView({ behavior: "smooth" })}>Projects</HoverLink>
          </li>
          <li style={menuItemStyle}>
            <HoverLink onClick={() => scrollRefs.donate && scrollRefs.donate.current.scrollIntoView({ behavior: "smooth" })}>Donate</HoverLink>
          </li>
          <li style={menuItemStyle}>
            <HoverLink onClick={() => scrollRefs.contact && scrollRefs.contact.current.scrollIntoView({ behavior: "smooth" })}>Contact</HoverLink>
            
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
