import React from "react"

const ContactContent = (props) => {
    return (
        // <p>{props.contacts}</p>
        
        <ul>
            {
              props.contacts.map((value,index) => {return (<li key={index}>{value.name} - {value.address}</li>)}) 
            }
        </ul>
    )
}

export default ContactContent