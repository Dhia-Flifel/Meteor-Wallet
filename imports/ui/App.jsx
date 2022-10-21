import React from 'react';
import { ContactForm } from './ContactForm';
import { Contactlist } from './ContactList';
import { Header } from './Header';

export const App = () => (
  <div>
    <Header />
    <ContactForm />
    <Contactlist />
  </div>
);
