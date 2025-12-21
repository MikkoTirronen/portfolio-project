export function Contact() {
  return `
    <h2 id="contact-heading">Contact Me</h2>
    <p class="section-subtitle">Interested in working together or discussing a project? Use the form below to email me or alternatively through social media.</p>
    <div id="contactWrapper">
      <form
        id="contactForm"
        action="https://formsubmit.co/3d14bd33977bc7783400307772e4d54e"
        method="POST"
        novalidate
        aria-labelledby="contact-heading"
      >
        <input type="hidden" name="_captcha" value="false">

        <div class="field">
          <label for="name">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            autocomplete="name"
            aria-describedby="name-error"
            placeholder="Mikko Tirronen"
          >
          <span class="error" id="name-error" aria-live="polite"></span>
        </div>

        <div class="field">
          <label for="email">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            autocomplete="email"
            aria-describedby="email-error"
            placeholder="fake@email.com"
          >
          <span class="error" id="email-error" aria-live="polite"></span>
        </div>

        <div class="field">
          <label for="message">Message (optional)</label>
          <textarea
            id="message"
            name="message"
            maxlength="800"
            aria-describedby="messageCounter message-error"
            placeholder="Hey, lets get in contact!"
          ></textarea>

          <div
            class="char-counter"
            id="messageCounter"
            aria-live="polite"
          >
            0 / 800
          </div>

          <span class="error" id="message-error" aria-live="polite"></span>
        </div>

        <button class="btn" type="submit">Send</button>
      </form>

      <!-- Success message -->
      <div
        id="successCard"
        role="alert"
        aria-labelledby="success-heading"
        hidden
      >
        <h3 id="success-heading">Message Received</h3>
        <p>
          Your message has been successfully sent.
          I’ll get back to you as soon as possible.
        </p>

        <button class="btn" id="closeSuccess">
          Close
        </button>
      </div>
    </div>
  `;
}
