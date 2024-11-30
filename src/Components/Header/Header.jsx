import React, { useState } from 'react';
import {
  MDBContainer,
  MDBNavbar,
  MDBNavbarBrand,
  MDBNavbarToggler,
  MDBNavbarNav,
  MDBNavbarLink,
  MDBIcon,
  MDBCollapse
} from 'mdb-react-ui-kit';
function Header() {
  const [openNav, setOpenNav] = useState(false); // Use useState for toggling

  return (
    <>
      <MDBNavbar expand='lg' light bgColor='white'>
        <MDBContainer fluid>
          <MDBNavbarBrand href='#'>👩🏻Athila Pareeth</MDBNavbarBrand>
          <MDBNavbarToggler
            aria-expanded='false'
            aria-label='Toggle navigation'
            onClick={() => setOpenNav(!openNav)} // Toggle the state on click
          >
            <MDBIcon icon='bars' fas />
          </MDBNavbarToggler>
          <MDBCollapse navbar show={openNav}> {/* Use 'show' prop instead of 'open' */}
            <MDBNavbarNav>
              <MDBNavbarLink active aria-current='page' href='./Home'>
                Home
              </MDBNavbarLink>
              <MDBNavbarLink  active aria-current='page' href='./Projects'>Projects💻</MDBNavbarLink>
              <MDBNavbarLink  active aria-current='page' href='./Contact'>Contact☎️</MDBNavbarLink>
              <MDBNavbarLink  href='#' tabIndex={-1} aria-disabled='true'>
                {/* <button>light/Dark</button> */}
              </MDBNavbarLink>
            </MDBNavbarNav>
          </MDBCollapse>
        </MDBContainer>
      </MDBNavbar>
    </>
  );
}

export default Header;