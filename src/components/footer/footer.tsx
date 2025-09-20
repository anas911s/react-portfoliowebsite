import React from "react";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "react-bootstrap/Container";

export function Footer() {
  return (
    <footer className="bg-dark text-light py-4 mt-auto">
      <Container className="d-flex flex-column flex-md-row justify-content-between align-items-center">
        <p className="mb-2 mb-md-0">&copy; {new Date().getFullYear()} Anas Amhaou</p>

        <div className="d-flex gap-3">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
            <FaGithub />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
            <FaLinkedin />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon-footer">
            <FaInstagram />
          </a>
        </div>
      </Container>

      <style>{`
        .social-icon-footer {
          background-color: #3abff8;
          color: #1f1f1f;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 40px;
          height: 40px;
          font-size: 1.2rem;
          transition: background 0.3s ease;
        }
        .social-icon-footer:hover {
          background-color: #ff5722;
          color: white;
        }
      `}</style>
    </footer>
  );
}
