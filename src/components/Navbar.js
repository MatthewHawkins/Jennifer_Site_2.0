import React from 'react';
import {Navbar, Nav} from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';


function myNavbar(){

    return(
        <>


 <Navbar expand='lg' bg='primary' variant='dark' fixed='top' id='sideNav'>
             <Navbar.Brand href="#page-top" className='js-scroll-trigger'>Jennifer Parham-Mocello, PhD</Navbar.Brand>
                 <span className='d-block d-lg-none'> Jennifer</span>
            
             <Nav.Link className ='nav-link' href='#'>Home</Nav.Link>
             <Nav.Link className ='nav-link' href='#'>Research</Nav.Link>
             <Nav.Link className ='nav-link' href='#'>Teaching</Nav.Link>
             <Nav.Link className ='nav-link' href='#'>Service</Nav.Link>
             <Nav.Link className ='nav-link' href='#'>Contact</Nav.Link>
         </Navbar>
            {/* <Nav className="d-none d-md-block bg-light sidebar"
                activeKey="/home"
                >
                    <div className="sidebar-sticky"></div>
                <Nav.Item>
                    <Nav.Link href="/home">Active</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-1">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="link-2">Link</Nav.Link>
                </Nav.Item>
                <Nav.Item>
                    <Nav.Link eventKey="disabled" disabled>
                    Disabled
                    </Nav.Link>
                </Nav.Item>
            </Nav> */}
        </>




        // <Navbar expand='lg' bg='primary' variant='dark' fixed='top' id='sideNav'>
        //     <Navbar.Brand href="#page-top" className='js-scroll-trigger'>Jennifer Parham-Mocello, PhD</Navbar.Brand>
        //         <span className='d-block d-lg-none'> Jennifer</span>
            
        //     <Nav.Link className ='nav-link' href='#'>Home</Nav.Link>
        //     <Nav.Link className ='nav-link' href='#'>Research</Nav.Link>
        //     <Nav.Link className ='nav-link' href='#'>Teaching</Nav.Link>
        //     <Nav.Link className ='nav-link' href='#'>Service</Nav.Link>
        //     <Nav.Link className ='nav-link' href='#'>Contact</Nav.Link>
        // </Navbar>
    );

}


export default myNavbar;

