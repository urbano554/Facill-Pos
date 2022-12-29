import React, { useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { Button, Pagination } from '@mui/material';

import { useAppDispatch } from '../global/hooks';
import { searchId } from '../global/app';

import { BasicTableProps } from '../common/entities';
import { useDeleteCustomerMutation } from '../services/customerServices';
import Loading from './Loading';

const BasicTable: React.FC<BasicTableProps> = ({ data, handleOpen }) => {
  const [deleteCustomer, { isLoading }] = useDeleteCustomerMutation();

  const dispatch = useAppDispatch();

  const [selectedCheck] = useState([]);
  const [array, setArray] = useState([]);

  const handleCheckId = (id: never) => {
    const selectedCheckboxes = selectedCheck;

    const findIdx = selectedCheckboxes.indexOf(id);

    if (findIdx > -1) {
      setArray(selectedCheckboxes.splice(findIdx, 1));
    } else {
      // @ts-ignore
      setArray(selectedCheckboxes.push(id));
    }

    setArray(selectedCheckboxes);
  };

  const handleDelet = () => {
    deleteCustomer({
      ids: array.toLocaleString(),
    });
  };

  return (
    <>
      <TableContainer
        className='table-container'
        component={Paper}
      >
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell align='center'>Nombre</TableCell>
              <TableCell align='center'>Número de documento</TableCell>
              <TableCell align='center'>Teléfono</TableCell>
              <TableCell align='center'>Dirección</TableCell>
              <TableCell align='center'>
                Acciones{' '}
                <Button onClick={handleDelet}>
                  X {isLoading && <Loading />}
                </Button>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data?.data?.map(
              ({
                _id,
                name,
                lastName,
                documentNumber,
                address,
                phoneNumber,
              }: any) => (
                <TableRow
                  key={_id}
                  sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                >
                  <TableCell
                    component='th'
                    scope='row'
                    align='center'
                  >
                    {`${name} ${lastName}`}
                  </TableCell>
                  <TableCell align='center'>{documentNumber}</TableCell>
                  <TableCell align='center'>{phoneNumber}</TableCell>
                  <TableCell align='center'>{address}</TableCell>
                  <TableRow>
                    <TableCell
                      className='cursor table-item'
                      align='center'
                      onClick={() => {
                        dispatch(searchId(_id));
                        handleOpen();
                      }}
                    >
                      ver detalles
                    </TableCell>
                    <TableCell align='center'>
                      <input
                        type='checkbox'
                        // @ts-ignore
                        onChange={() => handleCheckId(_id)}
                        // @ts-ignore
                        selected={() => selectedCheck.includes(_id)}
                      />
                    </TableCell>
                  </TableRow>
                </TableRow>
              )
            )}
          </TableBody>
        </Table>
      </TableContainer>
      <Pagination
        className='pagination'
        count={data?.info?.pages}
      />
    </>
  );
};

export default BasicTable;
