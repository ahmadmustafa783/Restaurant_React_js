import React from 'react'

import { Link } from "react-router-dom";





function Navbar() {




    return (
        <div>

            <nav className="navbar navbar-dark navbar-expand-lg navbar-togglable fixed-top text-dark" style={{ backgroundColor: "white" }}>
                <div className="container text-dark">


                    <a className="navbar-brand d-lg-none text-warning" href="./index.html" >Touché</a>


                    <button className="navbar-toggler  bg-warning " type="button" data-bs-toggle="collapse" data-bs-target="#navbarCollapse" aria-controls="navbarCollapse" aria-expanded="false" style={{ color: "black" }}>
                        <span className="navbar-toggler-icon  " style={{ color: "black" }}></span>
                    </button>


                    <div className="collapse navbar-collapse" id="navbarCollapse">


                        <ul className="navbar-nav text-dark">
                            <li className="nav-item">
                                <a className="nav-link text-dark " href="#headerInfo" >About Us</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#menuReact" >Menu</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#reservation">Reservation</a>
                            </li>
                        </ul>


                        <a className="navbar-brand d-none d-lg-flex mx-lg-auto text-dark" href="./index.html">
                            Touché
                        </a>


                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link text-dark" href="#eventInfo">News & Events</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link text-dark " href="#galleryInfo">Gallery</a>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link  text-dark" to="/signin">Sign in</Link>
                            </li>
                        </ul>

                    </div>
                </div>
            </nav>



        </div>
    )
}
export default Navbar;