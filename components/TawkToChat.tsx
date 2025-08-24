"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    // Initialize Tawk_API and Tawk_LoadStart before loading script
    if (typeof window !== "undefined") {
      (window as any).Tawk_API = (window as any).Tawk_API || {};
      (window as any).Tawk_LoadStart = new Date();
      (window as any).Tawk_API.customStyle = {
        visibility: {
          desktop: {
            position: "br",
            xOffset: 20,
            yOffset: 20,
          },
          mobile: {
            position: "br",
            xOffset: 10,
            yOffset: 10,
          },
        },
        widget: {
          color: {
            theme: "#dc2626", // Fire safety red
            launcherText: "#ffffff",
          },
        },
      };
      (window as any).Tawk_API.onLoad = () => {
        (window as any).Tawk_API.setAttributes({
          name: "Fire Safety Expert",
          email: "support@fireguardpro.com",
        });
      };
      (window as any).Tawk_API.onOfflineSubmit = (data: any) => {
        console.log("Fire safety inquiry submitted:", data);
      };
    }

    const script = document.createElement("script");
    const firstScript = document.getElementsByTagName("script")[0];

    script.async = true;
    script.src = `https://embed.tawk.to/${process.env.TWAK_PROPERTY_ID}/${process.env.TWAK_WIDGET_ID}`;
    script.charset = "UTF-8";
    script.setAttribute("crossorigin", "*");

    if (firstScript && firstScript.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    return () => {
      // Cleanup script on component unmount
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript) {
        existingScript.remove();
      }
    };
  }, []);

  return null; // This component doesn't render anything visible
}
