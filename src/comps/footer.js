import React from "react";
import "./footer.css";

export default function Footer({ isVisible }) {
    return (
      <div className="footer-div" style = {{ display: isVisible ? "none" : "block" }}>
          <p className="footer-text">
            Made with <span role="img">❤️</span> by Kotanisko
          </p>
      </div>
    );
  }