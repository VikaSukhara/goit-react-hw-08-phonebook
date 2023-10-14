import { createSelector } from '@reduxjs/toolkit';

export const selectorFilter = state => state.filterStore;
export const selectorContacts = state => state.contactsStore.items;

export const selectorFilteredUsers = createSelector(
  [selectorContacts, selectorFilter],
  (contacts, filter) => {
    return contacts.filter(contact => {
      return contact.name
        .toLocaleLowerCase()
        .includes(filter.toLocaleLowerCase());
    });
  }
);
