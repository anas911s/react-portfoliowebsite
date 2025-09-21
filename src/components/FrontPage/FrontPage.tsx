import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { motion } from "framer-motion";
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
    <section className="frontpage position-relative bg-light py-5" id="home">
      {/* Background layer */}
      <div className="frontpage-bg"></div>

      {/* Motion container (scroll in effect) */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <Container className="position-relative frontpage-box p-5 rounded-4 shadow-lg">
          <Row className="align-items-center flex-lg-nowrap">
            {/* Tekstkolom */}
            <Col md={6} className="text-start mb-5 mb-md-0">
              <h1 className="display-3 fw-bold text-dark">
                Hallo daar, <br />
                Ik ben{" "}
                <span className="fw-semibold text-dark">Anas</span>{" "}
                <span className="fw-bold text-primary">Amhaou</span>
              </h1>

              <h2 className="h3 fw-bold mt-3 text-dark">
                Ik hou van{" "}
                <span ref={typedElement} className="text-info"></span>
              </h2>

              <p className="mt-4 text-secondary">
                Junior ontwikkelaar die openstaat voor groei en nieuwe uitdagingen.
              </p>

              <button className="btn btn-info text-dark fw-bold px-4 py-2 mt-4">
                Bekijk meer
              </button>

              <div className="d-flex gap-3 mt-4">
                <a
                  href="https://github.com/anas911s"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub profiel van Anas"
                  className="social-icon"
                >
                  <FaGithub />
                </a>
                <a
                  href="https://www.linkedin.com/in/anas-amhaou-7806032a7/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn profiel van Anas"
                  className="social-icon"
                >
                  <FaLinkedin />
                </a>
                <a
                  href="https://www.instagram.com/anas.gwn/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram profiel van Anas"
                  className="social-icon"
                >
                  <FaInstagram />
                </a>
              </div>
            </Col>

            <Col md={6} className="text-center">
              <img
                src="/images/dev.png"
                alt="Developer illustration"
                className="img-fluid rounded-4 shadow-sm frontpage-img"
              />
            </Col>
          </Row>
        </Container>
      </motion.div>

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
        .frontpage {
          overflow: hidden;
        }
        /* Full background pattern met animatie */
        .frontpage-bg {
          overflow: hidden;
          position: absolute;
          inset: 0;
          background: url('/images/svg.png') center/cover no-repeat;
          z-index: 0;
          transition: transform 1s ease, filter 0.6s ease;
          opacity: 0.85;
        }
        .frontpage-bg:hover {
          transform: scale(1.05) rotate(1deg);
          filter: brightness(1.1);
        }

        /* Zorg dat content altijd boven ligt */
        .frontpage > .container {
          position: relative;
          z-index: 2;
        }
        .frontpage-box {
          background: rgba(255, 255, 255, 0.63);
          backdrop-filter: blur(1px);
          border: 1px solid rgba(255, 255, 255, 0.3);
        }
        .frontpage-img {
          max-width: 100%;
          height: auto;
          object-fit: cover;
          transition: transform 0.8s ease, filter 0.6s ease;
        }

        .frontpage-img:hover {
          transform: scale(1.01) rotate(-0.3deg);
          filter: brightness(1.05);
        }
      `}</style>
    </section>
  );
}
