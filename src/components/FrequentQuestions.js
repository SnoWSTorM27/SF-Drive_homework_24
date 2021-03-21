import React from "react";


import StartBlockQuestions from "./StartBlockQuestions";
import Questions from "./Questions";
import logoQuestion from "../img/frequent_questions.webp";

function FrequentQuestions() {
    
    return (
        <main>
        <section className = "FrequentQuestions">
            <StartBlockQuestions headingBlock={"Частые вопросы"} />
            <Questions />
        </section>  
        </main>
    ) 
}

export default FrequentQuestions;