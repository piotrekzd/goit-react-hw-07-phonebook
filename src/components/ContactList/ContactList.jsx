import { useSelector, useDispatch } from 'react-redux';
import { getContacts, getFilter} from 'redux/selectors';
import { deleteContact } from 'redux/operations';
import propTypes from 'prop-types';
import style from './ContactList.module.css'

const getVisibleContacts = (contacts, filter) => {
    if (!filter) {
        return contacts;
    } else {
        return contacts.filter(contact => {
            return contact.name.toLowerCase().includes(filter.toLowerCase());
        });
    };
};

export const ContactList = () => {
    const contacts = useSelector(getContacts);
    const filter = useSelector(getFilter);
    const dispatch = useDispatch();
    const visibleContacts = getVisibleContacts(contacts, filter);
    const del = id => {
        return dispatch(deleteContact(id));
    };

    return (
        <div>
            <ul className={style.list}>
                {visibleContacts.map((contact, id) => (
                        <li className={style.listItem} key={id}>
                            <p>{contact.name}: {contact.phone}</p>
                                <button className={style.btn} type="button" onClick={() => del(contact.id)}>
                                    Delete
                                </button>
                        </li>
                ))}
            </ul>
        </div>
    );
};

ContactList.propTypes = {
    contacts: propTypes.arrayOf(
        propTypes.shape({
            id: propTypes.string.isRequired,
            name: propTypes.string.isRequired,
            number: propTypes.string.isRequired,
        })
    ),
};