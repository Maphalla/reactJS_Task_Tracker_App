import React from 'react'
import { Link } from "react-router-dom";

const About=()=> {
  return (
    <div>
       <h5>App name : <span>Task Tracker</span></h5>
       <h4>version 1.0.0</h4>
       <Link to="/" className="aboutLink">Home page</Link>
    </div>
  )
}

export default About;
