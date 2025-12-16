//About inner section component
export function About() {
  return `
        <div class="about-text">
            <h2>About</h2>
            <div class="about-container">
                <div class="about-photo">
                    <img src="./assets/profile-square.png" alt="Profile photo" />
                </div>
                <div>
                    <p>
                        Hi — I build web apps that are pragmatic and visually
                        considerate. I enjoy working across stacks, designing clean
                        APIs, and adding small creative flourishes on the frontend. My
                        current interests: generative art, smooth UX and resilient
                        backend patterns.
                    </p>
                    <p class="">
                        This site showcases a few projects and experiments — the
                        generative background is a small creative playground I use to
                        test ideas.
                    </p>
                    <div class="button-container">
                        <a href="./assets/coming-soon.pdf" download>
                            <button type="button" class="btn">
                                Download CV
                            </button>
                        </a>
                    </div>
                </div>
            </div>
        </div>
    `;
}
