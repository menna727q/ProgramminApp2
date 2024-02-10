// import React, { Component } from 'react'
import React from 'react'
import conStyle from './Contact.module.css'
export default function Contact  () {
 
    return <>
          <div className='container'>
            <div className="row d-flex justify-content-center align-items-center flex-wrap text-center p-5">
                <div className="col-md-12">
                    <div className="content p-3">
                       <input type="text" name='username' id='username' placeholder='userName' className={`w-50 ${conStyle.inputform}`} />

                      </div>         
                     </div>
                <div className="col-md-12">
                     <div className="content p-3">
                        <input type="text"  name='userage' id='userage' placeholder='userAge' className={`w-50 ${conStyle.inputform}`} />

                     </div>              
                 </div>
                <div className="col-md-12">
                       <div className="content p-3">
                       <input type="email"  name='email' id='email' placeholder='userEmail' className={`w-50 ${conStyle.inputform}`} />

                       </div>
                </div>
                <div className="col-md-12">
                    <div className="content p-3">
                    <input type="password"  name='pass' id='pass' placeholder='userPassword' className={`w-50 ${conStyle.inputform}`} />

                    </div>
                </div>
                <div className="col-md-12">
                   <div className="content">
                      <button className={`rounded-2 ${conStyle.subbtn}  `}>Submit</button>
                   </div>
                </div>
            </div>
           
          </div>

    </>
    
  
}
