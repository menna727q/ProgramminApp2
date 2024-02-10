import React, { useState } from 'react';
import portStyle from './Portofolio.module.css'
export default function Portofolio () {
  
      const [imageSize, setImageSize] = useState('normal');
    
      const handleImageClick = () => {
        setImageSize(imageSize === 'normal' ? 'large' : 'normal');
      };
    return (
      <div>
        <div className="container mb-5">
            <h1 className='text-center fw-bold pt-5'>Portofolio</h1>
            <div className="line d-flex justify-content-center align-items-center pb-4">
            <div className={portStyle.line1}></div>
            <span><i class="fa-solid fa-code fs-4"></i></span>
            <div className={portStyle.line2}></div>
          </div>
            <div className="row g-4 ">
                <div className="col-md-4">
                   <div className="content  rounded-2 position-relative overflow-hidden">
                   <img src="images/image1.png" alt="" className={`w-100 rounded-2 ${portStyle.image} ${imageSize === 'large' ? 'imagelarge' : 'imagenormal'}`} onClick={handleImageClick}/>             
                <div className={`${portStyle.layer} w-100 h-100 start-0 top-0 position-absolute`}>
                       <i class="fa-solid fa-plus fs-2"></i>
                    </div>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="content rounded-2 position-relative overflow-hidden">
                    <img src="images/imag4.png" alt="" className={`w-100  rounded-2 ${portStyle.image}`} />
                    <div className={`${portStyle.layer} w-100 h-100 start-0 top-0 position-absolute`}>
                       <i class="fa-solid fa-plus fs-2"></i>
                    </div>
                   </div>
                </div>
                <div className="col-md-4">
                <div className="content rounded-2 position-relative overflow-hidden ">
                    <img src="images/image2.png" alt="" className={`w-100  rounded-2 ${portStyle.image}`} />
                    <div className={`${portStyle.layer} w-100 h-100 start-0 top-0 position-absolute`}>
                       <i class="fa-solid fa-plus fs-2"></i>
                    </div>
                   </div>
               </div>
                <div className="col-md-4">
                <div className="content rounded-2 position-relative overflow-hidden ">
                <img src="images/image2.png" alt="" className={`w-100  rounded-2 ${portStyle.image}`}/>
                <div className={`${portStyle.layer} w-100 h-100 start-0 top-0 position-absolute`}>
                       <i class="fa-solid fa-plus fs-2"></i>
                    </div>
                   </div>
               </div>
                <div className="col-md-4">
                <div className="content rounded-2 position-relative overflow-hidden ">
                    <img src="images/image1.png" alt="" className={`w-100  rounded-2 ${portStyle.image}`}/>
                    <div className={`${portStyle.layer} w-100 h-100 start-0 top-0 position-absolute`}>
                       <i class="fa-solid fa-plus fs-2"></i>
                    </div>
                   </div>
               </div>
                <div className="col-md-4">
                <div className="content rounded-2 position-relative overflow-hidden">
                    <img src="images/imag4.png" alt="" className={`w-100  rounded-2 ${portStyle.image}`} />
                    <div className={`${portStyle.layer} w-100 h-100 start-0 top-0 position-absolute`}>
                       <i class="fa-solid fa-plus " ></i>
                    </div>
                   </div>
                </div>
            </div>
        </div>
      </div>
    )
  
}
