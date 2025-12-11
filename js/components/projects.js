export function Projects() {
  const projects = [
    {
      title: "Hotel Booking System",
      description:
        "A full-stack web application for managing hotel reservations and guest information.",
      icons: ["./assets/icons/csharp.png", "./assets/icons/react.png"],
      live: "#",
      github: "#",
    },
    {
      title: "E-Commerce Platform",
      description:
        "A scalable e-commerce platform with user authentication and product management.",
      icons: ["./assets/icons/csharp.png", "./assets/icons/react.png"],
      live: "#",
      github: "#",
    },
    {
      title: "Chat Application",
      description:
        "A chat application using Gmail authentication with public and private chat functionality.",
      icons: ["./assets/icons/next.png", "./assets/icons/firestore.png"],
      live: "#",
      github: "#",
    },
    {
      title: "Window Blinder Manufacturer Order System",
      description:
        "A system for managing orders for a window blinder manufacturing company.",
      icons: ["./assets/icons/java.svg", "./assets/icons/react.png"],
      live: "#",
      github: "#",
    },
  ];


 return `
  <h2>Projects</h2>
  <div class="projects-container">
    ${projects
      .map(
        (project) => `
        <div class="project-card">
            <h3>${project.title}</h3>
            <div class="project-icons">
                ${project.icons.map((icon) => `<img src="${icon}" />`).join("")}
            </div>
            <p>${project.description}</p>
            <div>
                <button onclick="window.open('${project.live}', '_blank')" disabled>Live</button>
                <button onclick="window.open('${project.github}', '_blank')">Github</button>
            </div>
        </div>
      `
      )
      .join("")}
  </div>
`;
}
