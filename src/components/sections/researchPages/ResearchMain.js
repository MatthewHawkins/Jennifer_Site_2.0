import React from 'react';
import { Container, Carousel, Button, Row, Col } from 'react-bootstrap';
import { Jumbotron } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './researchPages.css';


function ResearchMain() {

    return(
        <div>
        <Carousel fade>
            <Carousel.Item>
                <div className='caroOne'></div>
                <Carousel.Caption>
                <h3>Pathways for Intro to CS: Story Programming</h3>
                <p>We investigate different ways of introducing students to CS based on their 
                    prior programming experience and interest in coding. We introduce a new approach 
                    for explaing computation using well-known stories before teaching coding, and we 
                    compare this approach with the traditional code-first approaches.
                </p>
                <p>
                    {/* REMINDER TO PUT LINKS IN FOR BUTTONS ONCE PAGES ARE BUILT */}
                        <Button variant="primary">Learn More</Button>
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='caroTwo'></div>
                <Carousel.Caption>
                <h3>Success in CS: Problem-Solving, Access/Usage, and Accreditation</h3>
                <p>What contributes to the success of CS students? In this research we investigate three areas that 
                    contribute to students' success in CS. One contributing factor is the problem-solving process and skills 
                    used by students to engage in computational thinking and the misconceptions students' develop about abstract 
                    computational concepts. Another factor includes the access and usage of computing resources to succeed as a 
                    CS major and in CS courses. We also look at how accreditation can help promote student success through proccess 
                    that support continuous improvement.
                </p>
                <p>
                    {/* REMINDER TO PUT LINKS IN FOR BUTTONS ONCE PAGES ARE BUILT */}
                        <Button variant="primary">Learn More</Button>
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='caroThree'></div>
                <Carousel.Caption>
                <h3>Peer Review: Self-Efficacy and Accuracy</h3>
                <p>This research investigates peer review in an academic setting. We are interested in learning how peer 
                    reviews impact and correlate to self-efficacy, and we also investigate how accurate students are in 
                    engaging in peer review. We are working on an online system that uses comparitive judgement, 
                    instead of absolute judgement, for reviewing and grading the quality of work more accurately.
                </p>
                <p>
                    {/* REMINDER TO PUT LINKS IN FOR BUTTONS ONCE PAGES ARE BUILT */}
                    {/* <Link></Link> */}
                    <Button variant="primary">Learn More</Button>
                </p>
                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
                <div className='caroFour'></div>
                <Carousel.Caption>
                <h3>Pathways for Intro to CS: Story Programming</h3>
                <p>We investigate different ways of introducing students to CS based on their 
                    prior programming experience and interest in coding. We introduce a new approach 
                    for explaing computation using well-known stories before teaching coding, and we 
                    compare this approach with the traditional code-first approaches.
                </p>
                <p>
                    {/* REMINDER TO PUT LINKS IN FOR BUTTONS ONCE PAGES ARE BUILT */}
                    {/* <Link></Link> */}
                    <Button variant="primary">Learn More</Button>
                </p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>

        <Jumbotron className='jumboOne'>
        <Row className='rows'>
            <Col sm={9} className="text-left text-md-right">
                <h1 className="titleFont"><span>Jennifer</span><span className='lastName'> Parham-Mocello</span></h1>
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
        </Row>
        </Jumbotron>
        </div>
    );

}

export default ResearchMain;

