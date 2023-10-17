import { useDispatch, useSelector } from 'react-redux';
import { ContactForm } from '../components/ContactForm/ContactForm';
import { ContactList } from '../components/ContactList/ContactList';
import { Filter } from '../components/Filter/Filter';
import { Loader } from '../components/Loader';
import { useEffect } from 'react';
import { fetchContacts } from '../components/redux/operations';

const Contacts = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const loadingInfo = useSelector(state => state.contactsStore.isLoading);
  const errorInfo = useSelector(state => state.contactsStore.error);

  return (
    <div style={{ paddingLeft: '100px', display: 'flex', gap: '300px' }}>
      <div>
        <h3 style={{ marginBottom: '10px' }}>Write down your contact</h3>
        <ContactForm />
      </div>
      <div>
     
        <Filter />
        <h3 style={{ marginTop: '10px' }}>Your contacts</h3>
        {loadingInfo && !errorInfo && <Loader />}
      
        <ContactList />
      </div>
    </div>
  );
};

export default Contacts;
