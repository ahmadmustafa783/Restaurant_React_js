import React, { useState } from 'react'

function Form() {

   
    const [firstName,setFirstName]=useState('')
        const [phoneNumber, setPhoneNumber] = useState('');
        
        const [email, setEmail] = useState('');
        const [error, setError] = useState(false);
        const handleSubmit=(e)=>{
            e.preventDefault();
            firstName.length===0||phoneNumber.length===0||email.length===0?
                setError(true):
                setError(false)
            
         
        }
      

    


    return (
        <div className="py-5 py-md-5 bg-light" id="reservation"  >



           
                
                    <div className="container py-2 py-md-4" >
                        <div className="row justify-content-center">
                            <div className="col-12 col-md-8 col-lg-6 text-center ">


                                <h2 className="mb-2">
                                    Make online reservation
                                </h2>


                                <p className="mb-5">
                                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quisquam illo praesentium sequi in
                                    cum, beatae maiores quae qui.
                                </p>

                            </div>
                        </div>
                        <div className="row justify-content-lg-center">
                            <div className="col-lg-8">

                                <form id="reservationForm" onSubmit={handleSubmit}>
                                    <div className="row gx-3">
                                    
                                        <div className="col-md-6">


                                            <input type="hidden" name="contact_number" />


                                            <div className="mb-3">
                                            
                                                
                                                <input className="form-control" id="user_name" name="user_name" type="text"
                                                    placeholder="Full name"  onChange={e=>setFirstName(e.target.value)}/>
                                                     {error&&firstName.length<=0?
                                                    <label className='text-danger' for="user_name"> Full name Required</label>:""}
                                            </div>


                                            <div className="mb-3">
                                            
                                                <input className="form-control" id="user_phone" name="user_phone" type="tel"
                                                    placeholder="Phone number" onChange={e=>setPhoneNumber(e.target.value)} />
                                                    {error&&phoneNumber.length<=0?
                                                <label className='text-danger' for="user_phone">Phone number Required</label>:""}
                                            </div>


                                            <div className="mb-3">
                                            
                                                <input className="form-control" id="user_email" name="user_email" type="email"
                                                    placeholder="Email address" onChange={e=>setEmail(e.target.value)} />
                                                    {error&&email.length<=0?
                                                <label className='text-danger' for="user_email">Email address Required</label>:""}
                                            </div>

                                        </div>
                                       
                                        <div className="col-md-6">


                                            <div className="mb-3">
                                                <label className="visually-hidden" for="guests">Guests</label>
                                                <select className="form-select" id="guests" name="guests" required>
                                                    <option value="1">1 person</option>
                                                    <option value="2" selected="">2 persons</option>
                                                    <option value="3">3 persons</option>
                                                    <option value="4">4 persons</option>
                                                    <option value="5">5 persons</option>
                                                </select>
                                            </div>


                                            <div className="mb-3">
                                                <label className="visually-hidden" for="date">Date</label>
                                                <input className="form-control" id="date" name="date" type="date" value="2023-01-24"
                                                    required />
                                            </div>


                                            <div className="mb-3">
                                                <label className="visually-hidden" for="time">Time</label>
                                                <input className="form-control" id="time" name="time" type="time" value="12:00"
                                                    required />
                                            </div>

                                        </div>
                                        <div className="col text-center">


                                            <button className="btn btn-outline-warning text-black  text-warning-hover" >
                                                Reserve a table
                                            </button>

                                        </div>
                                    </div>
                                </form>

                            </div>
                        </div>




                    </div>
              

           
        </div>
    )
}
export default Form;