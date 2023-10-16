// import { Link } from 'react-router-dom';

// export const AuthNav = () => {

//   return (
//     <nav
//       style={{
//         display: 'flex',
//         flexDirection: 'row',
//         gap: '20px',
//       }}
//     >
//       <Link to="/contacts">Contacts</Link>
//     </nav>
//   );
// };




// import { useDispatch, useSelector } from 'react-redux';
// import { ContactForm } from '../components/ContactForm/ContactForm';
// import { ContactList } from '../components/ContactList/ContactList';
// import { Filter } from '../components/Filter/Filter';
// import { Loader } from '../components/Loader';
// import { useEffect } from 'react';
// import { fetchContacts } from '../components/redux/operations';

// const Contactsss = () => {
//   const dispatch = useDispatch();

//   useEffect(() => {
//     dispatch(fetchContacts());
//   }, [dispatch]);

//   const loadingInfo = useSelector(state => state.contactsStore.isLoading);
//   const errorInfo = useSelector(state => state.contactsStore.error);

//   return (
//     <div>
//       <h1>Phonebook</h1>
//       <ContactForm />
//       <h2>Contacts</h2>
//       <Filter />
//       {loadingInfo && !errorInfo && <Loader />}
//       <ContactList />
//     </div>
//   );
// };

// export default Contactsss;
