import { renderComponent } from "./core/render.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";

document.addEventListener("DOMContentLoaded", () => {
  renderComponent("#hero", Hero);
  renderComponent("#about", About);
});
