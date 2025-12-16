import { renderComponent } from "./core/render.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";
import { Skills } from "./components/skills.js";
import { Navbar } from "./components/navbar.js";
import { Projects } from "./components/projects.js";
import { Contact } from "./components/contact.js";
import { Testamonials } from "./components/testamonials.js";
import { Footer } from "./components/footer.js";
import { AddCharacterCounter } from "./animations/character-counter.js";
import { HandleContactForm } from "./animations/handle-contact-form.js";
import { ToggleBurgerMenu } from "./animations/toggle-burger-menu.js";


document.addEventListener("DOMContentLoaded", () => {
  renderComponent("#nav", Navbar);
  renderComponent("#hero", Hero);
  renderComponent("#about", About);
  renderComponent("#skills", Skills);
  renderComponent("#projects", Projects);
  renderComponent("#testamonials", Testamonials);
  renderComponent("#contact", Contact);
  renderComponent("#footer", Footer);

  AddCharacterCounter();
  HandleContactForm();
  ToggleBurgerMenu();
});
