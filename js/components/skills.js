export function Skills() {
  return `
  <h2 id="skills-heading" class="section-title">Skills</h2>
  <p class="section-subtitle">
    Technologies I’ve used in projects and enjoy working with.
  </p>

  <div class="skills-grid">
    <div class="skill-card">
      <h3>Frontend</h3>
      <ul>
        <li><strong>React</strong> – Hooks, component-driven UI</li>
        <li><strong>TypeScript</strong> – Type-safe applications</li>
        <li><strong>JavaScript (ES6+)</strong> – Async patterns</li>
        <li><strong>HTML & CSS/Tailwind</strong> – Responsive, accessible layouts</li>
      </ul>
    </div>

    <div class="skill-card">
      <h3>Backend</h3>
      <ul>
      <li><strong>C# / .NET</strong> – API development, clean architecture, domain driven development, microservices, authentication</li>
      
      <li><strong>Node.js</strong> – REST APIs, authentication</li>
      </ul>
      </div>
      
      <div class="skill-card">
      <h3>Databases</h3>
      <ul>
      <li><strong>PostgreSQL</strong> – Relational design, queries</li>
      <li><strong>MongoDB</strong> – Document modeling</li>
      </ul>
      </div>
      
      <div class="skill-card">
      <h3>Cloud & Tools</h3>
      <ul>
        <li><strong>Queues</strong> – RabbitMQ, Azure-Service Bus</li>
        <li><strong>Azure</strong> – App Services, deployments</li>
        <li><strong>Git & GitHub</strong> – Version control, PRs</li>
      </ul>
    </div>
  </div>
        `;
}
