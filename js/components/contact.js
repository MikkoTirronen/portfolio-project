export function Contact() {
  return `
        <h2>Contact</h2>
        <form action="https://formsubmit.co/YOUR_EMAIL_HERE" method="POST" id="contactForm">
  
        <!-- Name -->
        <input type="text" name="name" placeholder="Your Name" required />

        <!-- Email -->
        <input type="email" name="email" placeholder="Your Email" required />

        <!-- Message -->
        <textarea name="message" placeholder="Your Message" required></textarea>

        <!-- Hidden Settings -->
        <input type="hidden" name="_captcha" value="false" />
        <input type="hidden" name="_template" value="box" />
        <input type="hidden" name="_next" value="https://YOURDOMAIN.com/success.html" />

        <button type="submit">Send Message</button>
        </form>

    `;
}
