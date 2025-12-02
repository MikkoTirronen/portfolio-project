import { renderComponent } from "./core/render.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";
import { Skills } from "./components/skills.js";

document.addEventListener("DOMContentLoaded", () => {
  renderComponent("#hero", Hero);
  renderComponent("#about", About);
  renderComponent("#skills", Skills);
});
