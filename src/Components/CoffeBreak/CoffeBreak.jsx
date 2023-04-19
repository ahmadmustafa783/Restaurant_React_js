import React from 'react'

import imageA from "../img/2.jpg"
import imageB from "../img/7.jpg"
import imageC from "../img/19.jpg"


function Coffe() {
    return (
        <div >
            <section className="pt-5 pt-md-5 mt-5">
                <div className="container">
                    <div className="row ">
                        <div className="col-md-2 ">
                            <hr style={{width: "40px",color: "rgb(255, 99, 71)", borderWidth: "5px "}}/>
                                <p className=" lh-lg text-black mb-4 mb-md-0 ">
                                    Take a coffee break or enjoy a meal.
                                </p>

                        </div>
                        <div className="col-md-4 ">
                            <img className="img-fluid" src={imageA} alt="..."/>

                        </div>
                        <div className="col-md-5 align-self-center mx-auto ">
                            <h2 className="mb-2">
                                <em>Always</em> amazing experience
                            </h2>

                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias veritatis nisi, consequatur,
                                laborum libero a neque ducimus. Porro rem illum quo nostrum quisquam asperiores. Possimus
                                facilis velit, voluptatibus!
                            </p>

                        </div>

                    </div>

                </div>
            </section>





            <section>
                <div className="container py-5 mt-5">
                    <div className="row ">
                        <div className="col-md-2 order-md-2 align-self-end">
                            <hr style={{width: "40px", color: "rgb(255, 99, 71)", borderWidth: "5px" }}/>

                                <p className=" lh-lg text-black mb-5 mb-md-0">
                                    Great variety of foods you will enjoy.
                                </p>

                        </div>
                        <div className="col-md-4 order-md-3">
                            <img className=" img-fluid w-100" src={imageB} alt="..."/>





                        </div>
                        <div className="col-md-5 order-md-1 align-self-center mx-auto pt-sm-4 ">
                            <h2 className="mb-2 ">
                                <em>Beautiful</em> outdoor seating
                            </h2>


                            <p>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ullam quae similique asperiores
                                consequatur! Nihil temporibus qui enim. Accusamus voluptates a, et quidem! Quo, et?
                            </p>


                        </div>

                    </div>

                </div>
            </section>
            


    <section style={{backgroundImage: `url(${imageC})`,backgroundSize: "100% 100%"}}>
        <div className="min-vh-100 py-5 py-md-5 ">
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6 col-lg-4">


                        <hr style={{width: "40px", color:"yellow", borderWidth: "5px" }}/>


                        <p className=" fs-5 lh-lg text-white mb-0" style={{fontFamily:"Times New Roman, Times, serif"}}>
                            Enjoy our specialty coffees and award winning doughnuts in a friendly atmosphere.
                        </p>

                    </div>
                </div>
            </div>

        </div>

    </section>


        </div>
    )
}
export default Coffe;