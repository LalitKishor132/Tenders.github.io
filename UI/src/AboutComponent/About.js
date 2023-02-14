import React from 'react'
import './About.css';
import axios from 'axios';
function About() {

 const test=()=>
  {
    axios.get("http://localhost:3001/user/").then((result)=>{
      console.log(result)
    })
  }
  return (
    <div>
        {/* Start About  */}
  <div className="about-section-box">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 col-md-6 col-sm-12">
          <img src="assets/images/aboutimage.png" alt="" className="img-fluid" />
        </div>
        <div className="col-lg-6 col-md-6 col-sm-12 text-center">
          <div className="inner-column">
            <h1>Welcome To <span>Tenders about page</span></h1>

            <h2>API Test</h2>
            <button onClick={test}> Click here to make Api</button><br/>
            <a className="btn btn-lg btn-circle btn-outline-new-white" >Learn more</a>
          </div>
        </div>
      </div>
    </div>
  </div>
 {/* End About */}
    </div>
  )
}

export default About