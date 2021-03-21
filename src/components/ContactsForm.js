import React from "react";


function ContactsForm (props) {
    return (
        <div className ="contactsForm">
            <p className="type"> { props.type } </p>
            <a href="" className="info"> { props.info } </a>
        </div>
    )  
}

export default ContactsForm;