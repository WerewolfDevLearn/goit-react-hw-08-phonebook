import axios from 'axios';
import { ILogin, IUser, Icredentials, IOCurrentUser } from '../types';

axios.defaults.baseURL = 'https://connections-api.herokuapp.com';

export async function userRegister(userData: IUser) {
  const response = await axios.post('/users/signup', userData);
  return response.data;
}
export async function userLogin(loginData: ILogin) {
  const response = await axios.post('/users/login', loginData);
  const data = response.data;
  return data;
}
export async function userLogOut() {
  const response = await axios.post('/users/logout');
  const data = response.data;
  return data;
}
export async function getCurrentUser(tokenAuth: string) {
  axios.defaults.headers.common.Authorization = `Bearer ${tokenAuth}`;
  const response = await axios.get('/users/current');
  const data = response.data;
  return data;
}

export const token = {
  set(token: string) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = '';
  },
};
