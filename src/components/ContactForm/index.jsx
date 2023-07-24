import React, { useState } from 'react';
import style from './ContactForm.module.css';

const ContactForm = ({ onSubmit }) => {
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');

  const handleChange = setter => e => {
    setter(e.target.value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit({ name, number });
    resetForm();
  };

  const resetForm = () => {
    setName('');
    setNumber('');
  };

  return (
    <form className={style.form} onSubmit={handleSubmit}>
      <label>
        Name
        <input
          className={style.inputName}
          value={name}
          onChange={handleChange(setName)}
          type="text"
          name="name"
          pattern="^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </label>
      <label>
        Number
        <input
          className={style.inputNumber}
          value={number}
          onChange={handleChange(setNumber)}
          type="tel"
          name="number"
          pattern="(\+48)?\s?(\d{3}-\d{3}-\d{3}|\d{3}\s\d{3}\s\d{3}|\d{9,11})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </label>

      <button type="submit" className={style.buttonEditor}>
        Add contact
      </button>
    </form>
  );
};

export default ContactForm;
