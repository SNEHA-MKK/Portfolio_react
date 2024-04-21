import React from 'react'
import './About.css'
import code2 from '../../assets/code2.jpg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faPhone, faUser } from '@fortawesome/free-solid-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'





function About() {
  return (
    <div className='about mt-5' id='about'>
        
            <div className='text-center mb-5 mt-5'>
               
                <h1>About Me</h1>
                <span className='abt-intro fs-4'>introduction</span>
               
            </div>
           
            
        <div className='row about ms-5'>
            
                 <div className="col-md-1"></div>
                <div className='col-md-4'>
                    <div class="about-image">
                        <img src={code2} alt="" width={400} height={270}/> 
                    </div>
                </div>
                <div className="col-md-1"></div>
                <div className='col-md-5'>
                    <div class="about-details">
                        <div class="about-para">
                            <p>I am a passionate and experienced full-stack developer specializing in the MERAN (MongoDB, Express.js,React, Angular, Node.js) stack. With a strong background in both front-end and back-end development, I thrive on creating robust and innovative solutions that exceed expectations.</p>
                        </div>
                        <div >
                            <div className='mb-2'>
                            <FontAwesomeIcon icon={faUser} />
                                <span className='ms-2'>Sneha Mohandas</span>
                            </div>
                            <div className='mb-2'>
                            <FontAwesomeIcon icon={faPhone} />
                                <span  className='ms-2'>7034014860</span>
                            </div>
                            <div className='mb-2'>
                            <FontAwesomeIcon icon={faEnvelope} />
                                <span className='ms-2'>sneha.mohandas.kk@gmail.com</span>
                            </div>
                            <div className='mb-2'>
                            <FontAwesomeIcon icon={faGithub} />
                                <span className='ms-2'>snehaMKK</span>
                            </div>
                        </div>
                    </div>
                </div>
            
        </div>
      
    </div>
  )
}

export default About
