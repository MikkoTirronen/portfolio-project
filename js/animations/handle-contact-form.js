import { updateCounter } from "./character-counter.js";

export const HandleContactForm = () => {
    document
    .getElementById("contactForm")
    .addEventListener("submit", async function (e) {
      e.preventDefault();

      let valid = true;

      // Reset errors
      document.querySelectorAll(".error").forEach((err) => {
        err.textContent = "";
        err.classList.remove("show");
      });

      const name = document.getElementById("name");
      const email = document.getElementById("email");
    //   const message = document.getElementById("message");

      // Email regex
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

      if (name.value.trim() === "") {
        name.nextElementSibling.textContent = "Name is required.";
        name.nextElementSibling.classList.add("show");
        valid = false;
      }

      if (!emailRegex.test(email.value.trim())) {
        email.nextElementSibling.textContent = "Enter a valid email.";
        email.nextElementSibling.classList.add("show");
        valid = false;
      }

      if (!valid) return;

      const form = document.getElementById("contactForm");
      const success = document.getElementById("successCard");
      const formData = new FormData(form);

      try {
        const response = await fetch(form.action, {
          method: "POST",
          body: formData,
          headers: {
            Accept: "application/json", // Prevent redirect
          },
        });

        if (response.ok) {
          // Fade out form
          form.style.transition = "opacity 0.3s";
          form.style.opacity = "0";

          setTimeout(() => {
            form.style.display = "none";
            success.style.display = "block";
            success.classList.add("show");
            form.reset();
          }, 300);
        } else {
          alert("There was an error submitting the form.");
          console.error("Form submission failed:", response.statusText);
        }
      } catch (error) {
        console.error("Error submitting form:", error);
        alert("There was an error submitting the form.");
      }
    });

  // Handle Close button
  document.getElementById("closeSuccess").addEventListener("click", () => {
    const form = document.getElementById("contactForm");
    const success = document.getElementById("successCard");

    success.classList.remove("show");
    success.style.display = "none";

    form.style.display = "block";
    form.reset();
    updateCounter();
    setTimeout(() => (form.style.opacity = "1"), 10);
  });
}