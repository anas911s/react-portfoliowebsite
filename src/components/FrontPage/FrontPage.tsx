import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
import { FaGithub, FaLinkedin, FaInstagram } from 'react-icons/fa';


export function FrontPage() {
  const typedElement = useRef(null);

  useEffect(() => {
    const typed = new Typed(typedElement.current, {
      strings: ["Frontend Development", "Backend Development", " Software Development"],
      typeSpeed: 25,
      backSpeed: 25,
      loop: true,
    });

    return () => typed.destroy();
  }, []);

  return (
    <><div
          className="FrontPage"
          style={{
              display: "flex",
              justifyContent: "center",
              backgroundColor: "#f6ffff",
              border: "solid",
              borderColor: "green",
              padding: "30px",
              margin: "auto",
          }}
      >
          <div
              style={{
                  maxWidth: "700px",
                  padding: "5px",
                  marginRight: "350px",
                  border: "solid",
                  borderColor: "black",
              }}
          >
              <h1 style={{ fontSize: "4.5rem", margin: 0, color: "#000", fontWeight: "bold" }}>
                  Hi There,
                  <br />
                  I'm <span style={{ color: "black", fontWeight: 600 }}>Anas</span>{" "}
                  <span style={{ color: "orange", fontWeight: 700 }}>Amhaou</span>
              </h1>
              <h2 style={{ border: "solid", height: "100px", borderColor: "red", marginTop: "10px", fontWeight: "bold", color: "#000", justifyContent: "flex-start" }}>
                  I Am Into <span ref={typedElement} style={{ color: "#3abff8" }}></span>
              </h2>
              <p style={{ marginTop: "1rem", color: "#555" }}>
                  Junior Developer die open staat voor ontwikkeling.
              </p>
              <button
                  style={{
                      backgroundColor: "#3abff8",
                      color: "#1f1f1f",
                      border: "none",
                      padding: "0.75rem 1.5rem",
                      borderRadius: "8px",
                      fontWeight: "bold",
                      marginTop: "5rem",
                      cursor: "pointer",
                  }}
              >
                  Bekijk meer
              </button>

                  <div style={{borderRadius: "50%", backgroundColor: "red", width: "20px", height: "20px",}}><FaGithub /></div>
                  <div style={{borderRadius: "50%", backgroundColor: "red", width: "20px", height: "20px",}}><FaLinkedin /></div>
                  <div style={{borderRadius: "50%", backgroundColor: "red", width: "20px", height: "20px",}}><FaInstagram /></div>
          </div>
      
        <div 
            style={{
                  position: "relative",
                  maxWidth: "800px",
                  padding: "30px",
                  marginRight: "0px",
                  border: "solid",
                  borderColor: "blue"
            }}>
              <div
                  style={{
                      width: "600px",
                      height: "600px",
                      borderRadius: "50%",
                      backgroundColor: "#ffcc00",
                      display: "flex",
                      marginTop: "20px",
                      justifyContent: "center",
                      alignItems: "center",
                      overflow: "hidden",
                      border: "solid",
                      borderColor: "red"
                  }}
              >
                  <img
                      src="/images/anas.png"
                      alt="anas"
                      style={{ width: "150%", marginBottom: "100px"}} />
              </div>
        </div>
        </div></>
  );
}

