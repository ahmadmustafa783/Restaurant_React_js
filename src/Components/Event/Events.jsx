import React from 'react'

import image from "../img/8.jpg"
function Event() {
    return (
        <>
         <section className="mt-5 mt-md-5" id="eventInfo">


<div className="container">
    <div className="row justify-content-center ">
        <div className="col-12 col-md-8 col-lg-6 text-center pt-5">


            <h2 className="mb-2">
                Upcoming events
            </h2>


            <p className="mb-5">
                Commodi rem veritatis quis eaque mollitia.
            </p>

        </div>
    </div>
</div>


<div style={{backgroundImage:`url(${image})` ,backgroundSize: "100% 100%",marginTop: "30px"}}>
    <div className="mask " style={{backgroundColor: "hsla(0, 0%, 0%, 0.6)"}}>
        <div className="container">
            <div className="row " style={{paddingTop:"130px"}}>
                <div className="col-md-8 col-lg-5" style={{paddingBottom: "60px"}}>


                    <h3 className=" text-warning">
                        September 30, 2023
                    </h3>


                    <h2 className="mb-3 text-white">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea
                        quae!
                    </h2>


                    <p className="mb-5 text-white">
                        Alias earum, labore doloremque iusto a modi et, dolorem veritatis iste quis ab.
                        Facere est optio, voluptate molestias aspernatur impedit perferendis odit?
                    </p>


                    <a className="btn btn-outline-warning text-white text-warning-hover"
                        href="#section_reservation" s>
                        Reserve a table
                    </a>

                </div>
            </div>

        </div>
    </div>
</div>


<div className="container">
    <div className="row pt-5 pb-4">
        <div className="col-3 col-md-2 col-lg-1  ">

            <p className="d-block mb-2 display-6  fw-bolder  "
                style={{fontFamily:'Times New Roman'}}>29</p>
            <p className="fw-bolder" style={{fontFamily:'Times New Roman'}}>Sep</p>


        </div>
        <div className="col-9 col-md-7 col-lg-8 h4 mb-4 mb-md-0">

            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!


        </div>
        <div className="col-9 offset-3 col-md-3 offset-md-0 text-md-right">
            <a className="btn btn-outline-warning text-warning-hover text-black" href="#section_reservation">
                Reserve a table
            </a>

        </div>

    </div>
    <hr/>
    <div className="row py-4">
        <div className="col-3 col-md-2 col-lg-1 ">

            <p className="d-block mb-2 display-6 fw-bolder"
               style={{fontFamily:'Times New Roman'}}>28</p>
            <p className="fw-bolder" style={{fontFamily:'Times New Roman'}}>Sep</p>


        </div>
        <div className="col-9 col-md-7 col-lg-8">
            <h4 className="h4 mb-4 mb-md-0">

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorum voluptas, aut ea quae!
            </h4>

        </div>
        <div className="col-9 offset-3 col-md-3 offset-md-0 text-md-right">
            <a className="btn btn-outline-warning text-black text-warning-hover" href="#section_reservation">
                Reserve a table
            </a>

        </div>

    </div>

</div>




</section>

        </>)
}
export default Event;