import React from 'react';
import '../body.css'


import { Jumbotron } from 'reactstrap';
import {Row, Col} from 'react-bootstrap';

import logo from '../photos/benny.jpg'

function AboutMe () {

        return (
            <Jumbotron className='jumboOne' id='AboutMe'>
            <Row className='rows'>
            <Col sm={9} className="text-left text-md-right">
                <h1 className="titleFont"><span>Jennifer</span><span className='lastName'> Parham-Mocello</span></h1>
                <br></br>
                <p className="small">I'm an Assistant Professor of computer science in the 
                    School of Electrical Engineering and Computer Science at Oregon State University. 
                    I fell in love with computer science while pursuing an undergraduate degree in 
                    secondary math education, and from then on, my focus turned to CS education. 
                    Immediately after my Bachelor's of Science in CS, I became an adjuct instructor at a 
                    community college, and my passion for teaching grew stronger. This desire to teach fulltime 
                    led me to pursue a MS degree in CS, which sparked my interested in how people learn CS, the 
                    best ways to teach CS, and the higher-order/logical thinking skills needed for CS. I finished 
                    my Master's of Science with more questions than answers, so I decided to return to school for 
                    a PhD focusing on how people solve problems in CS. My mission is to improve CS education 
                    through exploratory research and empirical evidence, best teaching practices, and community 
                    efforts supporting computational literacy for all.</p>
                    <br></br>
                <p className="small" className='awardFont'>
                    <b className='awardTitle'>Awards:</b>
                    <br/>
                    College of Engineering Austin Paul Award 2018, EECS Professor of the Year 2017-2018, 
                    Delta Tau Delta Fraternity Outstanding Teaching Award 2017, EECS Innovative Teaching Award 
                    2016-2017, EECS Outstanding Teaching Award 2015, Vice Provost’s Award for Excellence in 
                    Innovation – Online Teaching 2014, EECS Innovative Teaching Award 2013-2014, EECS Professor 
                    of the Year 2012-2013, Upsilon Pi Epsilon 2007
                </p>
            </Col>
            <Col sm={3} className="text-center">
                <img src={logo} className='img-fluid rounded' alt="Benny the Beaver and me"></img>
            <p className="small">
                <b>Contact Me</b>
                <br></br>
                2101 Kelley Engineering Center
                <br></br>
                <a href="mailto: parhammj@oregonstate.edu">parhammj@oregonstate.edu</a>
                <br></br>
                (541) 737-8895
            </p>
            </Col>
          </Row>
          <br></br>
          <br></br>
          <br></br>
          <Row className='text-center'>
            <div className="downArrow bounce">
                <img width="40" height="40" alt="" src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDMyIDMyIiBoZWlnaHQ9IjMycHgiIGlkPSLQodC70L7QuV8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCAzMiAzMiIgd2lkdGg9IjMycHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxwYXRoIGQ9Ik0yNC4yODUsMTEuMjg0TDE2LDE5LjU3MWwtOC4yODUtOC4yODhjLTAuMzk1LTAuMzk1LTEuMDM0LTAuMzk1LTEuNDI5LDAgIGMtMC4zOTQsMC4zOTUtMC4zOTQsMS4wMzUsMCwxLjQzbDguOTk5LDkuMDAybDAsMGwwLDBjMC4zOTQsMC4zOTUsMS4wMzQsMC4zOTUsMS40MjgsMGw4Ljk5OS05LjAwMiAgYzAuMzk0LTAuMzk1LDAuMzk0LTEuMDM2LDAtMS40MzFDMjUuMzE5LDEwLjg4OSwyNC42NzksMTAuODg5LDI0LjI4NSwxMS4yODR6IiBmaWxsPSIjMTIxMzEzIiBpZD0iRXhwYW5kX01vcmUiLz48Zy8+PGcvPjxnLz48Zy8+PGcvPjxnLz48L3N2Zz4=" />
            </div>
          </Row>
        </Jumbotron>
        );
}

export default AboutMe;