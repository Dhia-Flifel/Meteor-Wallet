import React from 'react';
import { ContactForm } from './ContactForm';
import { Contactlist } from './ContactList';

export const App = () => (
  <div>
    <h1>Meteor Wallet - Galaxy</h1>
    <ContactForm />
    <Contactlist />
  </div>
);
