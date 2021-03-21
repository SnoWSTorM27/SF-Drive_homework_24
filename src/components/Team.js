import React from "react";
import PersonItem from "./PersonItem";

function Team() {
    let headingBlock = "Команда";
    
    return (
        <section className="teamBlock">
            <h2> { headingBlock } </h2>
            <div className="teamPersons">
                <PersonItem />
            </div>
        </section>  
    ) 
}

export default Team;