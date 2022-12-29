import { useEffect, useState } from 'react';

import { Button } from '@mui/material';

import { Form } from '../components/Form';
import Loading from '../components/Loading';
import Wrapper from '../components/Wrapper';

import { useAppSelector } from '../global/hooks';

import { ToastContainer } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';

import {
  useLazyGetCustomerByIdQuery,
  useUpdateCustomerMutation,
} from '../services/customerServices';

export const CustomerInformation = () => {
  const globalId = useAppSelector((state) => state.app.id);
  const [isEdit, setIsEdit] = useState(false);
  const [getCustomer, { data: customerInfo, isLoading, isError }] =
    useLazyGetCustomerByIdQuery();

  const [
    updateCustomer,
    {
      isLoading: updateCustomerLoading,
      isSuccess: updateCustomerSuccess,
      isError: updateCustomerError,
    },
  ] = useUpdateCustomerMutation();

  useEffect(() => {
    if (globalId !== null) {
      getCustomer(globalId);
    }
  }, [getCustomer, globalId]);

  return (
    <Wrapper>
      <ToastContainer />
      <h2>Información del cliente</h2>
      <Button
        onClick={() => setIsEdit(!isEdit)}
        variant='outlined'
      >
        {!isEdit ? 'editar' : 'cerrar edición'}
      </Button>
      {isLoading ? (
        <Loading />
      ) : (
        <Form
          comingData={customerInfo?.data}
          sendData={updateCustomer}
          isLoading={updateCustomerLoading}
          isSuccess={updateCustomerSuccess}
          isError={updateCustomerError || isError}
          isEdit={isEdit}
          editView
        />
      )}
    </Wrapper>
  );
};
