"use client";

import { useEffect } from "react";

export default function TawkToChat() {
  useEffect(() => {
    if (typeof window === "undefined") return;

    let timeoutId: NodeJS.Timeout;

    const loadTawk = () => {
      timeoutId = setTimeout(() => {
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

        const script = document.createElement("script");
        script.async = true;
        script.src = `https://embed.tawk.to/${process.env.NEXT_PUBLIC_TAWK_PROPERTY_ID}/${process.env.NEXT_PUBLIC_TAWK_WIDGET_ID}`;
        script.charset = "UTF-8";
        script.setAttribute("crossorigin", "*");

        const firstScript = document.getElementsByTagName("script")[0];
        if (firstScript && firstScript.parentNode) {
          firstScript.parentNode.insertBefore(script, firstScript);
        }
      }, 5000); // delay by 5s
    };

    if (document.readyState === "complete") {
      loadTawk();
    } else {
      window.addEventListener("load", loadTawk);
    }

    return () => {
      clearTimeout(timeoutId); // ✅ prevent callback if unmounted
      window.removeEventListener("load", loadTawk);
      const existingScript = document.querySelector('script[src*="tawk.to"]');
      if (existingScript) existingScript.remove();
    };
  }, []);

  return null;
}
