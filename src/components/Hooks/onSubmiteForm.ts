import { useCreateContactMutation, useUpdateContactsMutation } from '../../redux/contactsApi';
import { FormikHelpers } from 'formik';
import { IValues, IContact } from '../../types';

export function useSubmitCreation(
  values: IValues,
  { resetForm }: FormikHelpers<IValues>,
  visibleContacts: IContact[],
) {
  const [createContact] = useCreateContactMutation();
  if (
    visibleContacts!.some(
      (item) => item.name.toLocaleLowerCase() === values.name.toLocaleLowerCase(),
    )
  ) {
    alert(`${values.name} is already in Contacts`);
    return;
  }
  createContact(values);
  resetForm();
}
export function useSubmitUpdate(
  values: IValues,
  id: string,
  { resetForm }: FormikHelpers<IValues>,
  visibleContacts: IContact[],
) {
  const [updateContacts] = useUpdateContactsMutation();
  if (
    visibleContacts!.some(
      (item) => item.name.toLocaleLowerCase() === values.name.toLocaleLowerCase(),
    )
  ) {
    alert(`${values.name} is already in Contacts`);
    return;
  }
  const contact = {
    ...values,
    id,
  };

  updateContacts(contact);
  resetForm();
}
