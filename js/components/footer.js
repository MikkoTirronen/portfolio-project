export function Footer() {
    return `
    <div class="footer-container">
      <div class="footer-left">
        <h3 class="footer-brand">Mikko Tirronen</h3>
        <p class="footer-description">
          Building clean, modern, and user-focused digital experiences.
        </p>
      </div>

      <nav class="footer-links" aria-label="Quick links">
        <h4 class="footer-title">Quick Links</h4>
        <ul>
          <li><a href="#about">About</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <nav class="footer-socials" aria-label="Social links">
        <h4 class="footer-title">Social</h4>
        <ul>
          <li><a href="#">LinkedIn</a></li>
          <li><a href="#">GitHub</a></li>
          <li><a href="#">Twitter</a></li>
        </ul>
      </nav>

      <div class="footer-bottom">
        <p>© 2025 Mikko Tirronen. All rights reserved.</p>
      </div>
    </div>
  `
}