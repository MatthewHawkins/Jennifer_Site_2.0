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
                        <p className='text-light'>I have taught a myriad of CS courses for almost 
                            20 years, but over the last 6 years, my focus is on very large, 
                            first-year courses. I use a design-centered, active-learning approach 
                            to teaching, and my mission is to establish a positive, inclusive 
                            community for all learners. Recent past courses I've taught include the 
                            following:
                        </p>
                            <br></br>
                            <ul>
                            <li><a href='http://classes.engr.oregonstate.edu/eecs/fall2017/cs160h-001'>
                                CS Orientation: CS 160
                            </a>
                            </li>
                            <li><a href='http://classes.engr.oregonstate.edu/eecs/fall2017/cs160h-001'>
                                Introduction to CS I: CS 161
                            </a>
                            </li>
                            <li><a href='http://classes.engr.oregonstate.edu/eecs/fall2017/cs160h-001'>
                                Introduction to CS II: CS 162
                            </a>
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