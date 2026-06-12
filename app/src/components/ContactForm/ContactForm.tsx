import { useState } from "react";
import "./ContactForm.css";
import Input from "./InputComponent/Input";
import Button from "../Buttons/Buttons";

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
          label="Name"
          changeHandler={handleChange}
        />
        <Input
          type="email"
          id="email"
          label="Email"
          changeHandler={handleChange}
        />
        <Input
          type="textarea"
          id="message"
          label="Message"
          changeHandler={handleChange}
        />
        <Button
          btnLink="#"
          btnContent="Send"
          btnStyle="contact-form-btn"
          btntype="submit"
        />
      </form>
    </div>
  );
}

export default ContactForm;
