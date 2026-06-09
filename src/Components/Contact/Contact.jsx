import { useState } from "react";
import "./Contact.css";

function Contact() {
  const [confirmation, setConfirmation] = useState(null);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    try {
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(formData).toString(),
      });

      if (!response.ok) {
        throw new Error("Form submission failed");
      }

      form.reset();
      setConfirmation({
        title: "Message received",
        message: "Thanks for reaching out. Your message has been submitted, and I will get back to you soon.",
      });
    } catch {
      setConfirmation({
        title: "Preview message",
        message: "This form is ready for the live Netlify site. In local preview, submissions may not be delivered.",
      });
    }
  };

  return (
    <section className="contact" id="contact">
      <div className="contact-header">
        <h2>Contact Me</h2>
        <a href="mailto:huang.jiayin@northeastern.edu">huang.jiayin@northeastern.edu</a>
        <p>Feel free to contact me with any inquiries or questions.</p>
      </div>

      <form
        className="contact-form"
        name="contact"
        method="POST"
        data-netlify="true"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <div className="contact-field-row">
          <label>
            <span>Name</span>
            <input type="text" name="name" autoComplete="name" required />
          </label>
          <label>
            <span>Email Address</span>
            <input type="email" name="email" autoComplete="email" required />
          </label>
        </div>
        <label>
          <span>Message</span>
          <textarea name="message" rows="5" required />
        </label>
        <div className="contact-submit-row">
          <button type="submit">Submit</button>
        </div>
      </form>

      {confirmation && (
        <div className="contact-modal-backdrop" role="presentation">
          <div className="contact-modal" role="dialog" aria-modal="true" aria-labelledby="contact-confirmation-title">
            <h3 id="contact-confirmation-title">{confirmation.title}</h3>
            <p>{confirmation.message}</p>
            <button type="button" onClick={() => setConfirmation(null)}>
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
}

export default Contact;
