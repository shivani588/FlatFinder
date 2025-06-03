import React from 'react'

function Footer() {
  return (
    <>
{/* Footer */}
<footer className="text-center text-lg-start bg-body-tertiary text-muted">
  {/* Section: Social media */}
  <section className="d-flex justify-content-center justify-content-lg-between p-4 border-bottom">
    {/* Left */}
    <div className="me-5 d-none d-lg-block">
      <span>Get connected with us on social networks:</span>
    </div>
    {/* Left */}
    {/* Right */}
    <div>
      <a href className="me-4 text-reset">
        <i className="fab fa-facebook-f" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-twitter" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-google" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-instagram" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-linkedin" />
      </a>
      <a href className="me-4 text-reset">
        <i className="fab fa-github" />
      </a>
    </div>
    {/* Right */}
  </section>
  {/* Section: Social media */}
  {/* Section: Links  */}
  <section className>
    <div className="container text-center text-md-start mt-5">
      {/* Grid row */}
      <div className="row mt-3">
        {/* Grid column */}
        <div className="col-md-3 col-lg-4 col-xl-3 mx-auto mb-4">
          {/* Content */}
          <h6 className="text-uppercase fw-bold mb-4">
            <i className="fas fa-gem me-3" />Flat finder
          </h6>
          <p>
     Whether you’re a student, a professional, or a family, our platform is designed to cater to your unique needs. We strive to provide a seamless experience that connects you with the best available properties in your desired location.


          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-2 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Products
          </h6>
          <p>
            <a href="#!" className="text-reset">Html</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Css</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Javascript</a>
          </p>
          <p>
            <a href="#!" className="text-reset">React</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-3 col-lg-2 col-xl-2 mx-auto mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">
            Useful links
          </h6>
          <p>
            <a href="#!" className="text-reset">About</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Images</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Contact</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Highlites</a>
          </p>
          <p>
            <a href="#!" className="text-reset">Amenities</a>
          </p>
        </div>
        {/* Grid column */}
        {/* Grid column */}
        <div className="col-md-4 col-lg-3 col-xl-3 mx-auto mb-md-0 mb-4">
          {/* Links */}
          <h6 className="text-uppercase fw-bold mb-4">Contact</h6>
          <p><i className="fas fa-home me-3" />Pahkowal Road, Ludhiana</p>
          <p>
            <i className="fas fa-envelope me-3" />
            flatfinder@gmail.com
          </p>
          <p><i className="fas fa-phone me-3" /> +91 9465135979</p>
          <p><i className="fas fa-print me-3" /> +91 9646784270</p>
        </div>
        {/* Grid column */}
      </div>
      {/* Grid row */}
    </div>
  </section>
  {/* Section: Links  */}
  {/* Copyright */}
  <div className="text-center p-4" style={{backgroundColor: 'rgba(0, 0, 0, 0.05)'}}>
    © 2021 Copyright:
    <a className="text-reset fw-bold" href="https://mdbootstrap.com/">MDBootstrap.com</a>
  </div>
  {/* Copyright */}
</footer>
{/* Footer */}

    </>
  )
}

export default Footer
