//About inner section component
export function About() {
  return `
    <div class="about-text">
      <h2 id="about-heading">About</h2>

      <div class="about-container">
        <div class="about-photo">
          <img
            src="./assets/profile-square.png"
            alt="Portrait of Mikko Tirronen"
            width="300"
            height="300"
          />
        </div>

        <div class="about-text-container">
          <p>
            Hi — I build web apps that are pragmatic and visually
            considerate. I enjoy working across stacks, designing clean
            APIs, and adding small creative flourishes on the frontend. My
            current interests: generative art, smooth UX and resilient
            backend patterns.
          </p>

          <p>
            This site showcases a few projects and experiments — the
            generative background is a small creative playground I use to
            test ideas.
          </p>

          <div class="button-container" role="group" aria-label="Downloads">
            <a
              id="download-button"
              href="./assets/coming-soon.pdf"
              download
              class="btn"
            >
              Download CV
            </a>
          </div>
        </div>
      </div>
    </div>
  `;
}
