import React from 'react'

export default function NavBar() {
  return (
    <nav 
      className="navbar navbar-expand-lg navbar-light bg-light"
      style={{ marginBottom: 20}}
    >
      <a className="navbar-brand" href="#">Konza</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav mr-auto">
          <li className="nav-item">
            <a className="nav-link" href="#">Tasks</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Projects</a>
          </li>
          <li className="nav-item">
            <a className="nav-link" href="#">Users</a>
          </li>
        </ul>
      </div>
    </nav>
  )
}
