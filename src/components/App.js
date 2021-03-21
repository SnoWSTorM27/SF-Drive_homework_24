import React, { Component,Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import "../styles/css/style.css";


import Header from "./Header";
import AboutUs from "./AboutUs";
import Footer from "./Footer";
import FrequentQuestions from './FrequentQuestions'


class App extends Component {
    render() {
        return (
            
            <div className="page">
               <Router>
                    <Header />
                    
                    <Switch>
                        <Route exact path='/' component={AboutUs} />
                        <Route path='/qna' component={FrequentQuestions} />
                    </Switch>
                    
                    <Footer Copyright="© SkillDrive Inc. 2020" />
                </Router>
            </div>
        );
    }
}

export default App;