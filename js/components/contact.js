export function Contact() {
  return `
        <h2>Contact</h2>
        <form action="https://formsubmit.co/3d14bd33977bc7783400307772e4d54e" method="POST" id="contactForm">
  
        <!-- Name -->
        <input type="text" name="name" placeholder="Your Name" required />

        <!-- Email -->
        <input type="email" name="email" placeholder="Your Email" required />

        <!-- Message -->
        <textarea name="message" placeholder="Your Message" required></textarea>

        <!-- Hidden Settings -->
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        // <input type="hidden" name="_next" value="http://localhost:5500" />

        <button type="submit">Send Message</button>
        </form>
    `;
}
