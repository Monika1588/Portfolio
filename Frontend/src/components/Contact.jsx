import { useState } from "react";
import { sendContact } from "../services/api";
import "./Contact.css";

export default function Contact() {
  const [data, setData] = useState({});

  const submit = async (e) => {
    e.preventDefault();
    await sendContact(data);
    alert("Message sent successfully");
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-left">
        <h2 className="contact-heading">Contact Me</h2>
        <p className="contact-description">
          I’m open to new opportunities and collaborations. 
          Feel free to send me a message and I will get back to you as soon as possible.
        </p>
      </div>
      <div className="contact-right">
        <form className="contact-form" onSubmit={submit}>
          <input
            className="contact-input"
            placeholder="Name"
            onChange={(e) => setData({ ...data, name: e.target.value })}
            required
          />
          <input
            className="contact-input"
            placeholder="Email"
            onChange={(e) => setData({ ...data, email: e.target.value })}
            required
          />
          <textarea
            className="contact-textarea"
            placeholder="Message"
            onChange={(e) => setData({ ...data, message: e.target.value })}
            required
          />
          <button className="contact-btn">
            <span>Send Message</span>
          </button>
        </form>
      </div>
    </section>
  );
}
