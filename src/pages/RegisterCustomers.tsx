import Wrapper from '../components/Wrapper';
import { Form } from '../components/Form';

import { useCreateCustomerMutation } from '../services/customerServices';

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const RegisterCustomers: React.FC = () => {
  const [createEvent, { isError, isSuccess, isLoading }] =
    useCreateCustomerMutation();

  return (
    <Wrapper>
      <ToastContainer />
      <h2>Registrar un cliente</h2>
      <Form
        sendData={createEvent}
        isError={isError}
        isSuccess={isSuccess}
        isLoading={isLoading}
      />
    </Wrapper>
  );
};
