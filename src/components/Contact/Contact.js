import React, { useState } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
// import emailjs from '@emailjs/browser'; // Uncomment when setting up EmailJS
import "./Contact.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isLoading, setIsLoading] = useState(false);
  const [status, setStatus] = useState({ type: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "", message: "" });

    // Simulate form processing
    setTimeout(() => {
      try {
        // Create mailto link with form data
        const subject = `Portfolio Contact from ${formData.name}`;
        const body = `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`;
        const mailtoLink = `mailto:negiamishu@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;

        // Open default email client
        window.location.href = mailtoLink;

        setStatus({
          type: "success",
          message: "Your default email client should open. If not, please contact me directly at negiamishu@gmail.com"
        });
        setFormData({ name: "", email: "", message: "" });
      } catch (error) {
        console.error('Form Error:', error);
        setStatus({
          type: "error",
          message: "Please contact me directly at negiamishu@gmail.com"
        });
      } finally {
        setIsLoading(false);
      }
    }, 1000);

    /*
    // Alternative: EmailJS implementation (requires setup)
    // Uncomment and configure when you set up EmailJS account

    try {
      const result = await emailjs.send(
        'YOUR_SERVICE_ID', // Replace with your EmailJS service ID
        'YOUR_TEMPLATE_ID', // Replace with your EmailJS template ID
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
          to_email: 'negiamishu@gmail.com',
        },
        'YOUR_PUBLIC_KEY' // Replace with your EmailJS public key
      );

      if (result.status === 200) {
        setStatus({
          type: "success",
          message: "Message sent successfully! I'll get back to you soon."
        });
        setFormData({ name: "", email: "", message: "" });
      }
    } catch (error) {
      console.error('EmailJS Error:', error);
      setStatus({
        type: "error",
        message: "Failed to send message. Please try again or contact me directly."
      });
    } finally {
      setIsLoading(false);
    }
    */
  };

  return (
    <div className="contact-container">
      {/* Get In Touch Section */}
      <div className="get-in-touch">
        <h2 className="title">
          Get <span className="gradient-text">In Touch</span>
        </h2>
        <div className="underline"></div>
        
        {/* Subtitle with proper line break */}
        <p className="subtitle">
          I'm currently open for freelance opportunities and interesting projects.
          <br />
          Let's build something amazing together!
        </p>
      </div>

      {/* Contact Form Box */}
      <div className="contact-form-box">
        {/* Status Message */}
        {status.message && (
          <div className={`status-message ${status.type}`}>
            {status.message}
          </div>
        )}

        <form onSubmit={handleSubmit} className="contact-form">
          <div>
            <label>Your Name</label>
            <input
              type="text"
              name="name"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label>Your Email</label>
            <input
              type="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <div>
            <label>Your Message</label>
            <textarea
              name="message"
              placeholder="Hi, I'd like to talk about..."
              value={formData.message}
              onChange={handleChange}
              required
              disabled={isLoading}
            />
          </div>

          <button type="submit" className="submit-button" disabled={isLoading}>
            {isLoading ? "Sending..." : "Send Message ✈️"}
          </button>
        </form>
      </div>

      {/* Direct Email Contact */}
      <p className="direct-contact-text">Or reach me directly at:</p>
      <a href="mailto:negiamishu@gmail.com" className="email-button">
        📧 negiamishu@gmail.com
      </a>

      {/* Social Media Buttons with Icons */}
      <div className="social-links">
        <a href="https://github.com/negiamishhu" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaGithub size={24} /> GitHub
        </a>
        <a href="https://www.linkedin.com/in/amishunegi/" target="_blank" rel="noopener noreferrer" className="social-button">
          <FaLinkedin size={24} /> LinkedIn
        </a>
        <a href="mailto:negiamishu@gmail.com" className="social-button">
          <FaEnvelope size={24} /> Email
        </a>
      </div>

     
    </div>
  );
};

export default Contact;
