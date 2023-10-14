import { List, Item, Paragraph, Button } from './ContactList.styled';
import { useDispatch, useSelector } from 'react-redux';
import { deleteContact } from 'components/redux/operations';
import { selectorFilteredUsers } from 'components/redux/selectors';

export const ContactList = () => {
  const dispatch = useDispatch();
  const filteredUsers = useSelector(selectorFilteredUsers);

  return (
    <List>
      {filteredUsers.map(contact => {
        return (
          <Item key={contact.id}>
            <Paragraph>
              {contact.name} : {contact.phone}
            </Paragraph>
            <Button
              type="button"
              onClick={() => dispatch(deleteContact(contact.id))}
            >
              Delete
            </Button>
          </Item>
        );
      })}
    </List>
  );
};
