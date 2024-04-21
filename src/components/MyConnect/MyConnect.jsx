import React from 'react'
import './MyConnect.css'
import { faInstagram, faLinkedin, faWhatsapp } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import Footer from '../Footer/Footer'

function MyConnect() {
  return (
    <div className='container-fluid' id='contact'>
      
   <h2 className='con text-center mt-5 mb-5 text-white fs-1'>Contacts</h2>
        <div className='row contact1 mt-5 mb-5'>
          <div className="col-md-2"></div>
             <div class="col-md-3  ">
              <div>
                <h3 className='text-center mt-4 text-info let' >Let's Connect</h3><br />
                <p>I am a passionate and experienced full-stack developer specializing in the MERAN (MongoDB, Express.js,React, Angular, Node.js) stack. With a strong background in both front-end and back-end development, I thrive on creating robust and innovative solutions that exceed expectations.</p>
              </div><br />
                <div className='icon-set'>
                  <div class="icon"><FontAwesomeIcon icon={faLinkedin} style={{color: "#21b0ba",}} /></div>
                  <div class="icon"><FontAwesomeIcon icon={faEnvelope} style={{color: "#21b0ba",}} /></div>
                  <div class="icon"><FontAwesomeIcon icon={faInstagram} style={{color: "#21b0ba",}}/></div>
                  <div class="icon"><FontAwesomeIcon icon={faWhatsapp} style={{color: "#21b0ba",}}/></div>
                </div>
                
            </div>

            <div className="col-md-1"></div>

            <div className='col-md-6 form  mb-2 '>

                <input className='bg' type="text"  placeholder=' Enter your Name'/> <br />
                <input className='bg' type="text"  placeholder=' Enter your Email'/> <br />
                <textarea className='bg' name="" id="" cols="30" rows="10" placeholder='  Enter your message here'></textarea> <br />
                <button className='con-but'>Send</button>

            </div> 
        </div>
       <Footer/>
    </div>
  )
}

export default MyConnect
