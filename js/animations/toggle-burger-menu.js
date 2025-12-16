export const ToggleBurgerMenu = () => {
  const toggle = document.querySelector(".nav-toggle");
  const navLinks = document.getElementById("navLinks");

  toggle.addEventListener("click", () => {
    const isOpen = navLinks.classList.toggle("open");
    toggle.setAttribute("aria-expanded", isOpen);
  });
};
