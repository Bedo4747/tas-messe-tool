"use client";
import { useEffect } from "react";

export default function HideDevBadge() {
  useEffect(() => {
    const hide = () => {
      const selectors = [
        "nextjs-portal",
        "#nextjs-devtools",
        "#nextjs-dev-overlay",
        "div[data-nextjs-devtools]",
        'button[aria-label*="Next.js"]',
      ];
      selectors.forEach((sel) => {
        document.querySelectorAll<HTMLElement>(sel).forEach((el) => {
          el.style.display = "none";
        });
      });
      // Fallback: fixe Elemente unten links ausblenden, die nur ein 'N' anzeigen
      document.querySelectorAll<HTMLElement>("div,button").forEach((el) => {
        const style = getComputedStyle(el);
        if (
          style.position === "fixed" &&
          style.left === "0px" &&
          style.bottom === "0px" &&
          (el.textContent?.trim() === "N" || el.title?.toLowerCase().includes("next"))
        ) {
          el.style.display = "none";
        }
      });
    };
    hide();
    const id = setInterval(hide, 500);
    return () => clearInterval(id);
  }, []);
  return null;
}



