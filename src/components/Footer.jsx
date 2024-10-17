import React from 'react'
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

function Footer() {
  return (
    <div>
       <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '>
     
      <section className=''>
        <MDBContainer className='text-center text-md-start mt-5 p-2 text-dark' style={{marginTop:"300px"}}>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
              
              <i class="fa-solid fa-truck-fast"></i> E-Cart
              </h6>
              <p>
               Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla, tempore? Et voluptate, distinctio, explicabo error ipsum aspernatur dolorem 
               consectetur debitis accusamus excepturi animi exercitationem laboriosam at impedit optio amet culpa!
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Links</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Cart
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Wishlist
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Guides</h6>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                 React
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  React Bootstrap
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset text-decoration-none'>
                  Bootswatch
                </a>
              </p>
             
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>

              <div style={{ display: 'flex', alignItems: 'center' }}>
              <input type="text" className='form-control'  style={{ width: '200px', marginRight: '10px' }}  placeholder="Enter your email ID"/>
              <button className='btn btn-warning'>Subscribe</button>
              </div>

              <section className='d-flex justify-content-center justify-content-lg-between p-4'>

              <div>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='facebook-f' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='twitter' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='google' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='instagram' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='linkedin' />
                </a>
                <a href='' className='me-4 text-reset'>
                  <MDBIcon color='secondary' fab icon='github' />
                </a>
              </div>
              </section>

              {/* <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                New York, NY 10012, US
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@example.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 01 234 567 88
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p> */}
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      <div className='text-center p-4 text-dark' style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
      Copyright © 2023 Cart.Built with React.
        {/* <a className='text-reset fw-bold' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a> */}
      </div>
    </MDBFooter>
    </div>
  )
}

export default Footer
