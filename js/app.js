import { renderComponent } from "./core/render.js";
import { Hero } from "./components/hero.js";
import { About } from "./components/about.js";
import { Skills } from "./components/skills.js";
import { Navbar } from "./components/navbar.js";
import { Projects } from "./components/projects.js";
import { Contact } from "./components/contact.js";
import { Testamonials } from "./components/testamonials.js";
import { Footer } from "./components/footer.js";
import { AddCharacterCounter, updateCounter } from "./animations/character-counter.js";

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

  document
    .getElementById("contactForm")
    .addEventListener("submit", function (e) {
      e.preventDefault();

      let valid = true;

      // Reset errors
      document.querySelectorAll(".error").forEach((err) => {
        err.textContent = "";
        err.classList.remove("show");
      });

      const name = document.getElementById("name");
      const email = document.getElementById("email");
      const message = document.getElementById("message");

      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required.";
        name.nextElementSibling.classList.add("show");
        valid = false;
      }

      if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.textContent = "Enter a valid email.";
        email.nextElementSibling.classList.add("show");
        valid = false;
      }

      if (!valid) return;

      // Fade out form
      const form = document.getElementById("contactForm");
      const success = document.getElementById("successCard");

      form.style.opacity = "0";

      setTimeout(() => {
        form.style.display = "none";
        success.classList.add("show");
        success.style.display = "block";
        form.reset;
      }, 300);
    });

  // Handle Close button
  document.getElementById("closeSuccess").addEventListener("click", () => {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("successCard");

    success.classList.remove("show");
    success.style.display = "none";

    form.style.display = "block";
    form.reset();
    updateCounter();
    setTimeout(() => (form.style.opacity = "1"), 10);
  });
});
