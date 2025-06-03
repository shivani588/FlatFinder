import React, { useState } from "react";
import './Contact.css'; // Import CSS for styling

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const handleSubmit = async (e) => {
    e.preventDefault();
  
    // Send form data to the backend
    try {
      const response = await fetch('http://localhost:5000/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
      });
  
      if (response.ok) {
        console.log('Form submitted:', formData);
        setFormData({ name: "", email: "", message: "" });
        alert('Thank you for contacting us!');
      } else {
        console.error('Error submitting form');
        alert('There was an error. Please try again.');
      }
    } catch (error) {
      console.error('Error:', error);
      alert('There was an error. Please try again.');
    }
  };
  

  return (
    <div className="contact-page my-5">
      <h2>Contact Us</h2>
      <p>If you have any questions or inquiries, feel free to reach out to us.</p>

      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message:</label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="submit-btn">Send Message</button>
      </form>

      <div className="contact-details">
        <h3>Our Contact Information</h3>
        <p>Email: support@flatfinder.com</p>
        <p>Phone: +123-456-7890</p>
        <p>Address: 123 FlatFinder Street, City, Country</p>
      </div>
    </div>
  );
};

export default Contact;
