export type getCustomerByIdType = {
  id: string | number;
};

export type createCustomerType = {
  data: {
    name: string;
    lastName: string;
    documentNumber: string;
    phoneNumber: string;
    address: string;
  };
};

export type updateCustomerType = {
  id: string | number;
  data: {
    name?: string;
    lastName?: string;
    documentNumber?: string;
    phoneNumber?: string;
    address?: string;
  };
};

export type deleteCustomerType = {
  ids: string | number;
};
