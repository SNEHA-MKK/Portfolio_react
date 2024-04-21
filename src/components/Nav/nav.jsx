import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import './nav.css'
import AnchorLink from 'react-anchor-link-smooth-scroll';


function NavB() {
  return (
    <>
     <Navbar className='navBar mt-3'>
<Container >
  
  <Nav className='navCon ' >
  {/* <Navbar.Brand href="#home">Portfolio</Navbar.Brand> */}
    <AnchorLink className='anchor-link a-link' offset={50} href='#home'><Nav.Link href="" style={{color:'white'}}>Home</Nav.Link></AnchorLink>
    <AnchorLink className='anchor-link a-link' offset={50} href='#about'><Nav.Link href="#home" style={{color:'white'}}>About</Nav.Link></AnchorLink>
    <AnchorLink className='anchor-link a-link' offset={50} href='#project'><Nav.Link href="#features" style={{color:'white'}}>Projects</Nav.Link></AnchorLink>
    <AnchorLink className='anchor-link a-link' offset={50} href='#skill'><Nav.Link href="#pricing" style={{color:'white'}}>Skills</Nav.Link></AnchorLink>
    <AnchorLink className='anchor-link a-link' offset={50} href='#contact'><Nav.Link href="#pricing" className='contactMe' style={{color:'white'}}>Connect With Me</Nav.Link></AnchorLink>
  </Nav>
</Container>
</Navbar>
    </>
  )
}

export default NavB
