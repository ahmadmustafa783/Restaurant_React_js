import React from "react";




function Gallery() {
    return <>
         <section className="py-5" id="galleryInfo">

<div className="container">

    <div className="row justify-content-center">
        <div className="col-12 col-md-8 col-lg-6 text-center">


            <h2 className="mb-2">
                Our gallery
            </h2>


            <p className=" mb-5">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
            </p>

        </div>
    </div>

    <div className="row gx-3">
        <div className=" col-6 col-md-4 ">



            <img className="img-fluid mb-3" src="../img/11.jpg" alt="..."/>
            <img className="img-fluid mb-3" src="../img/15.jpg" alt="..."/>
            <img className="img-fluid mb-3" src="../img/18.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-flex d-md-none" src="../img/13.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-flex d-md-none" src="../img/12.jpg" alt="..."/>

        </div>
        <div className=" col-6 col-md-4 ">





            <img className="img-fluid mb-3  w-100" src="../img/16.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-md-flex d-none" src="../img/12.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-md-none d-flex" src="../img/14.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-md-none d-flex" src="../img/17.jpg" alt="..."/>


        </div>
        <div className=" col-6 col-md-4 ">


            <img className="img-fluid mb-3 d-md-flex d-none" src="../img/13.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-md-flex d-none" src="../img/14.jpg" alt="..."/>
            <img className="img-fluid mb-3 d-md-flex d-none" src="../img/17.jpg" alt="..."/>

        </div>



    </div>
</div>




</section>
    </>
    
}

export default Gallery