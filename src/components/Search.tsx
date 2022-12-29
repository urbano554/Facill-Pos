import { Autocomplete, TextField } from '@mui/material';
import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { routes } from '../common/routes';
import { useAppDispatch } from '../global/hooks';

import { searchId } from '../global/app';
import { Name } from '../common/entities';

const Search = ({ data = [] }: any) => {
  const [value, setValue] = useState<string | null>(null);
  const dispatch = useAppDispatch();

  const navigate = useNavigate();

  const findId = data?.data?.find(({ name }: Name) => name === value);

  useEffect(() => {
    if (value !== null) {
      dispatch(searchId(findId?._id));
      localStorage.setItem('currentCustomerId', JSON.stringify(findId?._id));
      navigate(routes.customerInfo);
    }
  }, [value, findId, dispatch, navigate]);

  return (
    <Autocomplete
      value={value}
      onChange={(event: any, newValue: string | null) => {
        setValue(newValue);
      }}
      disablePortal
      id='combo-box-demo'
      options={data?.data?.map(({ name }: any) => name)}
      sx={{ width: 300 }}
      renderInput={(params) => (
        <TextField
          {...params}
          label='Buscar cliente'
        />
      )}
    />
  );
};

export default Search;
