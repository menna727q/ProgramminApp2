import React from 'react'
import homesStyle from './Home.module.css'
export default function Home() {
  

    return <>
    <div className={homesStyle.home}>
    <div className={` pt-5 container`}>
      <div className="content d-flex justify-content-center align-items-center flex-wrap flex-column">
          <img src="images/LogoforHome.jpg" className='w-25 rounded-circle p-2' alt="" />
          <h2 className='pt-4 fw-bold '>Programming School</h2>
          <div className="line d-flex justify-content-center align-items-center pb-4">
            <div className={homesStyle.line1}></div>
            <span><i class="fa-solid fa-code fs-4"></i></span>
            <div className={homesStyle.line2}></div>
          </div>
          <p>learn Ai - Gaming - Web </p>
      </div>
    </div>
  </div>
    </>
   
      
    
 
}
