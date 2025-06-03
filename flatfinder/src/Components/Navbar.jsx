import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
<nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
  <div className="container-fluid px-5">
    <Link className="navbar-brand fs-1 text-danger fw-bold" to="#">FlatFinder</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarNav">
      <ul className="navbar-nav ms-auto">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/About">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Amenities">Amenities</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/Images">Images</Link>
        </li>
       
        <li className="nav-item">
          <Link className="nav-link" to="/Highlight">Highlight</Link>
        </li>
        
        
        
      </ul>
    </div>
  </div>
</nav>

    </div>
  )
}

export default Navbar
