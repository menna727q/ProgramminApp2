import React, { Component } from 'react'
import aboutStyle from './About.module.css'

export default class About extends Component{
  
    render(){
        return <div className={aboutStyle.About}>
        <div className="container text-center d-flex align-items-center justify-content-center flex-wrap flex-column">
            <h1 className='pt-5'>About Our School</h1>
            <div className="line d-flex justify-content-center align-items-center flex-wrap pb-4">
            <div className={aboutStyle.line1}></div>
            <span><i class="fa-solid fa-code fs-4"></i></span>
            <div className={aboutStyle.line2}></div>
          </div>
            <div className="row pt-5">
                <div className="col-md-6">
                   <div className="content">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                   </div>
                </div>
                <div className="col-md-6">
                <div className="content">
                    <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
                   </div>
                </div>
            </div>
        </div>
        
        
        </div>
    }
    
  
}
