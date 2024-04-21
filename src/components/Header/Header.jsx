import React from 'react'
import './Header.css'
import custo1 from '../../assets/custo1.jpg'
import sneha from '../../assets/sneha.jpeg'



function Header() {
  return (
   
    <div className='header' id='home'>
     
      <div className='row ms-5'>
      <div className="col-md-1"></div>
      <div className="col-md-5">
            <h1 className='text-center fs-3 mt-4 mb-4 pb-2'><span className='name fs-2'>I'm Sneha Mohandas</span>,<br /> Mearn Stack Developer</h1>
            <p className='mb-5' >I am Sneha, a dynamic Fullstack Developer, I warmly welcome you all
to visit my portfolio and explore the innovative projects and solutions I've crafted.With a strong background in both front-end and back-end development, I thrive on creating robust and innovative solutions that exceed expectations.</p>
            <div className='header-action'>
              <div className='row'>
              {/* <div className="col-md-1"></div>
                <div className="col-md-4 header-connect" style={{textAlign:'center'}}><a href='#contact'>Connect with me</a></div>
                <div className="col-md-1"></div>
                <div className='col-md-4 header-resume' style={{textAlign:'center'}}>My resume</div>
                <div className="col-md-1"></div> */}
              </div>
            </div>
          </div>
          
        {/* <div className="col-md-1"></div> */}
          <div className="col-md-5 mt-5 pt-4 myImg text-center">
            <img src={sneha} alt=""  className='image'/>
          </div>
          
      </div>
    </div>
  )
}

export default Header
