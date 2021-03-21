import React from "react";


import ContactForm from "./ContactsForm";

import separator from "../img/separator.svg";


function Contacts() {
    let heading = "Контакты";
        return (
            <section className = "contacts">
                <h2>
                   {heading}
                </h2>
                <div className = "conteinerContacts" >
                    <ContactForm type = "Электронная почта" info = "drive@skillfactory.com" />
                    <img src={separator} alt="separator" className="separator" /> 
                    <ContactForm type = "Телефон" info = "+7 912 123-45-67" />
                </div>
            </section>
        )
}

export default Contacts;