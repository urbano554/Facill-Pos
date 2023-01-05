import { useState } from 'react';

import Loading from '../components/Loading';
import BasicModal from '../components/Modal';
import Search from '../components/Search';
import BasicTable from '../components/Table';
import Wrapper from '../components/Wrapper';

import { useGetAllElementsQuery } from '../services/customerServices';

export const ListOfCustomers: React.FC = () => {
  const [open, setOpen] = useState(false);

  const { data: allCustomers = [], isLoading } = useGetAllElementsQuery(null);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Wrapper>
      <BasicModal
        open={open}
        setOpen={setOpen}
        handleClose={handleClose}
        handleOpen={handleOpen}
      />
      <h2>Lista de los clientes</h2>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <Search data={allCustomers} />
          <BasicTable
            data={allCustomers}
            handleOpen={handleOpen}
          />
        </>
      )}
    </Wrapper>
  );
};
