export function Navbar() {
  return `
          <img
            src="/assets/favicon-cropped.png"
            alt="Mikko Tirronen"
            width="auto"
            height="36"
          />
        <div class="nav-links" role="menubar" aria-label="Sections">
          <a href="#about" data-link class="active">About</a>
          <a href="#skills" data-link>Skills</a>
          <a href="#projects" data-link>Projects</a>
          <a href="#contact" data-link>Contact</a>
        </div>
        `;
}

        // <button
        //   id="themeToggle"
        //   class="theme-toggle"
        //   aria-label="Toggle theme"
        // >
        //   🌙
        // </button>