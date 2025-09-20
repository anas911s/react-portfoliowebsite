import React, {useEffect} from "react";
import { FrontPage } from "../components/FrontPage/FrontPage.tsx";
import { Navigation } from "../components/navigation/navbar.tsx";
import { Footer } from "../components/footer/footer.tsx";

export function Index() {

  useEffect(() => {
    document.title = "Anas Amhaou";
    
    const link = document.querySelector("link[rel~='icon']") as HTMLLinkElement | null;;
    if (link) {
      link.href = "/favicon.ico";
    }
  }, []);

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
    <div
      className="d-flex flex-column min-vh-100"
      style={{ fontFamily: "Poppins, sans-serif" }}
    >
    <Navigation />

    <main className="flex-grow-1 pt-5">
      <FrontPage />
    </main>
      <Footer />
    </div>

    </div>
  );
}
