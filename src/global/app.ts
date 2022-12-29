import { createSlice } from '@reduxjs/toolkit';
import { getCustomerByIdType } from '../services/entities';

interface initialStateInterface {
  id: getCustomerByIdType;
}

const initialState: initialStateInterface = {
  //@ts-ignore
  id: JSON.parse(localStorage.getItem('currentCustomerId')) || '1',
};

export const customerSlice = createSlice({
  name: 'customers',
  initialState,
  reducers: {
    searchId: (state, action) => {
      state.id = action.payload;
    },
  },
});

export const { searchId } = customerSlice.actions;

export default customerSlice.reducer;
