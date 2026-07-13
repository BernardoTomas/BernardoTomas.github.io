import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import ContactForm from "../ContactForm/ContactForm";
import "./Contact.css";

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="contact" className={theme + " contact-wrapper"}>
      <div className="contact-container">
        <h2 className="gallery-title title-right">Contact me</h2>
        <div className="gallery-title-separator" />
        <div className="contact-box-bg">
          <div className="contact-box">
            <h3>
              If you need a well designed, lightweight, and responsive website,
              feel free to get in touch so we can chat!
            </h3>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
