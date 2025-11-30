import { renderComponent } from "./core/render.js";
import { Hero } from "./components/hero.js";

document.addEventListener("DOMContentLoaded", () => {
  renderComponent("#hero", Hero);
});
