import React from 'react'
import './Project.css'
import infi3 from '../../assets/infi3.png'
import restoPort from '../../assets/restoPort.webp'
import traPlain from '../../assets/traPlain.jpg'
import weath from '../../assets/weath.png'
import bmiPort from '../../assets/bmiPort.jpg'

function Project() {
  return (
    <>
      <div className="services" id='project'>
         <div className="service-title text-center mb-5 ">
            <h1 className='fs-1 ' style={{margin:10}}>PROJECT</h1>
            <img src={infi3} alt="" width={200} height={60}/>
         </div>
         <div className="row project-content ms-5 me-2 px-4 mt-5">
            {/* <div className="col-md-1" ></div> */}
            <div className="col-md-2  proj   text-light rounded text-center pt-3  my-5" >
              <h1 style={{color:'orange'}} className='mb-3 projName fs-3'>Restaurant App</h1>
              <img src={restoPort} alt="" width={180} height={120} />
              <p className='mt-2'>HTML , CSS</p>
              <a href="https://restaurant-spicedelight.netlify.app/" target='_blank' className='link'>View</a>
             </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 proj  text-light rounded text-center pt-3 my-5" >
            <h1 style={{color:'orange'}} className='mb-2 projName fs-3'>Travel Website</h1>
            <img src={traPlain} alt="" width={180} height={120} />
              <p className='mt-2'>HTML , CSS ,BOOTSTRAP</p>
             <a href="https://travelgoworld.netlify.app/" target='_blank' className='link'>View</a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 proj  text-light rounded text-center pt-3  my-5">
            <h1 style={{color:'orange'}} className='mb-5 projName fs-3'>Weather App</h1>
            <img src={weath} alt="" width={180} height={120} />
              <p className='mt-2'>javaScript , Restful Api</p>
              <a href="https://weather-app-ten-weld-70.vercel.app/" target='_blank' className='link'>View</a>
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-2 proj  text-light rounded text-center pt-3 my-5">
            <h1 style={{color:'orange'}} className='mb-3 projName fs-3'>BMI Calculator</h1>
            <img src={bmiPort} alt="" width={180} height={120} />
              <p className='mt-2'>React</p>
              <a href="https://bmi-calculator-five-lac.vercel.app/" target='_blank' className='link'>View</a>
            </div>
            <div className="col-md-1"></div>
         </div>
      </div>
    </>
  )
}

export default Project
