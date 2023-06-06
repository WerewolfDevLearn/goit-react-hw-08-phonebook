import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { RootState } from './store';
import { IContact } from '../types';

export const contactApi = createApi({
  reducerPath: 'contacts',
  baseQuery: fetchBaseQuery({
    baseUrl: 'https://connections-api.herokuapp.com',
    prepareHeaders: (headers, { getState }) => {
      const token = (getState() as RootState).user.token;
      if (token) {
        headers.set('authorization', `Bearer ${token}`);
      }
    },
  }),
  tagTypes: ['Contacts'],
  endpoints: (builder) => ({
    getContats: builder.query<void, void>({
      query: () => ({
        url: '/contacts',
        method: 'GET',
      }),
      providesTags: ['Contacts'],
    }),
    createContact: builder.mutation<IContact, IContact>({
      query: (contact) => ({
        url: '/contacts',
        method: 'POST',
        body: contact,
      }),
      invalidatesTags: ['Contacts'],
    }),
    deleteContact: builder.mutation({
      query: (contactID: string) => ({
        url: `/contacts/${contactID}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Contacts'],
    }),
    updateContacts: builder.mutation<IContact, IContact>({
      query: ({ id, ...rest }) => ({
        url: `/contacts/${id}`,
        method: 'PATCH',
        body: { ...rest },
      }),
      invalidatesTags: ['Contacts'],
    }),
  }),
});

export const {
  useGetContatsQuery,
  useCreateContactMutation,
  useDeleteContactMutation,
  useUpdateContactsMutation,
} = contactApi;
