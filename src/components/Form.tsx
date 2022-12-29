import { SubmitHandler, useForm } from 'react-hook-form';

import { Button, TextField } from '@mui/material';

import { FormProps, sendForm } from '../common/entities';
import Loading from './Loading';
import { toast } from 'react-toastify';
import { useEffect } from 'react';
import { useAppSelector } from '../global/hooks';

export const Form: React.FC<FormProps> = ({
  comingData,
  sendData,
  isLoading,
  isError,
  isSuccess,
  isEdit = false,
  editView = false,
}) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<sendForm>();

  const globalId = useAppSelector((state) => state.app.id);

  const onSubmit: SubmitHandler<sendForm> = (data) => {
    if (editView) {
      sendData({
        id: globalId,
        data: {
          ...data,
        },
      });
    } else {
      sendData(data);
    }
  };

  useEffect(() => {
    const successNotify = () =>
      toast(editView ? 'Datos actualizados' : 'Cliente registrado');

    const errorNotify = () => toast.error('A ocurrido un error');

    if (isSuccess) {
      successNotify();
    }
    if (isError) {
      errorNotify();
    }
  }, [isSuccess, editView, isError]);

  return (
    <form
      className='form'
      onSubmit={handleSubmit(onSubmit)}
    >
      <TextField
        id='outlined-basic'
        label='Nombre'
        variant='outlined'
        className='field'
        {...register('name', { required: !editView })}
        defaultValue={editView ? comingData?.name : ''}
        disabled={editView && !isEdit}
      />
      {!editView && errors.name && <p className='error'>campo requerido</p>}
      <TextField
        id='outlined-basic'
        label='Apellido'
        variant='outlined'
        className='field'
        {...register('lastName', { required: !editView })}
        defaultValue={editView ? comingData?.lastName : ''}
        disabled={editView && !isEdit}
      />
      {!editView && errors.lastName && <p className='error'>campo requerido</p>}
      <TextField
        id='outlined-basic'
        label='Nro de documento'
        variant='outlined'
        className='field'
        {...register('documentNumber', { required: !editView })}
        defaultValue={editView ? comingData?.documentNumber : ''}
        disabled={editView && !isEdit}
      />
      {!editView && errors.documentNumber && (
        <p className='error'>campo requerido</p>
      )}
      <TextField
        id='outlined-basic'
        label='Teléfono'
        variant='outlined'
        className='field'
        {...register('phoneNumber', { required: !editView, minLength: 8 })}
        defaultValue={editView ? comingData?.phoneNumber : ''}
        disabled={editView && !isEdit}
      />
      {!editView && errors.phoneNumber && (
        <p className='error'>campo requerido</p>
      )}
      <TextField
        id='outlined-basic'
        label='Dirección'
        variant='outlined'
        className='field'
        {...register('address', { required: !editView })}
        defaultValue={editView ? comingData?.address : ''}
        disabled={editView && !isEdit}
      />
      {!editView && errors.address && <p className='error'>campo requerido</p>}
      {editView && !isEdit ? null : (
        <div className='button-container'>
          <Button
            type='submit'
            variant='outlined'
          >
            {editView ? 'Guardar cambios' : 'Enviar'}
          </Button>
          <div>{isLoading && <Loading />}</div>
        </div>
      )}
    </form>
  );
};
