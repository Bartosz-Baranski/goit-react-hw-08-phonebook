import { useState } from 'react';
import { useSelector } from 'react-redux';

import css from './ContactList.module.css';

export function ContactList({ deleteContact }) {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(state => state.contact);

  const handleChange = e => {
    const { value } = e.target;
    setFilter(value);
  };

  const getContacts = () => {
    if (filter.length === 0) {
      return contacts;
    }
    return contacts.filter(
      contact => contact.name.toLowerCase().indexOf(filter) >= 0
    );
  };

  return (
    <div className={css.contact_list_container}>
      <h2>Contacts</h2>
      <form className={css.contact_form}>
        <label className={css.phonebook_label}>
          Find contacts by name
          <input
            type="text"
            name="filter"
            value={filter}
            onChange={handleChange}
          ></input>
        </label>
      </form>

      <ul className={css.contact_list}>
        {getContacts().map(({ name, number, id }) => (
          <li key={id} className={css.contact_list_item}>
            <p>{name}</p>
            <p> {number}</p>
            <button
              className={css.delete_btn}
              onClick={() => deleteContact(id)}
            >
              Delete contact
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}
