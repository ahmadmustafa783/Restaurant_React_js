import React from "react"

import { Link } from "react-router-dom"
import { useState } from "react"
import { useNavigate } from "react-router-dom"

function SignUp(){
    const [gmail,setGmail]=useState('')
    const [name, setName] = useState('');
    const [password, setPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');

  
    
   
    const [error, setError] = useState(false);
    const history = useNavigate()
   
    const handleSubmit=(e)=>{
        e.preventDefault();
        Storage();
        gmail.length===0||password.length===8 ||retypePassword!==password ||name.length===0?
            setError(true):
            history('/signin')
        }
    const Storage=()=>{
   
    
    localStorage.setItem("email",JSON.stringify(gmail))
    localStorage.setItem("name",JSON.stringify(name))
    localStorage.setItem("password",JSON.stringify(password))
}
const crossSubmit = (e) => {
  history('/')

}



    return<>
        <section className=" fixed-top ">
  <div className="container ">
    <div className="row d-flex justify-content-center align-items-center ">
      <div className="col-10 col-md-8 col-lg-6 col-xl-5">
        <div className="card bg-dark text-white" style={{borderRadius: "1rem" ,height:"570px"}}>
        <div className=" d-flex flex-row-reverse mb-1">
            <button type="button" className=" btn-close bg-white flex-row-reverse mt-2 me-2 text-end" data-bs-dismiss="toast" aria-label="Close" onClick={crossSubmit}></button>
            </div>
          <div className="card-body p-5 text-center">

            <div className="mb-md-3 mt-md-2 ">

              <h2 className="fw-bold mb-4 text-uppercase">Sign-up</h2>
              <div className="form-outline form-white mb-4">
                <input type="text" id="typePasswordX" className="form-control " placeholder="Name"  onChange={e=>setName(e.target.value)}/>
                {error&&name.length<=0?
                <label className='text-danger'> Name Required</label>:""}
              </div>
              

              <div className="form-outline form-white mb-4">
                <input id="user_email" name="user_email" type="email" className="form-control "  placeholder="Email"  onChange={e=>setGmail(e.target.value)}/>
                {error&&gmail.length<=0?
                 <label className='text-danger' for="user_name"> Email Required</label>:""}
              </div>

              <div className="form-outline form-white mb-4">
                <input type="password" id="typePasswordX" className="form-control " placeholder="Password"  onChange={e=>setPassword(e.target.value)}/>
                {error&&password.length<=8?
                <label className='text-danger' > Required password of atleast 8 digit</label>:""}
              </div>
              <div className="form-outline form-white mb-3">
                <input type="password" id="typePasswordX" className="form-control " placeholder="Retype Password"  onChange={e=>setRetypePassword(e.target.value)}/>
                {error&&password!==retypePassword?
                <label className='text-danger' > Password doesn't match</label>:""}
              </div>

             

              <Link to="/" className="btn btn-outline-light btn-lg px-5" type="submit" onClick={handleSubmit}>Sign-up</Link>

             

            </div>

          

          </div>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
}
export default SignUp