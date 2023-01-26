import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <div>
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
    <Link className="navbar-brand mr-5" to={"/currency"}>Task</Link>
    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    </button>
  
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav mr-auto ml-5">
        <li className="nav-item active">
          <Link className="nav-link mr-2" to={"/currency"}>Currency </Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to={"/products"}>Products</Link>
        </li>
      </ul>
    </div>
  </nav>
    </div>
  )
}
