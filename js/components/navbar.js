export function Navbar({ children }) {
  return `
          <img
            id="logo"
            src="./assets/no-margin.png"
            alt="Mikko Tirronen"
            width="auto"
            height="36"
          />
          <img id="darklogo" src="./assets/no-margin-dark.png" alt="Mikko Tirronen" width="auto" height="36" />
          <div id="navLinks" class="nav-links" role="menubar" aria-label="Sections">
            <a href="#about" data-link class="active" role="menuitem">About</a>
            <a href="#skills" data-link role="menuitem">Skills</a>
            <a href="#projects" data-link role="menuitem">Projects</a>
            <a href="#testimonials" data-link role="menuitem">Testimonials</a>
            <a href="#contact" data-link role="menuitem">Contact</a>
          </div>
          <button id="themeToggle" class="theme-toggle toggle-hover" aria-label="Toggle theme">
          🌙
        </button>
          <button
          class="nav-toggle btn"
          aria-label="Toggle navigation"
          aria-expanded="false"
          aria-controls="navLinks"
          >
            ☰
        </button>
        `;
}

// <button
//   id="themeToggle"
//   class="theme-toggle"
//   aria-label="Toggle theme"
// >
//   🌙
// </button>
