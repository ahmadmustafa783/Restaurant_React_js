import React from "react";




function Footer() {
    return <>
    <footer className="py-3 py-md-3 bg-black " style={{fontFamily:'Times New Roman'}} id="footerInfo">
            <div className="container px-4 py-md-5">
              <div className="row gx-5">
                <div className="col-sm-4">
          
                 
                  <h5 className="  text-warning">
                    About Us
                  </h5>
          
                
                  <p className="mb-5 text-white">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Corrupti dolorum, sint corporis nostrum, possimus unde eos vitae eius quasi saepe.
                  </p>
          
                </div>
                <div className="col-sm-4">
          
                 
                  <h5 className=" text-warning">
                    Contact info
                  </h5>
          
                 
                  <ul className="list-unstyled mb-5 text-white">
                    <li className="d-flex mb-2">
                      <div className="fas fa-map-marker-alt me-3 mt-2 s"></div>
                      1234 Altschul, Los Angeles, CA 10027-0000
                    </li>
                    <li className="d-flex mb-2">
                      <div className="fas fa-phone me-3 mt-2 "></div>
                      +1 987 654 3210
                    </li>
                    <li className="d-flex">
                      <div className="far fa-envelope me-3 mt-2 "></div> <a  className="text-warning"href="mailto:admin@domain.com">admin@domain.com</a>
                    </li>
                  </ul>
          
                </div>
                <div className="col-sm-4">
          
                 
                  <h5 className="text-warning">
                    Opening hours
                  </h5>
          
                  
                  <div className="mb-3 text-white">
                    <div className="text-xs">Monday - Thursday</div>
                    <div className="font-serif">10:00 AM - 11:00 PM</div>
                  </div>
          
                  
                  <div className="mb-5 text-white">
                    <div >Friday - Sunday</div>
                    <div >12:00 AM - 03:00 AM</div>
                  </div>
          
                </div>
              </div>
              <div className="row">
                <div className="col-12">
          
                  
                  <div className="d-flex align-items-center text-white">
                    <hr className=" me-3" style={{height: "5px"}} /> &copy; 2021 Touché. All rights reserved.
                  </div>
          
                </div>
              </div>
            </div>
          </footer>
       
    </>}
    export default Footer