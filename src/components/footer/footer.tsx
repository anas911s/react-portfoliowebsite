import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";

export function Footer() {
  return (
    <footer
      className="bg-dark text-light py-4 mt-auto"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
      <div className="container d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Anas Amhaou</p>
        
        <div className="d-flex gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-light fs-4">
            <FaInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
}
