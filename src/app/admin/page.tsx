"use client";

import { useEffect, useRef } from "react";

export default function AdminPage() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Load Decap CMS with config
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js";
    script.onload = () => {
      console.log("Decap CMS loaded successfully");
    };
    script.onerror = (e) => {
      console.error("Failed to load Decap CMS", e);
      document.getElementById("nc-root")!.innerHTML = "<p>Failed to load CMS. Please refresh the page.</p>";
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div id="nc-root" style={{ minHeight: "100vh" }}>
      <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh", flexDirection: "column", gap: "1rem" }}>
        <div style={{ width: "40px", height: "40px", border: "3px solid #f3f3f3", borderTop: "3px solid #3498db", borderRadius: "50%", animation: "spin 1s linear infinite" }}></div>
        <p style={{ color: "#666", fontSize: "14px" }}>Loading Content Manager...</p>
        <style>{`@keyframes spin { 0% { transform: rotate(0deg); } 100% { transform: rotate(360deg); } }`}</style>
      </div>
    </div>
  );
}
