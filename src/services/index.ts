// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const tagNames = {
  allElements: 'allElements',
  createCustomer: 'createCustomer',
  updateCustomer: 'updateCustomer',
  deleteCustomer: 'deleteCustomer',
};

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.REACT_APP_API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: [...Object.values(tagNames)],
});
