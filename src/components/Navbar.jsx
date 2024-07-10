import React from 'react'

export default function Navbar() {
  return (
    <div>
      <video className="video" width="100%" loop="" playsinline=""  muted autoplay="">
      <source src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"   type="video/mp4"/></video>
      
      <nav className="navbar navbar-expand-lg ">
  <div className="container-fluid">
    <a className="navbar-brand" href="#"> <img  src="taj3.png" alt="" /></a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
    <div className="collapse navbar-collapse" id="navbarText">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0 ">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="#">DESTINATIONS</a>
        </li> &nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <a className="nav-link active "aria-current="page" href="#">HOTELS</a>

        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">DINING</a>

        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <a className="nav-link active " aria-current="page" href="#">TAJ HOLIDAYS</a>

        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">MEMBERSHIP</a>

        </li>
        &nbsp;&nbsp;&nbsp;
        <li className="nav-item">
        <a className="nav-link active" aria-current="page" href="#">MORE</a>

        </li>
      </ul>
      <span className="navbar-text">
        Navbar text with an inline element
      </span>
     
    </div>
     
  </div>
</nav>
{/* <video className="video" width="100%" loop="" playsinline=""  muted autoplay="">
      <source src="https://assets-cug1-825v2.tajhotels.com/video/TAJ%20WEBSITE%20FILM_1920%20X%20930_148mb.mp4?Impolicy=Medium_High"   type="video/mp4"/></video>
       */}
    </div>
  )
}
