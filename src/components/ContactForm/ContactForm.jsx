import React from 'react';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledForm,
  StyledInput,
  StyledLavel,
  StyledButton,
  StyledError,
} from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'components/redux/operations';
import { selectorContacts } from 'components/redux/selectors';

const validation = Yup.object().shape({
  name: Yup.string()
    .min(3, 'Too Short!')
    .max(30, 'Too Long!')
    .required('Required'),
  number: Yup.string()
    .min(7, 'Must be min 7 numbers!')
    .max(15, 'Must be max 15 numbers!!')
    .required('Required'),
});

export const ContactForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectorContacts);
  const handlerSubmittingForm = ({ name, number }) => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is alredy in contacts`);
      return;
    }
    const newContact = { name, number };
    dispatch(addContact(newContact));
  };
  return (
    <div>
      <Formik
        initialValues={{
          name: '',
          number: '',
        }}
        validationSchema={validation}
        onSubmit={(values, actions) => {
          handlerSubmittingForm(values);
          actions.resetForm();
        }}
      >
        <StyledForm>
          <StyledLavel>
            Name
            <StyledInput
              type="text"
              name="name"
              title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
              required
            />
            <StyledError name="name" component="div" />
          </StyledLavel>
          <StyledLavel>
            Number
            <StyledInput
              type="tel"
              name="number"
              title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
              required
            />
            <StyledError name="number" component="div" />
          </StyledLavel>

          <StyledButton type="submit">Add contact</StyledButton>
        </StyledForm>
      </Formik>
    </div>
  );
};
