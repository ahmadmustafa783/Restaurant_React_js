import React from 'react'


function Clients(prop) {
    return (
        <>
            <section className="py-5 py-md-5 border-bottom">


                <div className="container py-2 pd-md-4">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6 text-center">


                            <h2 className="mb-2">
                                What clients say about us
                            </h2>


                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            </p>

                        </div>
                    </div>




                    <div id="carouselExampleDark" className="carousel carousel-dark slide">
                        <div className="carousel-indicators">
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" class="active"
                                aria-current="true" aria-label="Slide 1"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1"
                                aria-label="Slide 2"></button>
                            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2"
                                aria-label="Slide 3"></button>
                        </div>

                        <div className="carousel-inner mt-5">
                            <div className="carousel-item active">
                                <div className="row justify-content-center">
                                    <div className="col-9">
                                        <div className="row justify-content-center">

                                            <div className="col-md-4 col-10 order-md-2 ">
                                                <img className="img-fluid rounded-circle mb-5 mb-md-0" src={prop.imgA}
                                                    alt="..." />

                                            </div>
                                            <div className="col-md-7 col-12 " style={{paddingBottom: "100px"}}>
                                                <p className=" text-black mb-5  d-md-flex d-none" style={{paddingTop: "90px"}}>
                                                    {prop.pA}<br /> {prop.pB} <br /> {prop.pC}
                                                    <br />{prop.pD}
                                                </p>
                                                <p className=" text-black mb-5 d-md-none d-flex">
                                             {prop.para}
                                                </p>

                                            </div>


                                        </div>

                                    </div>
                                </div>


                            </div>

                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-9">
                                        <div className="row justify-content-center">

                                            <div className="col-md-4 col-10 order-md-2 ">
                                                <img className="img-fluid rounded-circle mb-5 mb-md-0" src={prop.imgB}
                                                    alt="..." />

                                            </div>
                                            <div className="col-md-7 col-12 " style={{paddingBottom: "100px"}}>
                                            <p className=" text-black mb-5  d-md-flex d-none" style={{paddingTop: "90px"}}>
                                                    {prop.pA}<br /> {prop.pB} <br /> {prop.pC}
                                                    <br />{prop.pD}
                                                </p>
                                                <p className=" text-black mb-5 d-md-none d-flex">
                                             {prop.para}
                                                </p>

                                            </div>


                                        </div>

                                    </div>
                                </div>




                            </div>
                            <div className="carousel-item">
                                <div className="row justify-content-center">
                                    <div className="col-9">
                                        <div className="row justify-content-center">
                                            <div className="col-md-4 col-10 order-md-2 ">
                                                <img className="img-fluid rounded-circle mb-5 mb-md-0" src={prop.imgC}
                                                    alt="..." />

                                            </div>
                                            <div className="col-md-7 col-12 " style={{paddingBottom: "100px"}}>
                                            <p className=" text-black mb-5  d-md-flex d-none" style={{paddingTop: "90px"}}>
                                                    {prop.pA}<br /> {prop.pB} <br /> {prop.pC}
                                                    <br />{prop.pD}
                                                </p>
                                                <p className=" text-black mb-5 d-md-none d-flex">
                                             {prop.para}
                                                </p>

                                            </div>
                                        </div>

                                    </div>
                                </div>


                            </div>
                            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Previous</span>
                            </button>
                            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark"
                                data-bs-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="visually-hidden">Next</span>
                            </button>
                        </div>

                    </div>
                    </div>
            </section>

        </>
    )
}
export default Clients;