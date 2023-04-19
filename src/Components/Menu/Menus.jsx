import React from 'react'


import MenuA from '../Menu/MenuMap';
 import {MenuB,MenuC,MenuD} from '../Menu/MenuMap'



function Menus() {



    return (
        <div>
            <section className="mt-5">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-8 col-lg-6  text-center pt-5">

                            <h2 className="mb-3">
                                Menu options
                            </h2>


                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                                Ratione numquam eos perferendis itaque hic unde, ad, laudantium minima.
                            </p>

                        </div>

                    </div>

                    <div className="row" id="menuReact">
                        <div className="col ">


                            <div className="nav nav-tabs justify-content-center mb-5  " id="myTab" role="tab">
                                <a className="nav-link active " id="mainsTab" data-bs-toggle="tab" href="#mains" role="tab"
                                    aria-controls="mains" aria-selected="true">
                                    Mains
                                </a>

                                <a className="nav-link  " id="lunchTab" data-bs-toggle="tab" href="#lunch" role="tab"
                                    aria-controls="lunch">
                                    Lunch
                                </a>
                                <a className="nav-link " id="dinnerTab" data-bs-toggle="tab" href="#dinner" role="tab"
                                    aria-controls="dinner">
                                    Dinner
                                </a>
                                <a className="nav-link  " id="drinksTab" data-bs-toggle="tab" href="#drinks" role="tab"
                                    aria-controls="drinks">
                                    Drinks
                                </a>
                            </div>

                        </div>
                    </div>


                    <div className="row">
                        <div className="col-12">


                            <div className="tab-content" id="menuContent">
                                <div className="tab-pane fade show active" id="mains" role="tabpanel" >
                                    <div className="row">
                                       <MenuA/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="lunch" role="tabpanel" aria-labelledby="lunchTab">
                                    <div className="row">
                                    <MenuB/>
                                    </div>


                                </div>
                                <div className="tab-pane fade" id="dinner" role="tabpanel" aria-labelledby="dinnerTab">
                                    <div className="row">
                                    <MenuC/>
                                    </div>
                                </div>
                                <div className="tab-pane fade" id="drinks" role="tabpanel" aria-labelledby="drinksTab">
                                    <div className="row">
                                    <MenuD/>
                                    </div>
                                </div>


                                <hr style={{ marginTop: "80px" }} />

                            </div>
                        </div>
                    </div>
                </div>








            </section>

        </div>
    )
}
export default Menus;