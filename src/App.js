import React from "react";
import {Container, Row, Col } from "react-bootstrap";
import './App.css';
import Navbar from './components/Navbar';
import './components/navbar.css'



function App() {
  return (
    <>
    
      <Row>
    <Col><Navbar /></Col>
    <Col><p>HELLO</p></Col>
    </Row>
    
    </>
  );
}





{/* <Container fluid>    
        <Col xs={2} id="sidebar-wrapper">
                                        <Navbar />
                              </Col>
                              <Col  xs={10} id="page-content-wrapper">
                        this is a test
                  <p>ASDADSASDASDASDASDASDASDASDASD</p>
                  </Col>
        </Container> */}




export default App;
