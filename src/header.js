import React from 'react'
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import {Link} from 'react-router-dom';
import './header.css'
function Header() {
  return (
    <div >
    <div className='menu-bar'>
    <nav className="navbar navbar-expand-lg bg-custom-2">
    <div className="container-fluid">
      <a className="navbar-brand text-light" href="#">BLOGSPACE</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav text-light">
        <Link to="/">
          <li className="nav-item">
            <a className="nav-link active text-light" aria-current="page" href="">HOME</a>
          </li>
          </Link>
          <Link to="/about">
          <li className="nav-item ">
            <a className="nav-link text-light" href="">ABOUT</a>
          </li>
          </Link>
          <Link to="/logout">
          <li className="nav-item ">
            <a className="nav-link text-light text-decoration-none" href="">LOGOUT</a>
          </li>
          </Link>
        </ul>
      </div>
    </div>
  </nav>
  </div>
    </div>
  )
}

export default Header
