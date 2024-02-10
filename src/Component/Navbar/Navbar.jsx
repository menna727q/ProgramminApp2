import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import style from './Navbar.module.css'
export default function Navbar() {

  let location = useLocation();
  let subpage=location.pathname.split('/')?.[1];
  console.log(subpage);
function linkess(type=null){
  let classes= 'nav-link text-white';
  if(type==subpage){
    classes+='nav-link bg-black border-0 rounded p-2'
  }
  return classes
}

    return <>
    <nav className={`navbar navbar-expand-lg ${style.navbar}`}>
      <div className="container">
    <a className="navbar-brand fs-2" aria-current="page"  href="/Home">Programming School</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav ms-auto mb-2 mb-lg-0 list-unstyled">
        <li className="nav-item ">
          <a className={linkess('About')} href="/About">About</a>
        </li>
        <li className="nav-item">
          <a className={linkess('Portofolio')} href="/Portofolio">Portofolio</a>
        </li>
        <li className="nav-item">
          <a className={linkess('Contact')} href="/Contact">Contact</a>
        </li>
      </ul>
    
    </div>
  </div>
</nav>

        </>

   
    
  
}
