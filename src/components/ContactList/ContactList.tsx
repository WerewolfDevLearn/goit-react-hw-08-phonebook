import ContactListItem from './ContactListItem/ContactListItem';
import ContactListStl from './ContactListItem/ContactListItem.module.css';
import { useDeleteContactMutation } from '../../redux/contactsApi';
import { IContact } from '../../types';
import Loader from '../Loader/Loader';

interface ContactsListProps {
  visibleContacts: IContact[];
}

export default function ContactsList({ visibleContacts }: ContactsListProps) {
  const [deleteContact, { isLoading }] = useDeleteContactMutation();
  return (
    <>
      <ul className={ContactListStl.contactList}>
        {visibleContacts!.map((visibleContact) => (
          <ContactListItem
            contact={visibleContact}
            onRemove={() => deleteContact(visibleContact.id!)}
            key={visibleContact.id}
          />
        ))}
      </ul>
      {isLoading && <Loader />}
    </>
  );
}
