import React, { useEffect } from 'react';
import { Filter } from './Filter/Filter';
import { ContactForm } from './ContactForm/ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Loader } from './Loader/Loader';
import { fetchContacts } from 'redux/operations';
import { useDispatch, useSelector } from 'react-redux';
import { getIsLoading, getError } from 'redux/selectors';
import style from './App.module.css';

export const App = () => {

  const isLoading = useSelector(getIsLoading);
  const error = useSelector(getError);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch])

  return (
    <div>
      <h1 className={style.header}>Phonebook</h1>
      <ContactForm />
      <h2 className={style.header}>Contacts</h2>
      <Filter />
      {isLoading && !error ? <Loader /> : <ContactList />}
    </div>
  );
};