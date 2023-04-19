import React, { useState } from "react";


function MenuItem(props) {
    return (
        <>

           
               
                    <div className="col-12 col-md-6 ">
                        <div className="row py-3 border-bottom  align-items-center">
                            <div className="col-3 " style={{ width: "120px", height: "120px" }}>
                                <img className="img-fluid w-100 h-100" src={props.img} alt="..." /></div>
                            <div className="col-6">

                                <h5 className="mb-2 ">{props.title}</h5>


                                <p className="mb-0">
                                    {props.para}
                                </p>

                            </div>
                            <div className="col-2 align-items-center">
                                <div className="fs-4  text-center text-black ">
                                    {props.price}
                                </div>

                            </div>
                        </div>
                    </div>

             
           

        </>
    )

}
export default MenuItem