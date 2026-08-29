/* =========================================================================
   contact.js — Verso Blog: contact form validation
   Fully client-side validation (no backend). Shows inline error messages
   and a success toast + confirmation state on valid submit.
   ========================================================================= */

(function () {
  "use strict";

  document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".contact-form");
    if (!form) return;

    const fields = {
      name: { el: form.querySelector("#cf-name"), validate: (v) => v.trim().length >= 2, message: "Please enter your full name (2+ characters)." },
      email: { el: form.querySelector("#cf-email"), validate: (v) => /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v), message: "Please enter a valid email address." },
      subject: { el: form.querySelector("#cf-subject"), validate: (v) => v.trim().length >= 3, message: "Please enter a subject." },
      message: { el: form.querySelector("#cf-message"), validate: (v) => v.trim().length >= 20, message: "Your message should be at least 20 characters." }
    };

    // Live character counter for the message field
    const counter = form.querySelector(".char-counter");
    if (counter && fields.message.el) {
      fields.message.el.addEventListener("input", () => {
        counter.textContent = `${fields.message.el.value.length} characters`;
      });
    }

    // Validate a single field and toggle its error state
    function validateField(key) {
      const field = fields[key];
      const value = field.el.value;
      const isValid = field.validate(value);
      const errorEl = form.querySelector(`[data-error-for="${key}"]`);
      field.el.classList.toggle("is-invalid", !isValid);
      field.el.setAttribute("aria-invalid", String(!isValid));
      if (errorEl) errorEl.textContent = isValid ? "" : field.message;
      return isValid;
    }

    // Validate on blur for a nicer real-time feel
    Object.keys(fields).forEach((key) => {
      fields[key].el?.addEventListener("blur", () => validateField(key));
    });

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const results = Object.keys(fields).map((key) => validateField(key));
      const allValid = results.every(Boolean);

      if (!allValid) {
        VersoToast("Please fix the highlighted fields.", "error");
        form.querySelector(".is-invalid")?.focus();
        return;
      }

      // Simulate a network request with the loading spinner on the button
      const submitBtn = form.querySelector("button[type='submit']");
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.innerHTML = `<span class="btn-spinner"></span> Sending…`;

      setTimeout(() => {
        submitBtn.disabled = false;
        submitBtn.textContent = originalText;
        form.reset();
        if (counter) counter.textContent = "0 characters";
        const successPanel = document.querySelector(".contact-success");
        if (successPanel) {
          form.hidden = true;
          successPanel.hidden = false;
          successPanel.focus();
        }
        VersoToast("Message sent — we'll reply within 2 business days.", "success");
      }, 1200);
    });

    // "Send another message" reset
    document.querySelector(".contact-success__reset")?.addEventListener("click", () => {
      form.hidden = false;
      document.querySelector(".contact-success").hidden = true;
    });
  });
})();
