import { ContactForm } from './ContactForm/ContactForm';
import { useDispatch, useSelector } from 'react-redux';
import { ContactList } from './ContactList/ContactList';
import { useEffect } from 'react';
import { fetchContacts } from './redux/operations';
import { Filter } from './Filter/Filter';
import { Loader } from './Loader';

export const AppNew = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loadingInfo = useSelector(state => state.contactsStore.isLoading);
  const errorInfo = useSelector(state => state.contactsStore.error);

  return (
    <div style={{ paddingLeft: '20px' }}>
      <h1>Phonebook</h1>
      <ContactForm />
      <h2>Contacts</h2>
      <Filter />
      {loadingInfo && !errorInfo && <Loader />}
      <ContactList />
    </div>
  );
};
