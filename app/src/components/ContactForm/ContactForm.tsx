import { useState } from "react";
import "./ContactForm.css";

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { id, value } = event.target;
    const updatedFormData = { ...formData, [id]: value };
    setFormData(updatedFormData);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
  };

  return (
    <div className="contact-form-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <label htmlFor="name">Name:</label>
        <input
          onChange={handleChange}
          type="text"
          id="name"
          placeholder="Your Name"
          required
        />
        <br />
        <label htmlFor="email">Email:</label>
        <input
          onChange={handleChange}
          type="email"
          id="email"
          placeholder="Your Email"
          required
        />
        <br />
        <label htmlFor="message">Message:</label>
        <textarea
          onChange={handleChange}
          id="message"
          placeholder="Your Message"
          required
        />
        <br />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
