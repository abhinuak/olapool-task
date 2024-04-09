import Navbar from 'react-bootstrap/Navbar';
import logo from '../images/LOGO2 8.png'
function Header() {
  return (
    <Navbar className="bg-primary mb-5">
    
      <Navbar.Brand href="#home">
        <img
          alt=''
          src={logo}
          width="150"
          height="30"
          className="d-inline-block align-top ms-3"
        />
        
      </Navbar.Brand>
      <div className='ms-auto me-5'>
        <h6 className='text-light mb-2 fw-bold'>Hi , Grand cafe</h6>
      <select name="" id="" className='ps-2 pe-2 rounded'>
        <option value="">Account</option>
      </select>
      </div>
  </Navbar>
  );
}

export default Header;