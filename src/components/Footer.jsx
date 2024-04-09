import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';
import logo from '../images/LOGO2 8.png'

function Footer() {
  return (
    <>
    <MDBFooter bgColor='[#101D46] ' className='text-center text-lg-start text-muted pt-3 mt-5'>
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='2' xl='4' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary'  className='me-3' />
                <img src={logo} alt="" />
              </h6>
              
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4 text-light m-3'>
              <h6 className='text-uppercase fw-bold mb-4 ' >About olapool</h6>
              <p>
                <a href='#!' className='text-reset'>
                  about us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  contact us
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  newsroom
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  investersrelation
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  careers
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  legal
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4 text-light m-3'>
              <h6 className='text-uppercase fw-bold mb-4'>Support</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Product support
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Report abuse
                </a>
              </p>
              
            </MDBCol>

            <MDBCol md='4' lg='3' xl='2' className='mx-auto mb-md-0 mb-4 text-light m-3'>
              <h6 className='text-uppercase fw-bold mb-4'>Resources</h6>
              <p>
                <MDBIcon color='secondary' icon='' className='me-3' />
                Theatre
              </p>
              <p>
                <MDBIcon color='secondary' icon='' className='me-3' />
                TV
              </p>
              <p>
                <MDBIcon color='secondary' icon='' className='me-3' /> 
                Billbord
              </p>
              <p>
                <MDBIcon color='secondary' icon='' className='me-3' /> 
                Radio
              </p>
            </MDBCol>


            <MDBCol md='4' lg='3' xl='2' className='mx-auto mb-md-0 mb-4 text-light m-3'>
              <h6 className='text-uppercase fw-bold mb-4'>Accounts</h6>
              <p>
                <MDBIcon color='secondary' icon='' className='me-3' />
                My Account
              </p>
              <p>
                <MDBIcon color='secondary' icon='' className='me-3' />
              Create Account
              </p>
             
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
    </MDBFooter>
    
    </>
  )
}

export default Footer