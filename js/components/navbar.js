export function Navbar({ children }) {
  return `
          <img
            src="./assets/whitelines-logo.png"
            alt="Mikko Tirronen"
            width="auto"
            height="36"
          />
          <div id="navLinks" class="nav-links" role="menubar" aria-label="Sections">
            <a href="#about" data-link class="active">About</a>
            <a href="#skills" data-link>Skills</a>
            <a href="#projects" data-link>Projects</a>
            <a href="#testamonials" data-link>Testimonials</a>
            <a href="#contact" data-link>Contact</a>
          </div>
          <button id="themeToggle" class="theme-toggle" aria-label="Toggle theme">
          🌙
        </button>
          <button
          class="nav-toggle"
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
