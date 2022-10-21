import { ContactsCollection } from "./ContactCollections";

Meteor.methods( {
    "contact.insert"({ name, email, imageUrl}) {
        return ContactsCollection.insert({ name, email, imageUrl, createdAt: new Date()});
    },
    "contact.remove"({contactId}){
        return ContactsCollection.remove(contactId)
    }
})