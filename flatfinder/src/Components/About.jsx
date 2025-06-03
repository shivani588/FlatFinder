import React, { useEffect } from 'react';
import './About.css';
import'./Amenities.css';

const About = () => {
  useEffect(() => {
    document.title = "About";
  }, []);

  return (
    <div className="about-container">
      <h1 className="text-center">About FlatFinder</h1>
      <p className="aboutpara">
        Welcome to FlatFinder, your ultimate solution for finding the perfect flat or apartment. Our mission is to simplify the process of searching for rental properties by providing a user-friendly platform that connects tenants with property owners and real estate agents.
      </p>
      <p className="aboutpara">
        At FlatFinder, we believe that finding a home should be a hassle-free experience. With our advanced search features, detailed property listings, and seamless communication tools, you can easily find a place that meets your needs and budget.
      </p>
      <p className="aboutpara">
        Our team is dedicated to ensuring that you have the best possible experience on our platform. Whether you are looking for a cozy studio or a spacious family home, FlatFinder is here to help you every step of the way.
      </p>
      <h2>Our Values</h2>
      <ul className="aboutul">
        <li className="aboutli"><strong>Customer First:</strong> We prioritize the needs and satisfaction of our users.</li>
        <li className="aboutli"><strong>Transparency:</strong> We ensure clear and honest communication between all parties.</li>
        <li className="aboutli"><strong>Innovation:</strong> We continuously improve our platform with the latest technology.</li>
        <li className="aboutli"><strong>Community:</strong> We foster a supportive and collaborative environment for everyone.</li>
      </ul>
      <h2 className="text-center">Contact Us</h2>
      <p className="aboutpara">
        If you have any questions or feedback, please don't hesitate to contact us at <a className="abouta" href="mailto:support@flatfinder.com">support@flatfinder.com</a>.
      </p>
    </div>
  );
};

export default About;
