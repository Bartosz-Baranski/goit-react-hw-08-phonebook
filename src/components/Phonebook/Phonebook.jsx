import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { ContactForm } from 'components/ContactForm/ContactForm';
import { ContactList } from 'components/ContactList/ContactList';
import { fetchContacts, saveContact, deleteContact } from '../redux/operations';

import css from './Phonebook.module.css';

export function Phonebook() {
  const contacts = useSelector(state => state.contacts);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContact = newContact => {
    dispatch(saveContact(newContact));
  };

  const handleDeleteContact = id => {
    dispatch(deleteContact(id));
  };

  return (
    <div className={css.phonebook_box}>
      <div className={css.phonebook}>
        <ContactForm addContact={handleAddContact} />
      </div>
      <ContactList contacts={contacts} deleteContact={handleDeleteContact} />
    </div>
  );
}

Phonebook.propTypes = {
  contacts: PropTypes.array,
};
