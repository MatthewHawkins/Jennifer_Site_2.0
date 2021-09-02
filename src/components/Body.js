import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './body.css';
import { Router, Switch, Route, Link} from "react-router-dom";
import AboutMe from './sections/AboutMe';
import Research from './sections/Research';
import Teaching from './sections/Teaching';
import Service from './sections/Service';
import ResearchMain from './sections/researchPages/ResearchMain';

function PageBody(){

    return(
        <div>
            <Switch>
                <Route path='/' exact>
                    <AboutMe />
                    <Research />
                    <Teaching />
                    <Service />
                </Route>
                <Route path='/research'>
                    <ResearchMain />
                </Route>
            </Switch>
        </div>
    );
}

export default PageBody;