import { useState, useEffect } from 'react';

export const useContacs = () => {
  const [contacts, setContacts] = useState(() => {
    try {
      const storedContacts = localStorage.getItem('contacts');
      return storedContacts ? JSON.parse(storedContacts) : [];
    } catch (error) {
      console.error('Failed to retrieve contacts:', error);
      return [];
    }
  });

  useEffect(() => {
    try {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    } catch (error) {
      console.error('Failed to store contacts:', error);
    }
  }, [contacts]);
  return [contacts, setContacts];
};
