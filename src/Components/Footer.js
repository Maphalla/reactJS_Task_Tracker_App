import React from "react";
import { Link } from "react-router-dom";
const Footer=({text , logo})=>{
    return(
     <footer>
         <p>{text}</p>
         <Link to="/about" className="aboutLink">About</Link>
         <div>
           <img src={logo} alt="" className="logo-img"/>
         </div>
     </footer>
    );
 }
 export default Footer;