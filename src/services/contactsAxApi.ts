import axios from 'axios';
import { IContact } from '../types';

axios.defaults.baseURL = 'https://647183fb6a9370d5a41a64eb.mockapi.io/api/v1';

export async function getContacts() {
  const response = await axios.get('/contacts');
  return response.data;
}
export async function putContact(contact: IContact) {
  const response = await axios.post('/contacts', contact);
  return response.data;
}
export async function removeContact(id: string) {
  const response = await axios.delete(`/contacts/${id}`);
  return response.data;
}
