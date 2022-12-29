import { api, tagNames } from '.';
import {
  createCustomerType,
  deleteCustomerType,
  getCustomerByIdType,
  updateCustomerType,
} from './entities';

export const customersApi = api.injectEndpoints({
  endpoints: (build) => ({
    getAllElements: build.query({
      query: () => 'customers',
      providesTags: [
        tagNames.deleteCustomer,
        tagNames.createCustomer,
        tagNames.updateCustomer,
      ],
    }),
    getCustomerById: build.query({
      query: (id: getCustomerByIdType) => `customers/${id}`,
      providesTags: [tagNames.updateCustomer],
    }),
    createCustomer: build.mutation({
      query: (data: createCustomerType) => ({
        url: `customers`,
        method: 'POST',
        body: data,
      }),
      invalidatesTags: [tagNames.createCustomer],
    }),
    updateCustomer: build.mutation({
      query: ({ id, data }: updateCustomerType) => ({
        url: `customers/${id}`,
        method: 'PATCH',
        body: data,
      }),
      invalidatesTags: [tagNames.updateCustomer],
    }),
    deleteCustomer: build.mutation({
      query: ({ ids }: deleteCustomerType) => ({
        url: `customers?ids=${ids}`,
        method: 'DELETE',
      }),
      invalidatesTags: [tagNames.deleteCustomer],
    }),
  }),
});

export const {
  useGetAllElementsQuery,
  useLazyGetCustomerByIdQuery,
  useCreateCustomerMutation,
  useUpdateCustomerMutation,
  useDeleteCustomerMutation,
} = customersApi;
