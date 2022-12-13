import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter } from 'redux/selectors';
import { delContact } from 'redux/contactsSlice';
import propTypes from 'prop-types';
import style from './ContactList.module.css'


export const ContactList = () => {

    const contacts = useSelector(getContacts);
    const filter     = useSelector(getFilter);
    const dispatch = useDispatch();

    const filterContacts = contacts.filter(contact =>
        contact.name.toLowerCase().includes(filter)
    );

    const del = contactId => {
        return dispatch(delContact(contactId));
    };

    return (
        <div>
            <ul className={style.list}>
                {filterContacts.map(contact => {
                    return (
                        <li className={style.listItem} key={contact.id}>
                            <p>{contact.name}: {contact.number}</p>
                                <button className={style.btn} type="button" onClick={() => del(contact.id)}>
                                    Delete
                                </button>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.exact({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ),
};