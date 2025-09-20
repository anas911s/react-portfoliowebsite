import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaInstagram } from "react-icons/fa";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function FrontPage() {
  const typedElement = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Development", "Backend Development", "Software Development"],
      typeSpeed: 40,
      backSpeed: 25,
      loop: true,
    });
    return () => typed.destroy();
  }, []);

  return (
    <section className="frontpage bg-light py-5" id="home">
      <Container>
        <Row className="align-items-center">
          {/* Left Side: Text */}
          <Col md={6} className="text-start mb-5 mb-md-0">
            <h1 className="display-3 fw-bold text-dark">
              Hi There, <br />
              I'm{" "}
              <span className="fw-semibold text-dark">Anas</span>{" "}
              <span className="fw-bold text-primary">Amhaou</span>
            </h1>

            <h2 className="h3 fw-bold mt-3 text-dark">
              I am into{" "}
              <span ref={typedElement} className="text-info"></span>
            </h2>

            <p className="mt-4 text-secondary">
              Junior Developer die open staat voor ontwikkeling.
            </p>

            <button className="btn btn-info text-dark fw-bold px-4 py-2 mt-4">
              Bekijk meer
            </button>

            {/* Social Icons */}
            <div className="d-flex gap-3 mt-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaGithub />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaLinkedin />
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="social-icon">
                <FaInstagram />
              </a>
            </div>
          </Col>

          {/* Right Side: Image */}
          <Col md={6} className="text-center">
            <div className="profile-circle mx-auto">
              <img
                src="/images/anas.png"
                alt="anas"
                className="img-fluid"
              />
            </div>
          </Col>
        </Row>
      </Container>

      {/* Extra styling via CSS */}
      <style>{`
        .social-icon {
          background-color: #ff5722;
          color: white;
          border-radius: 50%;
          display: flex;
          justify-content: center;
          align-items: center;
          width: 45px;
          height: 45px;
          font-size: 1.25rem;
          transition: background 0.3s ease;
        }
        .social-icon:hover {
          background-color: #3abff8;
        }
        .profile-circle {
          width: 320px;
          height: 320px;
          border-radius: 50%;
          background-color: #ffcc00;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden;
          box-shadow: 0 0 25px rgba(0,0,0,0.15);
        }
        .profile-circle img {
          width: 120%;
          object-fit: cover;
        }
      `}</style>
    </section>
  );
}
