import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Row, Col, Container, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../body.css';
import logo5 from '../photos/acm-w.png'
import logo6 from '../photos/TAs.jpg'
import logo7 from '../photos/outreach.jpg'

function Service(){
    return(
    <Jumbotron className="jumboOne" id='Service'>
       <Container className="rows">
           <h1 className='mainFont'>Service</h1>
           <p className='rows'>
           I am the faculty advisor of the ACM-W student club, and I supervise a K-12 CS 
           Outreach group. I am also one of our ABET curriculum cordinators this year, and I 
           serve on the College of Engineering (COE) Engineering+ Taskforce, who has been tasked 
           with redoing the first-year experience for all engineers including a shared set of 
           first-year learning outcomes, living-learning community, and other co-curriculuar 
           activities termed Engineering Fridays. In addition to serving the School of EECS and 
           COE, I also serve my local community with outreach and the academic community by 
           reviewing papers and NSF proposals and chairing sessions at conferences.
           </p>
           <Row>
               <Col lg={4} className='text-center'>
                    <a href= 'https://groups.engr.oregonstate.edu/esc/association-computing-machinery-womens-chapter'>
                        <h2>ACM-W</h2>
                    </a>
                    <Image src={logo5} rounded/>
               </Col>
               <Col lg={4} className='text-center'>
                   <a href='#'>
                       <h2>Undergrad TAs</h2>
                   </a>
                    <Image src={logo6} rounded className='cirimg'/>
               </Col>
               <Col lg={4} className='text-center'>
                   <a href='#'>
                    <h2>K-12 Outreach</h2>
                   </a>
                   <Image src={logo7} rounded className='cirimg'/>
               </Col>
           </Row>

       </Container>
       </Jumbotron>
    );
}

export default Service;