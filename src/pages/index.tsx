import React from "react";
import { FrontPage } from "../components/FrontPage/FrontPage.tsx";
import { Navigation } from "../components/navigation/navbar.tsx";
import { Footer } from "../components/footer/footer.tsx";

export function Index() {
  return (
    
    <div
      className="Index"
      style={{
        backgroundColor: '#f5f5f5',
        color: 'white',
        minHeight: '100vh',
        fontFamily: 'Poppins, sans-serif',
      }}
    >
    <Navigation />

    <FrontPage />
    <Footer />

    </div>
  );
}
