import useForm from '../hooks/useForm';
import {
  StyledForm,
  StyledLabel,
  StyledInputName,
  StyledInputNumber,
} from './StyledContactForm';

const ContactForm = ({ onSubmit }) => {
  const [values, handleChange, resetForm] = useForm({ name: '', number: '' });

  const handleSubmit = e => {
    e.preventDefault();
    onSubmit(values);
    resetForm();
  };

  return (
    <StyledForm onSubmit={handleSubmit}>
      <StyledLabel>
        Name
        <StyledInputName
          value={values.name}
          onChange={handleChange}
          type="text"
          name="name"
          pattern="^[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+(\s[a-zA-ZąćęłńóśźżĄĆĘŁŃÓŚŹŻ]+)*$"
          title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
          required
        />
      </StyledLabel>
      <StyledLabel>
        Number
        <StyledInputNumber
          value={values.number}
          onChange={handleChange}
          type="tel"
          name="number"
          pattern="(\+48)?\s?(\d{3}-\d{3}-\d{3}|\d{3}\s\d{3}\s\d{3}|\d{9,11})"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </StyledLabel>

      <button type="submit">Add contact</button>
    </StyledForm>
  );
};

export default ContactForm;
