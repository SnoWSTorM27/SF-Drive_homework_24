import React from "react";
import logo from "../img/logo_about_us.webp";

import StartBlock from "./StartBlock";
import Contacts from "./Contacts";
import Team from "./Team";


function AboutUs() {
    
    return (
        <main className = "contentAboutUs">
            <StartBlock headingBlock = {"О нас"} logo = {"../img/logo_about_us.webp"}/>
            <Contacts />
            <Team />

            
        </main>  
    ) 
}

export default AboutUs;