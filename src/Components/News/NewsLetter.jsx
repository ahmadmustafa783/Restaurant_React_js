import React ,{useState}from 'react'




function News() {
    const [letter,setLetter]=useState('')
    const [error, setError] = useState(false);
    const handler=(e)=> {
        
        letter.length==0?
        setError(true):
        setError(false)
        e.preventdefault()
        
        
    }
    


    
    
    return (<>
     

            <div className="bg-light py-2 py-md-5">
                <div className="container py-5 py-md-4">
                    <div className="row justify-content-center">

                        <div className="col-12 col-md-8 col-lg-6 text-center">

                            <h2 className="mb-3">
                                Newsletter
                            </h2>


                            <p className="mb-5">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo praesentium
                                sequi in cum, beatae maiores quae qui.
                            </p>

                        </div>

                    </div>




                <form onSubmit={handler}>
                    <div className="row justify-content-center ">
                        <div className="col-md-4 col-8">


                            <input className="form-control" type="email"  name="EMAIL" id="mce-EMAIL" placeholder="Email" onChange={e=>setLetter(e.target.value)} />
                            {error&&letter.length<=0?
                            <label className='text-danger' >Enter your info</label>:""}


                        </div>

                        <div className="col-2 text-center" style={{ paddingLeft: "20px" }}>
                            <button className="btn btn-outline-warning text-black" href="#section_reservation"  type="submit">
                                Subscribe
                            </button>

                        </div>

                    </div>
                    </form>


                </div>
            </div>
            
       
    





       
    </>)
}
export default News