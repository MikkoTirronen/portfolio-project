import { renderComponent } from "./core/render.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";
import { Skills } from "./components/skills.js";
import { Navbar } from "./components/navbar.js";
import { Projects } from "./components/projects.js";
import { Contact } from "./components/contact.js";

document.addEventListener("DOMContentLoaded", () => {
 renderComponent("#nav", Navbar)
  renderComponent("#hero", Hero);
  renderComponent("#about", About);
  renderComponent("#skills", Skills);
  renderComponent("#projects", Projects);
  renderComponent("#contact", Contact);
});
