import React, { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import style from './App.module.css';
import ContactList from './ContactList/index';
import ContactForm from './ContactForm/index';
import Filter from './Filter/index';

const App = () => {
  const [contacts, setContacts] = useState(() => {
    const storedContacts = localStorage.getItem('contacts');
    return storedContacts ? JSON.parse(storedContacts) : [];
  });
  const [filter, setFilter] = useState('');

  const addContact = ({ name, number }) => {
    const normalizedName = name.toLowerCase();

    let isAdded = false;
    contacts.forEach(el => {
      if (el.name.toLowerCase() === normalizedName) {
        alert(`${name} is already in contacts`);
        isAdded = true;
      }
    });

    if (isAdded) {
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

  const getVisibleContacts = () => {
    const normalizedFilter = filter.toLowerCase();

    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const deleteContact = todoId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== todoId)
    );
  };

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  useEffect(() => {
    const storedContacts = localStorage.getItem('contacts');
    if (storedContacts) {
      setContacts(JSON.parse(storedContacts));
    }
  }, []);

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

      <h2 className={style.titleContacts}>Contacts</h2>
      <div className={style.allContacts}>All contacts: {contacts.length}</div>
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