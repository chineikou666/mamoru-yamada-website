"use client";

import { useEffect } from "react";

export default function StudioPage() {
  useEffect(() => {
    // Redirect to Sanity's hosted Studio
    window.location.href = "https://mamoru-yamada.sanity.studio/";
  }, []);

  return (
    <div style={{ 
      minHeight: "100vh", 
      display: "flex", 
      alignItems: "center", 
      justifyContent: "center",
      flexDirection: "column",
      gap: "20px"
    }}>
      <h2>Loading Sanity Studio...</h2>
      <p>If not redirected, <a href="https://mamoru-yamada.sanity.studio/">click here</a></p>
    </div>
  );
}
