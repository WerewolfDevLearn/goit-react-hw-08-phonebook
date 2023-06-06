import { useState } from 'react';
import ContactListItemStl from './ContactListItem.module.css';
import Modal from '../../Modal/Modal';
import { IContact } from '../../../types';
import UpdateContactForm from '../../Forms/UpdateContactForm';
interface IProps {
  contact: IContact;
  onRemove: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void;
}

export default function ContactListItem({ contact, onRemove }: IProps): JSX.Element {
  const [isOpen, setIsOpen] = useState(false);
  const { name, number } = contact;
  const onEdit = () => {
    setIsOpen(true);
  };
  const closeModal = () => {
    setIsOpen(false);
  };

  return (
    <>
      <li className={ContactListItemStl.container}>
        <div className={ContactListItemStl.contactInfo}>
          {name} : {number}
        </div>
        <section className={ContactListItemStl.action}>
          <button type='button' onClick={onEdit}>
            Edit
          </button>
          <button type='button' onClick={onRemove}>
            Delete
          </button>
        </section>
      </li>
      <Modal isOpen={isOpen} onCloseModal={closeModal}>
        <UpdateContactForm contact={contact} closeModal={closeModal} />
      </Modal>
    </>
  );
}
