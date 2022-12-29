// Need to use the React-specific entry point to import createApi
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define a service using a base URL and expected endpoints
export const tagNames = {
  allElements: 'allElements',
  createCustomer: 'createCustomer',
  updateCustomer: 'updateCustomer',
  deleteCustomer: 'deleteCustomer',
};

const REACT_APP_API_URL = 'https://customers-api-v1.fly.dev/api/v1/';

export const api = createApi({
  reducerPath: 'api',
  baseQuery: fetchBaseQuery({
    baseUrl: REACT_APP_API_URL,
  }),
  endpoints: () => ({}),
  tagTypes: [...Object.values(tagNames)],
});
