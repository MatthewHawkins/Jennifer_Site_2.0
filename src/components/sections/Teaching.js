import React from 'react';
import { Jumbotron } from 'reactstrap';
import { Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../body.css';

function Teaching(){

    return(
        <div>
        <Jumbotron className='jumboTwo' id='Teaching'>
                <Row className='rows'>
                    <Col sm={1}>
                    </Col>
                    <Col sm={8} className='text-left'>
                        <h1 className='display-4 text-white'>Teaching</h1>
                        <p className='text-light rows'>I have taught a myriad of CS courses for almost 
                            20 years, but over the last 6 years, my focus is on very large 
                            first-year courses. I use a design-centered, active-learning approach 
                            to teaching, and my mission is to establish a positive, inclusive 
                            community for all learners. 
                            
                            <br></br><br></br>
                            Computational thinking and problem solving are at the heart of my teaching and 
                            research, and I design curriculum and workshops with a focus on designing a solution 
                            to a problem before expressing the solution in the formal syntax of a computer language.  
                            This holistic approach to computer science education helps to include a larger diverse 
                            group of students who might be intimidated by programming or find programming more 
                            frustrating than designing computational solutions/algorithms to problems.  In addition, 
                            this approach teaches students to systematically create algorithmic solutions to problems 
                            rather than hacking out a solution in code, which in turn prepares our students to be better 
                            problem solvers in their later classes and in their professional career. 

                            <br></br><br></br>
                            INCLUDE INFO ABOUT ENGR 100-103 DESIGN
                            
                            <br></br><br></br>
                            <h3>Courses I have taught:</h3>
                        </p>
                            <br></br>
                            <ul className='text-light'>
                            <li>
                                Currently Teaching - ENGR 102: Design Engineering and Problem Solving
                            
                            </li>
                            <br></br>
                            <li>
                                ENGR 103: Engineering Computation and Algorithmic Thinking
                            
                            </li>
                            <li>
                                CS 160: CS Orientation (Honors and Non-Honors)
                            
                            </li>
                            <li>
                                CS 161: Introduction to CS I
                            
                            </li>
                            <li>
                                CS 162: Introduction to CS II
                            
                            </li>
                            <li>
                                CS 275: Introduction to Databases
                            
                            </li>
                            <li>
                                CS 391: Ethical Issues in Computer Science
                            
                            </li>
                            <li>
                                CS 440: Database Management Systems
                            
                            </li>
                            <li>
                                CS 480: Translators:
                            
                            </li>
                            <li>
                                ECE 151: Programming I/Embed Control Lab
                            
                            </li>
                            <li>
                                ENGR 407: MECOP/Computer Science
                            
                            </li>                            
                            </ul>


                    </Col>
                </Row>
                <Row><br></br></Row>
       </Jumbotron>
        </div>
    );
}

export default Teaching