import { updateCounter } from "./character-counter.js";

export const HandleContactForm = () => {
  const form = document.getElementById("contactForm");
  const success = document.getElementById("successCard");
  const closeBtn = document.getElementById("closeSuccess");

  if (!form || !success || !closeBtn) return;

  const nameInput = document.getElementById("name");
  const emailInput = document.getElementById("email");

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const prefersReducedMotion = window.matchMedia(
    "(prefers-reduced-motion: reduce)"
  ).matches;

  /* -----------------------------
     Helper functions
  ----------------------------- */

  const showError = (input, message) => {
    const error = document.getElementById(`${input.id}-error`);
    if (!error) return;

    input.setAttribute("aria-invalid", "true");
    error.textContent = message;
    error.classList.add("show");
  };

  const clearError = (input) => {
    const error = document.getElementById(`${input.id}-error`);
    if (!error) return;

    input.removeAttribute("aria-invalid");
    error.textContent = "";
    error.classList.remove("show");
  };

  const clearAllErrors = () => {
    [nameInput, emailInput].forEach(clearError);
  };

  /* -----------------------------
     Submit handler
  ----------------------------- */

  const handleSubmit = async (e) => {
    e.preventDefault();
    let valid = true;

    clearAllErrors();

    if (nameInput.value.trim() === "") {
      showError(nameInput, "Name is required.");
      valid = false;
    }

    if (!emailRegex.test(emailInput.value.trim())) {
      showError(emailInput, "Enter a valid email address.");
      valid = false;
    }

    if (!valid) {
      const firstInvalid = document.querySelector("[aria-invalid='true']");
      firstInvalid?.focus();
      return;
    }

    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: { Accept: "application/json" }
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      /* -----------------------------
         Success state
      ----------------------------- */

      form.setAttribute("aria-hidden", "true");

      if (!prefersReducedMotion) {
        form.style.transition = "opacity 0.3s ease";
        form.style.opacity = "0";
        setTimeout(() => (form.style.display = "none"), 300);
      } else {
        form.style.display = "none";
      }

      success.hidden = false;
      success.removeAttribute("aria-hidden");
      success.classList.add("show")
      closeBtn.focus();

      form.reset();
      updateCounter();

    } catch (err) {
      alert("There was an error submitting the form. Please try again.");
      console.error(err);
    }
  };

  /* -----------------------------
     Close success handler
  ----------------------------- */

  const handleClose = () => {
    success.hidden = true;
    success.setAttribute("aria-hidden", "true");

    form.style.display = "block";
    form.style.opacity = 1;
    form.removeAttribute("aria-hidden");
    success.classList.remove("show")
    form.reset();
    updateCounter();

    nameInput.focus();
  };

  /* -----------------------------
     Event listeners (safe rebind)
  ----------------------------- */

  form.removeEventListener("submit", handleSubmit);
  closeBtn.removeEventListener("click", handleClose);

  form.addEventListener("submit", handleSubmit);
  closeBtn.addEventListener("click", handleClose);
};
