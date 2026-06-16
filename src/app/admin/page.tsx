"use client";

import { useEffect, useRef } from "react";

export default function AdminPage() {
  const loaded = useRef(false);

  useEffect(() => {
    if (loaded.current) return;
    loaded.current = true;

    // Load Decap CMS
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js";
    script.onload = () => {
      console.log("Decap CMS loaded successfully");
    };
    script.onerror = (e) => {
      console.error("Failed to load Decap CMS", e);
    };
    document.body.appendChild(script);
  }, []);

  return (
    <div style={{ display: "flex", justifyContent: "center", alignItems: "center", minHeight: "100vh" }}>
      <p>Loading Content Manager...</p>
    </div>
  );
}
