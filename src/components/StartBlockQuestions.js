import React, {Fragment} from "react";

import logoQuestion from "../img/frequent_questions.webp";


function StartBlockQuestions(props) {
    
    let textDiscription = "Отвечаем на вопросы, которые у вас могут возникнуть.";    

    return (
        <>
            <img src={logoQuestion} alt="logo Частые вопросы" className="logoBlock" /> 
            <h1> {props.headingBlock} </h1>
            <p className="textDiscription"> { textDiscription } </p>
        </>  
    ) 
}

export default StartBlockQuestions;