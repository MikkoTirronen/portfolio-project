export function Contact() {
  return `
  <h2>Contact Me</h2>
    <div id="contactWrapper">
  <form id="contactForm" novalidate>
    <div class="field">
      <label>Name</label>
      <input type="text" id="name">
      <span class="error"></span>
    </div>

    <div class="field">
      <label>Email</label>
      <input type="email" id="email">
      <span class="error"></span>
    </div>

    <div class="field">
  <label>Message (optional)</label>
  <textarea id="message" maxlength="800"></textarea>
  <div class="char-counter" id="messageCounter">0 / 800</div>
  <span class="error"></span>
</div>

    <button type="submit">Send</button>
  </form>

  <!-- Hidden success card -->
  <div id="successCard">
    <h2>Message Received</h2>
    <p>Your message has been successfully sent.  
       I’ll get back to you as soon as possible.</p>

    <button id="closeSuccess">Close</button>
  </div>
</div>

    `;
}

// <h2>Contact</h2>
//         <form action="https://formsubmit.co/3d14bd33977bc7783400307772e4d54e" method="POST" id="contactForm">

//         <!-- Name -->
//         <input type="text" name="name" placeholder="Your Name" required />

//         <!-- Email -->
//         <input type="email" name="email" placeholder="Your Email" required />

//         <!-- Message -->
//         <textarea name="message" placeholder="Your Message" required></textarea>

//         <!-- Hidden Settings -->
//         <input type="hidden" name="_captcha" value="false" />
//         <input type="hidden" name="_template" value="box" />
//         // <input type="hidden" name="_next" value="http://localhost:5500" />

//         <button type="submit">Send Message</button>
//         </form>
