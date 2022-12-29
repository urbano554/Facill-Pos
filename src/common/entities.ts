import { LIST_OF_CUSTOMERS } from './constants';
import { routes } from './routes';

export type routesEntities = typeof routes;

export type listOfCustomersEntitiers = typeof LIST_OF_CUSTOMERS;

export type FormProps = {
  comingData?: any;
  sendData: any;
  isLoading: boolean;
  isSuccess: boolean;
  isError: boolean;
  isEdit?: boolean;
  editView?: boolean;
};

export type ModalProps = {
  handleOpen: () => void;
  handleClose: () => void;
  open: boolean;
  setOpen: (active: boolean) => void;
};

export type BasicTableProps = {
  handleOpen: () => void;
  data: any;
};

export type sendForm = {
  name: string;
  lastName: string;
  documentNumber: string;
  phoneNumber: string;
  address: string;
};

export type Name = {
  name: string;
};
