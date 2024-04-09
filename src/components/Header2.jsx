import React from 'react'
import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/3 62.png'
function Header2() {
  return (
<>

<Navbar className="bg-light mb-5">
    
    <Navbar.Brand href="#home">
      <img
        alt=''
        src={logo}
        width="150"
        height="30"
        className="d-inline-block align-top ms-3"
      />
      
    </Navbar.Brand>
    
</Navbar></>
  )
}

export default Header2