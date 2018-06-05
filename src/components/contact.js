import React from "react"

const Contact = (props) => {
    return (
        // <p>{props.contacts}</p>
        
        <ul>
            {
              props.contacts.map((value,index) => {return (<li key={index}>{value.name} - {value.address}</li>)}) 
            }
        </ul>
    )
}

Contact.defaultProps = {
    contacts:[]
}

export default Contact