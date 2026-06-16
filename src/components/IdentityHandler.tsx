"use client";

import { useEffect } from "react";

export default function IdentityHandler() {
  useEffect(() => {
    const hash = window.location.hash;
    if (hash && (hash.includes("recovery_token") || hash.includes("invite") || hash.includes("confirmation"))) {
      window.location.href = "/admin/" + hash;
    }
  }, []);

  return null;
}
