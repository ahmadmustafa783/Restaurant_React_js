import React from "react"
import { Link } from "react-router-dom"

import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignIn() {
  const [gmail, setGmail] = useState('')
  const [password, setPassword] = useState('');



  const [error, setError] = useState(false);
 
  
  const history = useNavigate()
  const email= JSON.parse(localStorage.getItem("email"))
  const pswd = JSON.parse(localStorage.getItem("password"))
 

  const handleSubmit = (e) => {
    e.preventDefault();
  
 
    
   
 


    gmail.length === 0 || password.length <= 7 ||email!==gmail || pswd!==password ? 
      setError(true) :
      history('/')




  }
  const crossSubmit = (e) => {
    history('/')

  }


  return <>
    <section className="  fixed-top ">
      <div className="container  py-md-0">
      
        <div className="row d-flex justify-content-center align-items-center ">
          <div className="col-10 col-md-8 col-lg-6 col-xl-5">
            <div className="card bg-dark text-white    " style={{borderRadius: "1rem" ,height:"570px"}}>
            <div className=" d-flex flex-row-reverse mb-1">
            <button type="button" className=" btn-close bg-white flex-row-reverse mt-2 me-2 text-end" data-bs-dismiss="toast" aria-label="Close" onClick={crossSubmit}></button>
            </div>
              <div className="card-body  text-center py-5 py-md-0 mt-md-0 mt-4">
              
              

                <div className="mb-md-3 mt-md-5  ">

                  <h2 className="fw-bold mb-2 text-uppercase">Login</h2>
                  <p className="text-white-50 mb-4">Please enter your login and password!</p>


                  <div className="form-outline form-white mb-4">
              
                 
                    <input type="email" id="typeEmailX" className="form-control " placeholder="Email" onChange={e => setGmail(e.target.value)} />
                    {error && email!==gmail && gmail.length >0?
                      <label className='text-danger' >Invalid Email!</label> : ""}  
                    {error && gmail.length <= 0 ?
                      <label className='text-danger' >Email Required</label> : ""}  
                  </div>

                  <div className="form-outline form-white mb-4">
                  
                    <input type="password" id="typePasswordX" className="form-control " placeholder="Password" onChange={e => setPassword(e.target.value)} />
                    {error && pswd!==password&& password.length > 7?
                      <label className='text-danger' > Invalid Password!</label> : ""}  
                    {error && password.length <= 7 ?
                      <label className='text-danger' > Required password of atleast 8 digit</label> : ""}
                  </div>

                 

                  <Link className="btn btn-outline-light btn-lg px-5" type="submit" to="/" onClick={handleSubmit}>Login</Link>



                </div>

                <div>
                  <p className="mb-0">Don't have an account? <Link to="/signup" className="text-white-50 fw-bold">Sign Up</Link>
                  </p>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </>
}
export default SignIn