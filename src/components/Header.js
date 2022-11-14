import React from 'react'
import './house.css'
export default function Header() {
  return (
    <>
    <nav className="navbar navbar-expand-lg navbar-light">
  <div className="container-fluid">
    <a className="heading fw-bold navbar-brand px-4" href="#">Estatery</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="fw-bold nav-link active px-4" aria-current="page" href="/">Rent</a>
        </li>
        <li className="nav-item">
          <a className="aa active fw-bold nav-link px-4" href="/">Buy</a>
        </li>
        <li className="nav-item">
          <a className="fw-bold active nav-link px-4" href="/">Sell</a>
        </li>
        <li className="nav-item dropdown">
          <a className="fw-bold active nav-link dropdown-toggle px-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Manage Property
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li className="nav-item dropdown">
          <a className="fw-bold active nav-link dropdown-toggle px-4" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Resource
          </a>
          <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a className="dropdown-item" href="#">Action</a></li>
            <li><a className="dropdown-item" href="#">Another action</a></li>
            <li><hr className="dropdown-divider"/></li>
            <li><a className="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
      </ul>
      <div className="d-flex gap-2">
        <button type="button" id="login"className="btn btn-light ">Log In</button>
        <button id="color"className=" btn btn-success" >Sign Up</button>
      </div>
    </div>
  </div>
</nav>
    
    </>
  )
};

