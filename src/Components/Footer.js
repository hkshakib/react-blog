import React, { useState } from "react";
import "../Styles/Footer.css";

const Footer = () => {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div className="Footer">
      <span className="footer-logo">ReactiFy</span>

      <div
        className={`footer-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="footer-bar"></div>
      </div>
    </div>
  );
};
export default Footer;
