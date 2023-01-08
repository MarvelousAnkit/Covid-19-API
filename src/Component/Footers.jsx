import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./footer.css"




function Navbar() {
  
  return (
    <div className='m-body'>
    <footer >
      <div className="waves">
        
        <div className="wave" id='wave1'>sndkcdsncsd</div>
        <div className="wave" id='wave2'></div>
        <div className="wave" id='wave3'></div>
        <div className="wave" id='wave4'></div>
      </div>kdckjs
      <ul className="social-icon" >
        <li><a href="www.facebook.com"><ion-icon name="logo-facebook"><img src="" alt="" /></ion-icon></a></li>
        <li><a href=""><ion-icon name="logo-instagram"></ion-icon></a></li>
        <li><a href=""><ion-icon name="logo-linkedin"></ion-icon></a></li>
        <li><a href=""><ion-icon name="logo-github"></ion-icon></a></li>
      </ul>
      <ul className='menu'>
        <li><a href="">Home </a></li>
        <li><a href="">About</a></li>
        <li><a href="">Symptoms</a></li>
        <li><a href="">Prevention</a></li>
      </ul>
      <p>
      Copyright © 2023 Covid Analysis | All Right Reserved
      </p>
    </footer>
    </div>

  )
}

export default Navbar