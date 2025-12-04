document.addEventListener("DOMContentLoaded", () => {
  const root = document.documentElement;
  const toggle = document.getElementById("themeToggle");
  if (!toggle) return;

  const saved = localStorage.getItem("siteTheme") || "light";
  root.setAttribute("data-theme", saved);
  toggle.textContent = saved === "dark" ? "☀️" : "🌙";
  toggle.setAttribute("aria-pressed", saved === "dark");

  toggle.addEventListener("click", () => {
    const cur = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
    root.setAttribute("data-theme", cur);
    localStorage.setItem("siteTheme", cur);
    toggle.textContent = cur === "dark" ? "☀️" : "🌙";
    toggle.setAttribute("aria-pressed", cur === "dark");
  });
});
