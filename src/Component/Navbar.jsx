import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./navbar.css"
import eksath from  "./eksath.png"
import corona from "./corona.png"


function Navbar() {
  
  return (
    <div className='main'>
      <nav class="navbar navbar-expand-lg navbar-light  p-3 navstyles_ ">
  <a class="navbar-brand ps-5 covid" href="#"> <strong> COVID-19 Tracker </strong></a>
  <button class=" navbar-toggler hellos" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon success"></span>
  </button>

  <div class="collapse navbar-collapse" id="navbarSupportedContent">
    <ul class="navbar-nav ms-auto pe-5">
      <li class="nav-item active ">
        <a class="nav-link covid" href="#">Home</a>
      </li>
      <li class="nav-item ">
        <a class="nav-link covid" href="#">World Wide</a>
      </li>
      <li class="nav-item">
        <a class="nav-link covid" href="#">Contact Us</a>
      </li>
      
      
    </ul>
    
  </div>
</nav>

{/* <div className="main_header">
  <div className="row w-100 h-100">
    <div className="col-lg-5 col-md-5 col-12 order-lg-1 order-2">
    <div className="leftside w-100 h-100 d-flex justify-content-centeral align-items-center">
      <img className='img1 ps-5' src={eksath} alt="" srcset="" />
    </div>
    </div>
    <div className="col-lg-7 col-md-7 col-12 order-lg-2 order-1">
    <div className="rightside w-100 h-100 d-flex justify-content-centeral align-items-center ">
      <h1>Let's Stay Safe & Fight Together Against Cor <span className='corona'>
        <img  className='img2' src={corona} alt="" srcset="" />
        </span> na Virus</h1>
    </div>
    </div>
  </div>
</div> */}


      
  



    
    </div>

  )
}

export default Navbar