"use client";

import { useEffect } from "react";

export default function AdminPage() {
  useEffect(() => {
    // Load Decap CMS dynamically on client side
    const script = document.createElement("script");
    script.src = "https://unpkg.com/decap-cms@^2.0.0/dist/decap-cms.js";
    script.onload = () => {
      console.log("Decap CMS loaded");
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div>
      <h1>Loading Content Manager...</h1>
    </div>
  );
}
