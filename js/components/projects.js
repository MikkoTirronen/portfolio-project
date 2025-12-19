export function Projects() {
  return `
  
    <h2 id="projects-heading" class="section-title">Projects</h2>
    <p class="section-subtitle">
      Below are a few projects in various tech stacks that challenged my abilities as a software developer.
    </p>
  
  <div class="projects-container">
    <article class="project-card">
      <h3>Hotel Booking System</h3>
      <div class="project-icons">
        <img src="./assets/icons/csharp.png" alt="C# icon" title="C#.net"/>
        <img src="./assets/icons/react.png" alt="React icon" title="React"/>
      </div>
      <p>
        A full-stack web application for managing hotel reservations and guest information.
      </p>
      <div class="project-links">
        <span class="btn disabled" aria-disabled="true">Live</span>
        <a href="#" target="_blank" class="btn">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <h3>E-Commerce Platform</h3>
      <div class="project-icons">
        <img src="./assets/icons/csharp.png" alt="C# icon" title="C#.net"/>
        <img src="./assets/icons/react.png" alt="React icon" title="React"/>
      </div>
      <p>
        A scalable e-commerce platform with user authentication and product management.
      </p>
      <div class="project-links">
        <span class="btn disabled" aria-disabled="true">Live</span>
        <a href="#" target="_blank" class="btn">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <h3>Chat Application</h3>
      <div class="project-icons">
        <img src="./assets/icons/next.png" alt="Next.js icon" title="Next.js" />
        <img src="./assets/icons/firestore.png" alt="Firestore icon" title="Firestore"/>
      </div>
      <p>
        A chat application using Gmail authentication with public and private chat functionality.
      </p>
      <div class="project-links">
        <span class="btn disabled" aria-disabled="true">Live</span>
        <a href="#" target="_blank" class="btn">GitHub</a>
      </div>
    </article>

    <article class="project-card">
      <h3>Order System</h3>
      <div class="project-icons">
        <img src="./assets/icons/java.svg" alt="Java icon" title="Java"/>
        <img src="./assets/icons/react.png" alt="React icon" title="React"/>
      </div>
      <p>
        A system for managing orders for a window blinder manufacturing company.
      </p>
      <div class="project-links">
        <span class="btn disabled" aria-disabled="true">Live</span>
        <a href="#" target="_blank" class="btn">GitHub</a>
      </div>
    </article>
  </div>
  `;
}
