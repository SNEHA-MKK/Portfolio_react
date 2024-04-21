import React from 'react'
import './Skill.css'
import html5 from '../../assets/html5.png'
import css from '../../assets/css.png'
import reactJs from '../../assets/reactJs.png'
import bootstrap from '../../assets/bootstrap.png'
import java2 from '../../assets/java2.png'
import javaScrript from '../../assets/javaScrript.png'

function Skill() {
  return (
    <>
      
      

      <div className='main' id='skill'>
         <div className="mainHead text-center mb-5 mt-5">
          <h1>Skills</h1>
          <p className='my-skill fs-5'>My Skills</p>
         </div>

         <div className="row mb-5 ms-5">
         <div className="col-md-2"></div>
          <div className="col-md-2 skill-div mb-4">
            <img src={html5} alt=""  />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 skill-div mb-4">
            <img src={css} alt="" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 skill-div mb-4">
            <img src={bootstrap} alt=""  />
          </div>
          <div className="col-md-1"></div>
          
        
         </div>

         <div className="row mb-3 ms-5">
         <div className="col-md-2"></div>
          <div className="col-md-2 skill-div mb-4">
            <img src={reactJs} alt=""  />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 skill-div mb-4">
            <img src={javaScrript} alt="" />
          </div>
          <div className="col-md-1"></div>
          <div className="col-md-2 skill-div mb-4">
            <img src={java2} alt=""  />
          </div>
          <div className="col-md-1"></div>
        
        
         </div>
  
         
      </div>
    </>
  )
}

export default Skill

