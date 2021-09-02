import React from 'react';
import {Image, Container, Row, Nav} from 'react-bootstrap';
import {NavbarData} from './NavbarData.js'
import logo from './photos/headshot.jpg'
import logo2 from './photos/OSU_horizontal_2C_O_over_B.png'

import 'bootstrap/dist/css/bootstrap.min.css';
import '../App.css';


function myNavbar(){
    
    return(
        <div className='Sidebar'>
            <Container>
            <Row className='centered'>
            {/* <Image src={logo} className='profilePhoto' roundedCircle/> */}
            <img src={logo} className='rounded-circle profilePhoto' alt='Jennifer and Benny'></img>
            </Row>
            <br></br>
            <Row>
            <ul className='SidebarList'>
            {NavbarData.map((val, key) =>{
                return( 
                <li 
                key={key} 
                className="Row"
                id={document.activeElement === 'body' ? "active" : "NAN"}
                // onClick={()=> {
                    // window.location.pathname = val.link
                // }}
                >  
                    <Nav.Link href={val.link} className='Row'>
                    <div id="icon">{val.icon}</div>
                    <div id="title">{val.title}</div>
                    </Nav.Link>
                </li>
                );
            })}
            </ul>
            </Row>
            <Row className='centeredBottom'>
            <img src={logo2} style={{width:140}}></img>
            </Row>
            </Container>
        </div>
    );

}


export default myNavbar;