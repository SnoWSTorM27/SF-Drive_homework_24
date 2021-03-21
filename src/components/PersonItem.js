import React from "react";

function PersonItem () {
    let persons = [
        {"name":"Иван",
        "surname":"Иванов",
        "position":"СЕО"},
        
        {"name":"Алексей",
        "surname":"Смирнов",
        "position":"Frontend-разработчик"},

        {"name":"Денис",
        "surname":"Ярцев",
        "position":"Backend-разработчик"},
        
        {"name":"Николай",
        "surname":"Морозов",
        "position":"Дизайнер"},
        
        {"name":"Ирина",
        "surname":"Деева",
        "position":"Копирайтер"},

        {"name":"Мария",
        "surname":"Стрелкова",
        "position":"SMM"}
    ];  
    
    let personBlocks = persons.map((person,index) => {
        return <div key={index} className="personItem">
                    <img src={`assets/photo_${person.name}_${person.surname}.webp`} />
                    <h3> { person.name } { person.surname } </h3>
                    <h4> { person.position } </h4>
                </div> 
    });

    return (
      personBlocks
    )  
}

export default PersonItem;
