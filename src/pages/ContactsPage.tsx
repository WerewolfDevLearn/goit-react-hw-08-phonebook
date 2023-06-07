import ContactForm from '../components/Forms/ContactForm';
import ContactsList from '../components/ContactList/ContactList';
import Filter from '../components/Filter/Filter';
import PagesSTL from './Pages.module.css';
import usePHBState from '../redux/selectors';
import Loader from '../components/Loader/Loader';

import { useGetContatsQuery } from '../redux/contacts/contactsApi';
import { getCurrent } from '../redux/auth/authOps';

import { useEffect } from 'react';
import { useAppDispatch } from '../redux/store';
import { IContact } from '../types';
import { useNavigate } from 'react-router-dom';
import routes from '../components/routes';

export default function ContactsPage() {
  const { filter, user } = usePHBState();
  const dispatch = useAppDispatch();
  const { data: items = [], isLoading, error } = useGetContatsQuery();
  const navigate = useNavigate();

  const getVisibleContacts = (items: IContact[]): IContact[] | [] => {
    if (items) {
      return items.filter((item) =>
        item.name.toLocaleLowerCase().includes(filter.toLocaleLowerCase()),
      );
    }
    return [];
  };

  // useEffect(() => {
  //   console.log('!user.token:', !user.token);
  //   if (!user.token) navigate(routes.login);
  //   // dispatch(getCurrent());
  // }, [dispatch, navigate]);

  const visibleContacts = getVisibleContacts(items);
  return (
    <div className={PagesSTL.container}>
      <h2 className={PagesSTL.heading}>PhoneBook</h2>
      <ContactForm visibleContacts={visibleContacts} />
      <h2 className={PagesSTL.heading}>Contacts</h2>
      {items.length > 1 && <Filter />}
      {items.length > 0 && !error && !isLoading && (
        <ContactsList visibleContacts={visibleContacts} />
      )}
      {isLoading && <Loader />}
    </div>
  );
}
