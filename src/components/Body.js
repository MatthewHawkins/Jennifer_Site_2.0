import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import AboutMe from './sections/AboutMe';
import Research from './sections/Research';
import Teaching from './sections/Teaching';
import Service from './sections/Service';

function PageBody(){

    return(
        <div>
            <AboutMe />
            <Research />
            <Teaching />
            <Service />
        </div>
    );
}

export default PageBody