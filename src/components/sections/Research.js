import { Jumbotron } from 'reactstrap';
import { Container, Row, Col, Button } from 'react-bootstrap';
import '../body.css'

function Research() {

    return(
        <div>
            <Jumbotron className="jumboOne" id='Research'>
                <Container className="">
                    <h1 className='mainFont'>Research</h1>
                </Container>
                <Container>
                    <p className='rows'>I research computer science education from a computer science perspective, 
                    and I use my research activities to make informed decisions about different pedagogical strategies 
                    that improve the future of computer science education. </p>
                    <br></br>
                    <p className='rows'>Currently, I am PI on a large National Science Foundation CSforAll grant for $1,000,000 to 
                        support the development of CS curriculum for 6th and 7th grade teachers and students at a local 
                        dual-language (Spanish and English) middle school. The focus of the grant is to broaden 
                        participation in CS by delaying programming and using board games to explain CS concepts, 
                        while making learning CS fun engaging, and collaborative. 
                    </p>
                    <br></br>
                    <p className='rows'>
                    More recently, I am working with another assistant professor from Civil Engineering to start a 
                    new computational engineering for one planet degree, and we were one of five universities award 
                    $30,000 from the Lemelson Foundation to investigate how to start this new degree. We see this as a 
                    way to build a partnership between multiple schools in the college of engineering, as well as with
                    other colleges outside engineering, such as Business, Agriculture Sciences, Forestry, Science, 
                    Liberal Arts, etc. This collaborative degree will broaden participation in computation and build 
                    relationships between faculty from different academic units.
                    </p>
                    <br></br><br></br>
                </Container>
                <Container className="text-center btnResearch">
                    <p>Click here to learn more about my current projects: </p>
                    <Button href='/research'>See Current Projects</Button>
                </Container>
                <br></br><br></br>
            <Container>
            <p className='rows'>
            I have graduated one PhD student and nine MS students (one of the PhD students as co-major professor), 
            and currently, I am the major advisor for three PhD students and three MS students. Three of my graduate students, 
            Beatrice Moissinac, Ph.D., Ernie Bodle, M.S., and Shannon Ernst, M.S., have published and presented their thesis 
            work on computer science education in well-known, peer-reviewed conference papers. Furthermore, Roger Song, M.S., 
            received a position as instructor of CS in the School of EECS, due to his excellent teaching as a graduate teaching assistant.
            </p>
            </Container>
            <Container className='padding'>
            <Row className='rowresearch'>
                <Col md={3}>
                    <h2>PhD Students</h2>
                    <p>
                        Paris Kathalas (Current)<br></br>
                        Abdullah Azzouni(Current)<br></br>
                        Eman Almadhoun (Current)<br></br>
                        Beatrice Moissinac (Fall 2019)
                    </p>
                </Col>
                <Col md={3}>
                    <h2>MS Students</h2>
                    <p>
                        Ayushi Gupta (Current)<br></br>
                        Jason Weber (Current)<br></br>
                        Aiden Nelson (Current)<br></br>
                        Pallavi Sapale (Spring 2021)<br></br>
                        Roger Song (Fall 2020)<br></br>
                        Chris Kawell (Summer 2020)<br></br>
                        Fengfei Zheng (Winter 2020)<br></br>
                        Ernie Bodle (Fall 2019)<br></br>
                        Asma Alghamdi (Spring 2019)<br></br>
                        Shannon Ernst (Fall 2018)<br></br>
                        Hanadi Alqahtani (Fall 2018)<br></br>
                        Ashwaq Alsalmi (Summer 2018)
                    </p>
                </Col>
                <Col md={4}>
                    <h2>Undergraduate Researchers</h2>
                        <p>
                        Madelyn Smith (Fall 2021 – present)<br></br>
                        Garrett Berliner (Summer 2021 – present)<br></br>
                        Matthew Hawkins (Summer 2021 – present)<br></br>
                        Javier Garcia (Fall 2020 – Summer 2021)<br></br>
                        Erick Branner (Fall 2020 – Spring 2021)<br></br>
                        Jessica Garcia (Winter 2019 – Spring 2020)<br></br>
                        Kaitlin Hill (Fall 2018 – Spring 2020)<br></br>
                        Aiden Nelson (Winter 2019 – Summer 2020)<br></br>
                        Sharlena Lugyen (Summer 2018-Winter 2020)<br></br>
                        Mason Sidebottom (Spring 2018- Fall 2019)<br></br>
                        Hannah Vaughan (Spring 2018-Spring 2019)<br></br>
                        Taz Thennell (Spring 2018)<br></br>
                        Emily Dominguez (Fall 2017- Spring 2019)<br></br>
                        Lily Shellhammer (Fall 2017-Spring 2019)<br></br>
                        Liz Premer (Fall 2018-Winter 2019)<br></br>
                        Miguel Gaspar (Spring 2018)<br></br>
                        Ester Vega (Spring 2018)<br></br>
                        Victor Campa (Fall 2017 – Spring 2018)<br></br>
                        Louis Duvoisin (Fall 2017 – Spring 2018)<br></br>
                        Jia Chen (Spring 2017)

                        </p>
                </Col>
            </Row>
        </Container>
        <Container className='paddingAll'>
            <Jumbotron className='jumboResearch paddingR'>
                <h1 className='display-4'>Publications</h1>
                <p>
                Almadhoun, E. and Parham-Mocello, J. (2021). Identifying Student Misunderstandings About Basic Linked List Components in C. Innovations in Computing Education Research (VL/HCC 2021). (~30% acceptance rate) (advisor, major contributor, co-wrote the paper) 
                <br></br><br></br>
                Almadhoun, E. and Parham-Mocello, J. (2021). Exploratory Study on Accuracy of Students’ Mental Models of a Singly Linked List. Frontiers in Education (FIE 2021). (advisor, major contributor, co-wrote the paper) 
                <br></br><br></br>
                Azzouni, Abdullah and Parham-Mocello, J. (2021). A Method for Evaluating a Computing Program’s Continuous Improvement Plan. Frontiers in Education (FIE 2021). (advisor, major contributor, co-wrote the paper) 
                <br></br><br></br>
                Azzouni, Abdullah and Parham-Mocello, J. (2021). Continuous Improvement in Academic Computing Programs is Rarely Comprehensive. American Society for Engineering Education (ASEE 2021). (advisor, major contributor, co-wrote the paper)
                <br></br><br></br>
                Azzouni, Abdullah and Parham-Mocello, J. (2021). Evaluating Current Continuous Improvement Approaches in an ABET-Accredited Computing Program. Innovation and Technology in Computer Science Education (ITiCSE 2021). (~30% acceptance rate) (advisor, minor contributor, co-wrote the paper)
                <br></br><br></br>
                Niess, Margaret, Parham-Mocello, J. and Erwig, M. (2021). Reframing Middle School Mathematics Teachers’ TPACK for Teaching A New Computer Science Curriculum: Researcher-Practitioner Partnership, Board Games, and Virtual Teaching Experiences. Proceedings of Society for Information Technology & Teacher Education International Conference. (minor contributor, co-wrote the paper)
                <br></br><br></br>
                Moissinac, B., Parham-Mocello, J., and Pappas, R. (2020 March). CS Student Laptop and Computer Lab Usage as a Factor of Success in Computing Education. Special Interest Group in Computer Science Education (SIGCSE 2020). (~30% acceptance rate) (advisor, major contributor, co-wrote the paper) 
                <br></br><br></br>
                Parham-Mocello, J. and Erwig, M. (2020 March). Does Story Programming Prepare for Coding? Special Interest Group in Computer Science Education (SIGCSE 2020). (~30% acceptance rate) (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Bodle, E. and Parham-Mocello, J. (2020 June). The Effectiveness of Using Robotics in Middle School Career Technology Education. American Society for Engineering Education (ASEE 2020). (advisor, major contributor, co-wrote the paper)
                <br></br><br></br>
                McCormick, M., Parham-Mocello, J., Heer, D. (2020 October). Improving Multidisciplinary Understanding Through Interdisciplinary Project-based Learning in a First-Year Orientation Course. Frontiers in Education (FIE 2020), Uppsala, Sweden.  (minor contributor, co-wrote the paper)
                <br></br><br></br>
                Parham-Mocello, J., Erwig, M., and Dominguez, E. To Code or Not to Code? Programming in Introductory CS Courses (VL/HCC 2019). (~40% acceptance rate) (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Parham-Mocello, J., Ernst, S., Erwig, M., Shellhammer, L., and Dominguez, E. 2019. Story Programming: Explaining Computer Science Before Coding. Special Interest Group in Computer Science Education (SIGCSE 2019). (~30% acceptance rate) (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Parham-Mocello, J. and Ernst, S. (2017 October). Analysis of Freshman Designs and the Correlation to Grades. The Journal of Computing Sciences in Colleges, 33(1), 186-193. (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Parham, J., Gugerty, L., and Stevenson, D. E. 2010. Empirical Evidence for the Existence and Uses of Metacognition in Computer Science Problem Solving. SIGCSE (March 2010), 1-5. (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Parham, J., Chinn, D., and Stevenson, D. E. 2009. Using Bloom's taxonomy to code verbal protocols of students solving a data structure problem. In Proceedings of the 47th Annual Southeast Regional Conference (March 2009), 1-6. (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Parham, J. (2003 December). An Assessment and Evaluation of Computer Science Education. The Journal of Computing Sciences in Colleges, 19(2), 115-127. (sole contributor)
                <br></br><br></br>
                Parham-Mocello, J., Erwig, M., Niess (2021). Virtually Unplugged: Using Board Games for Online CS Middle School Camps. Visual Languages/Human Centered Computing (VL/HCC 2021) (key contributor, co-analyzed data, co-wrote short paper)
                <br></br><br></br>
                Ernst, S. and Parham-Mocello, J. Crafting Design Documents in First-Year CS Courses. Psychology of Programming Interest Group (PPIG 2018). (advisor, major contributor, co-wrote the paper)
                <br></br><br></br>
                D. Morton, J. Parham. (2004 April). Engaging Students in Computational Sciences. Paper presented at the 3rd annual Graduate Student and Faculty Conference in the College of Arts and Sciences (CAS), The University of Montana, Missoula, MT. (minor contributor, co-wrote the paper)
                <br></br><br></br>
                J. Parham, D. Morton. (2003 March). Scientific Computing in Climate Modeling. Paper presented at the Association of American Geographers 2003 Annual Meeting, New Orleans, LA. (major contributor, co-wrote the paper)
                <br></br><br></br>
                D. Morton, G. Robinson, J. Shuckra, J. Parham (presenter), T. Warburton. (2002 September). Building and Maintaining Critical Mass for Research Programs in the Frontier Regions. Paper presented at American Association for the Advancement of Science 53rd Arctic Science Conference, Fairbanks, AK. (minor contributor, co-wrote the paper)
                <br></br><br></br>
                </p>
                    <h1 className='display-4'>Papers In Progress</h1>
                <p>
                    
                Parham-Mocello, J. Erwig, M., and Niess, M. (2022). Putting Computing on the Table: Using Board Games to Teach Computer Science. Special Interest Group in Computer Science Education (SIGCSE 2022). (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Kalathas, P., Parham-Mocello, J., Elliott, R., and Lockwood, E., (2022). Exploring Math + CS in a Secondary Education Methods Course. Special Interest Group in Computer Science Education (SIGCSE 2022). (advisor, major contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                Parham-Mocello, J., Nelson, A., and Erwig, M. (2022). Using the right tool: An exploration of teaching using a domain-specific teaching language. Special Interest Group in Computer Science Education (SIGCSE 2022). (key contributor, co-analyzed data, co-wrote the paper)
                <br></br><br></br>
                </p>
            </Jumbotron>
            </Container>
            </Jumbotron>
        </div>

    );
}


export default Research;


            // <Carousel className='carouseldims'>
            // <Carousel.Item>
            //     <div className='caroOne'></div>
            //     <Carousel.Caption>
            //     <h3>Pathways for Intro to CS: Story Programming</h3>
            //     <p>We investigate different ways of introducing students to CS based on their 
            //         prior programming experience and interest in coding. We introduce a new approach 
            //         for explaing computation using well-known stories before teaching coding, and we 
            //         compare this approach with the traditional code-first approaches.
            //     </p>
            //     <p>

            //         <Button variant="primary">Learn More</Button>

            //         </p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <div className='caroTwo'></div>
            //         <Carousel.Caption>
            //         <h3>Success in CS: Problem-Solving, Access/Usage, and Accreditation</h3>
            //         <p>What contributes to the success of CS students? In this research we investigate three areas that 
            //             contribute to students' success in CS. One contributing factor is the problem-solving process and skills 
            //             used by students to engage in computational thinking and the misconceptions students' develop about abstract 
            //             computational concepts. Another factor includes the access and usage of computing resources to succeed as a 
            //             CS major and in CS courses. We also look at how accreditation can help promote student success through proccess 
            //             that support continuous improvement.
            //         </p>
            //         <p>
    
            //                 <Button variant="primary">Learn More</Button>
    
            //         </p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <div className='caroThree'></div>
            //         <Carousel.Caption>
            //         <h3>Peer Review: Self-Efficacy and Accuracy</h3>
            //         <p>This research investigates peer review in an academic setting. We are interested in learning how peer 
            //             reviews impact and correlate to self-efficacy, and we also investigate how accurate students are in 
            //             engaging in peer review. We are working on an online system that uses comparitive judgement, 
            //             instead of absolute judgement, for reviewing and grading the quality of work more accurately.
            //         </p>
            //         <p>
            //             <Button variant="primary">Learn More</Button>
            //         </p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            //     <Carousel.Item>
            //         <div className='caroFour'></div>
            //         <Carousel.Caption>
            //         <h3>Pathways for Intro to CS: Story Programming</h3>
            //         <p>We investigate different ways of introducing students to CS based on their 
            //             prior programming experience and interest in coding. We introduce a new approach 
            //             for explaing computation using well-known stories before teaching coding, and we 
            //             compare this approach with the traditional code-first approaches.
            //         </p>
            //         <p>
            //             <Button variant="primary">Learn More</Button>
            //         </p>
            //         </Carousel.Caption>
            //     </Carousel.Item>
            // </Carousel>




