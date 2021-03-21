import React from "react";

import logo from "../img/logo_about_us.webp";


function StartBlock(props) {
    
    let textDiscription = "Это учебный проект, созданный с целью получения боевого опыта в разработке настоящего живого веб-приложения. Этот сервис имитирует работу каршеринга, в котором можно не только арендовать автомобили, но и сдавать их в аренду.";    

    return (
        <section className = "startBlock">
            <img src={logo} alt="logo О нас" className="logoBlock" /> 
            <h1> {props.headingBlock} </h1>
            <p className="textDiscription"> { textDiscription } </p>
        </section>  
    ) 
}

export default StartBlock;