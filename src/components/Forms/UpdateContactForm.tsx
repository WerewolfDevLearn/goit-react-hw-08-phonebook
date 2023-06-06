import { Formik, Form, Field, ErrorMessage } from 'formik';
import { useUpdateContactsMutation } from '../../redux/contactsApi';
import * as yup from 'yup';
// Styles
import ContactFormStl from './ContactForm.module.css';
// types
import { IValues, IContact } from '../../types';
interface UpdateForm {
  contact: IContact;
  closeModal(): void;
}

// variables

const phoneRegExp = /^[+]?[(]?[0-9]{3}[)]?[-\s.]?[0-9]{3}[-\s.]?[0-9]{4,6}$/im;
// validation
const schema = yup.object().shape({
  name: yup.string().required(),
  number: yup.string().matches(phoneRegExp, 'Phone number is not valid').required(),
});

export default function UpdateContactForm({ contact, closeModal }: UpdateForm) {
  const initialValues = { name: contact.name, number: contact.number };
  const [updateContacts] = useUpdateContactsMutation();
  const onSubmitFormik = (values: IValues) => {
    const newContact = {
      ...values,
      id: contact.id,
    };
    updateContacts(newContact);

    closeModal();
  };

  return (
    <Formik initialValues={initialValues} onSubmit={onSubmitFormik} validationSchema={schema}>
      <Form className={ContactFormStl.ContactForm}>
        <label className={ContactFormStl.label} htmlFor='name'>
          Name
          <Field type='text' name='name' className={ContactFormStl.input} />
          <ErrorMessage name='name' />
        </label>
        <label className={ContactFormStl.label} htmlFor='number'>
          Phone Number
          <Field type='text' name='number' className={ContactFormStl.input} />
          <ErrorMessage name='number' />
        </label>
        <button type='submit' className={ContactFormStl.buttonSubmit}>
          Update contact
        </button>
      </Form>
    </Formik>
  );
}
