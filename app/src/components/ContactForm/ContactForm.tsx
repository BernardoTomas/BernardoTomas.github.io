import { useState } from "react";
import "./ContactForm.css";
import Input from "./InputComponent/Input";

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
        <Input
          type="text"
          id="name"
          placeholder="Your Name"
          label="Name"
          changeHandler={handleChange}
        />
        <Input
          type="email"
          id="email"
          placeholder="Your Email"
          label="Email"
          changeHandler={handleChange}
        />
        <Input
          type="textarea"
          id="message"
          placeholder="Your Message"
          label="Message"
          changeHandler={handleChange}
        />
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactForm;
