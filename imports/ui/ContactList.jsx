import React from "react"
import { ContactsCollection } from "../api/ContactCollections";
import {useTracker} from 'meteor/react-meteor-data'

export const Contactlist = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}).fetch();
    })
    return (
        <>
        <h3>Contact List</h3>
        {contacts.map(contact => (
            <li key={contact.email}>{contact.name} - {contact.email}</li>  
        ))}
        </>
    )
} 