import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import SignIn from "./Signin";
import SignUp from "./Signup";


 function RouteNavbar() {
  return (
 
    
      <Routes>
        <Route path="/" element={<Navbar />}/>
    
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      
          
       
      </Routes>
   

  );
}
export default RouteNavbar