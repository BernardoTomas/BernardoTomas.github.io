import { useContext } from "react";
import { ThemeContext } from "../../context/toggle-theme";
import "./Contact.css";

function Contact() {
  const { theme } = useContext(ThemeContext);

  return (
    <div id="contact" className={theme + "contact-wrapper"}>
      <div className="contact-container">
        <h2 className="gallery-title">Contact me</h2>
        <div className="gallery-title-separator" />
        <div className="contact-box">
          <h3>
            If you need a well designed, lightweight, and responsive website,
            feel free to get in touch so we can chat!
          </h3>
          <div className="contact-form-container">
            <form className="contact-form">
              <label htmlFor="name">Name:</label>
              <input type="text" id="name" placeholder="Your Name" required />
              <br />
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <br />
              <label htmlFor="message">Message:</label>
              <textarea id="message" placeholder="Your Message" required />
              <br />
              <button type="submit">Send Message</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
