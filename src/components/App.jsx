import React, { useState } from 'react';
import { nanoid } from 'nanoid';
import ContactList from './ContactList/index';
import ContactForm from './ContactForm/index';
import Filter from './Filter/index';
import { StyledAllContacts, StyledTitleContacts } from './StyledApp';
import { useContacs } from './hooks/useConacts';

const App = () => {
  const [contacts, setContacts] = useContacs();
  const [filter, setFilter] = useState('');

  const isContactAdded = name =>
    contacts.some(contact => contact.name.toLowerCase() === name.toLowerCase());

  const addContact = ({ name, number }) => {
    if (isContactAdded(name)) {
      alert(`${name} is already in contacts`);
      return;
    }

    const contact = {
      id: nanoid(),
      name: name,
      number: number,
    };
    setContacts(prevContacts => [...prevContacts, contact]);
  };

  const changeFilter = e => {
    setFilter(e.currentTarget.value);
  };

  const deleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        fontSize: 18,
        color: '#010101',
      }}
    >
      <h1>Phonebook</h1>
      <ContactForm onSubmit={addContact} />

      <StyledTitleContacts>Contacts</StyledTitleContacts>
      <StyledAllContacts>All contacts: {contacts.length}</StyledAllContacts>
      <Filter value={filter} onChange={changeFilter} />
      {visibleContacts.length > 0 ? (
        <ContactList
          contacts={visibleContacts}
          onDeleteContact={deleteContact}
        />
      ) : (
        <p>No contacts available.</p>
      )}
    </div>
  );
};

export default App;
