import React, { Component } from 'react'
import fooStyle from './Footer.module.css'
export default function Footer () {
 return<>
 < div className={` ${fooStyle.footerclass}`}>

<div className={`container `}>
 <div className="row">
   <div className="col-md-4">
     <div className="content text-center">
       <h4 className='text-uppercase fs-2'>Location</h4>
       <p>2215 John Daniel Drive</p>
       <p className='pt-1'>Clark, MO 65243</p>
     </div>

   </div>
   <div className="col-md-4">
     <div className="content">
     <h4 className='text-uppercase fs-2'>About The Web</h4>
    <div className="icons fs-5 d-flex  justify-content-between w-50 g-2 ">
      <span className={`p-1 ${fooStyle.iconsbord}`}><i class="fa-brands fa-facebook"></i></span>
      <span className={`p-1 ${fooStyle.iconsbord}`}><i class="fa-brands fa-twitter"></i></span>
      <span className={`p-1 ${fooStyle.iconsbord}`}><i class="fa-brands fa-linkedin"></i></span>
      <span className={`p-1 ${fooStyle.iconsbord}`}><i class="fa-solid fa-globe"></i></span>
    </div>
     </div>
   </div>
   <div className="col-md-4">
     <div className="content text-center">
     <h4 className='text-uppercase fs-3'>ABOUT FREELANCER</h4>
     <p>Freelance is a free to use, licensed Bootstrap theme created by Route</p>
     </div>
   </div>
  
 </div>

</div>

</div>
<div className={`${fooStyle.footerfooter}`}>
  <div className="container text-center">
    <p className={`pt-4 ${fooStyle.pa} `}>Copyright © ProgrammingWebsite 2024</p>
  </div>
 </div>
 </> 
      
    
  
}
