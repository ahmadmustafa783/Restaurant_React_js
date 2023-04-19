import React from 'react'

import image from "../img/1.jpg"
import{FaFacebookSquare} from "react-icons/fa";
import{FaTwitterSquare} from "react-icons/fa";
import{FaWhatsappSquare} from "react-icons/fa";

function Header() {
    return (
        <div >

            <header style={{backgroundImage: `url(${image})`, backgroundSize: "100% 100%"}} id="headerInfo">
                <div className="mask " style={{backgroundColor: "hsla(0, 0%, 0%, 0.6)"}}>
                    <div className="d-flex  min-vh-100 pt-3 pt-md-4 pb-0 pb-md-0 ">

                        <div className="container justify-content-center my-auto  " >
                            <div className="row justify-content-center" style={{margin: "100px"}}>
                                <div className=" col-md-8 col-lg-6  text-center">
                                    <h6 className="text-white">
                                        <span className="text-warning">Café</span> / Restaurant
                                    </h6>
                                    <h1 className="display-1 text-white  mb-4">
                                        Touché
                                    </h1>
                                    <p className="text-center text-white mb-4 mb-md-5">
                                        A unique café located in the heart of Los Angeles. Always fresh coffee and biscuits.
                                        Open for indoor dining and to-go orders.
                                    </p>
                                    <a className="btn btn-outline-warning  text-white text-warning-hover pd-0 mb-0 mb-md-0 "
                                        href="#reservation">
                                        Make reservation
                                    </a>



                                </div>
                            </div>
                            <div className="row  mt-0">
                                <div className="col-md ">

                                    <ul className="list-inline text-center text-md-start  ">
                                        <li className="list-inline-item">
                                            <a className="text-white text-warning-hover" href="#!">
                                                <i className="fab fa-twitter"><FaTwitterSquare/></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item ms-5">
                                            <a className="text-white text-warning-hover" href="#!">
                                                <i className="fa-brands fa-facebook"><FaFacebookSquare/></i>
                                            </a>
                                        </li>
                                        <li className="list-inline-item ms-5">
                                            <a className="text-white text-warning-hover" href="#!">
                                                <i className="fab fa-instagram" ><FaWhatsappSquare/></i>
                                            </a>
                                        </li>
                                    </ul>

                                </div>
                                <div className="col-md">
                                    <p className="font-serif text-white text-center text-md-end  mb-3 text-lg-end mb-md-5">
                                         1234 Dining Str., Los Angeles,
                                        CA 12345-0000
                                    </p>

                                </div>

                            </div>
                        </div>


                    </div>
                </div>
            </header>
        </div>
    )
}
export default Header;