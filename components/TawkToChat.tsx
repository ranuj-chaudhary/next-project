"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    const onLoad = () => {
      const script = document.createElement("script");
      script.async = true;
      script.src = `https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}`;
      script.charset = "UTF-8";
      script.setAttribute("crossorigin", "*");
      document.body.appendChild(script);
    };

    // Run only after full page load
    window.addEventListener("load", onLoad);

    return () => {
      window.removeEventListener("load", onLoad);

      // Cleanup if component unmounts
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // no UI
}
