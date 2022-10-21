import React from "react"
import { ContactsCollection } from "../api/ContactCollections";
import {useTracker} from 'meteor/react-meteor-data'
import { Meteor } from "meteor/meteor"
export const Contactlist = () => {
    const contacts = useTracker(() => {
        return ContactsCollection.find({}, { sort: { createdAt: -1}}).fetch();
    
   
    })
    const removeContact = (event, _id) => {
        event.preventDefault()
        Meteor.call("contact.remove", {contactId:_id })
      }
    return (
        <>
        <h3 style={{marginLeft: 700, marginTop:300}}>Contact List</h3>
        {contacts.map(contact => (
            <div key={contact.email} style={{marginLeft: 700}}>
            <li >{contact.name} - {contact.email}</li>  
            <a href="#" class="btn btn-outline-info" onClick={(event) => removeContact(event, contact._id)}>Remove</a>
            </div>
        ))}
        </>
    )
} 