import React, { useEffect } from 'react'

const Services = () => {
  useEffect(()=>{
    document.title="Services"
},[])
  return (
    <>
     <div className="services-container">
      <div className="services-content">
        <h1>Our Services</h1>
        <p>
          At FlatFinder, we offer a comprehensive range of services to make your home search as smooth and efficient as possible. Our services are designed to meet the diverse needs of our users.
        </p>
        <div className="service-item">
          <h2>Property Listings</h2>
          <p>
            Browse through an extensive database of flats, apartments, and homes in various locations. Our listings are regularly updated to provide you with the latest available properties.
          </p>
        </div>
        <div className="service-item">
          <h2>Verified Reviews</h2>
          <p>
            Read reviews from real residents to get an honest insight into the properties you are interested in. Our verified reviews help you make informed decisions.
          </p>
        </div>
        <div className="service-item">
          <h2>Advanced Search Tools</h2>
          <p>
            Use our advanced search tools to filter properties based on your specific criteria, such as location, price range, amenities, and more.
          </p>
        </div>
        <div className="service-item">
          <h2>Customer Support</h2>
          <p>
            Our dedicated customer support team is here to assist you with any questions or issues you may have during your search. We are committed to providing you with the best possible experience.
          </p>
        </div>
      </div>
    </div>

    </>
  )
}

export default Services
