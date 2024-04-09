import React from 'react'
import banner from '../images/full-shot-people-cleaning-together 1.png'
import Header from './Header'
import movie from '../images/full-shot-people-cleaning-together 2.png'
import tv from '../images/full-shot-people-cleaning-together 3.png'
import bill from '../images/full-shot-people-cleaning-together 4.png'
import radio from '../images/full-shot-people-cleaning-together 5.png'
import Footer from './Footer'
import Header2 from './Header2'
import SelectStateArea from './SelectStateArea'

function Olapool() {

  const isSmallScreen = window.innerWidth < 768; 
 

  return (
   <>
    {isSmallScreen ? 
        
          < Header2/> : <Header/>
      }

      
 
<div style={{height:'800px'}}>
  
<div className="container">
   <img src={banner} alt="" className='img-fluid'/>
   </div>
   
  <div className='mb-4'>
    <h4 className='text-center text-secondary mt-4 fw-bolder'>Select Services</h4>
  </div>
  <div className=" d-flex justify-content-center align-items-center gap-4 m-1">
    <div>
    <img src={movie} alt="" width={220} className='img-fluid '/> 
    <br />
    <h4 className='text-center text-secondary fw-bold'>Theatre</h4>
    </div>
    
    <div>
    <img src={tv} alt="" width={220}  className='img-fluid '/>
    <br />
    <h4  className='text-center text-secondary fw-bold'>TV</h4>
    </div>
    <div>
    <img src={bill} alt="" width={220} className='img-fluid '/>
    <br />
    <h4  className='text-center text-secondary fw-bold'>Billboard</h4>
    </div>
<div>
<img src={radio} alt="" width={220}  className='img-fluid'/>
<br />
    <h4  className='text-center text-secondary fw-bold'>Radio</h4>

</div>
  </div>
{
  isSmallScreen ?
  <SelectStateArea/>:<Footer/>
}




</div>
   </>
  )
}

export default Olapool