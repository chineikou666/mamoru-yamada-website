"use client";

import { useEffect } from "react";
import Script from "next/script";

export default function AdminPage() {
  useEffect(() => {
    // Netlify CMS will be loaded via the script tag
    // This page acts as the entry point for the CMS admin
  }, []);

  return (
    <>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="robots" content="noindex, nofollow" />
        <title>Netlify CMS</title>
      </head>
      <body>
        <div id="nc-root">
          {/* Netlify CMS will render here */}
        </div>
        <Script
          src="https://unpkg.com/netlify-cms@^2.0.0/dist/netlify-cms.js"
          strategy="afterInteractive"
        />
      </body>
    </>
  );
}
