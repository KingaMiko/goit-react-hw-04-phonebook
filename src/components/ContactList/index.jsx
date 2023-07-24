import PropTypes from 'prop-types';
import {
  StyledList,
  StyledItem,
  StyledContact,
  StyledName,
} from './StyledContactList';

const ContactList = ({ contacts, onDeleteContact }) => (
  <StyledList>
    {contacts.map(({ id, name, number }) => (
      <StyledItem key={id}>
        <StyledContact>
          <StyledName>{name}</StyledName>
          <span>{number}</span>
        </StyledContact>
        <button type="submit" onClick={() => onDeleteContact(id)}>
          Delete
        </button>
      </StyledItem>
    ))}
  </StyledList>
);

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      number: PropTypes.string,
    })
  ),
  onDeleteContact: PropTypes.func,
};

export default ContactList;
