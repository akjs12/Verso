/* =========================================================================
   theme.js — Verso Blog: dark / light mode
   Applies the saved (or system-preferred) theme as early as possible to
   avoid a flash of the wrong theme, then wires up the toggle button.
   ========================================================================= */

(function () {
  "use strict";

  const STORAGE_KEY = "verso_theme";

  /** Apply a theme value ("dark" | "light") to the <html> element. */
  function applyTheme(theme) {
    document.documentElement.setAttribute("data-theme", theme);
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.setAttribute("aria-pressed", String(theme === "dark"));
      btn.setAttribute("title", theme === "dark" ? "Switch to light mode" : "Switch to dark mode");
    });
    const meta = document.querySelector('meta[name="theme-color"]');
    if (meta) meta.setAttribute("content", theme === "dark" ? "#14130F" : "#F6F2E9");
  }

  /** Determine the initial theme: saved preference, else system preference. */
  function getInitialTheme() {
    const saved = localStorage.getItem(STORAGE_KEY);
    if (saved === "dark" || saved === "light") return saved;
    return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
  }

  // Apply immediately (this script is loaded in <head> to avoid theme flash).
  applyTheme(getInitialTheme());

  document.addEventListener("DOMContentLoaded", () => {
    document.querySelectorAll(".theme-toggle").forEach((btn) => {
      btn.addEventListener("click", () => {
        const current = document.documentElement.getAttribute("data-theme");
        const next = current === "dark" ? "light" : "dark";
        applyTheme(next);
        localStorage.setItem(STORAGE_KEY, next);
      });
    });

    // Keep in sync with system changes if the user hasn't set an explicit choice.
    window.matchMedia("(prefers-color-scheme: dark)").addEventListener("change", (e) => {
      if (!localStorage.getItem(STORAGE_KEY)) {
        applyTheme(e.matches ? "dark" : "light");
      }
    });
  });
})();
