import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';

import { ModalProps } from '../common/entities';
import { useAppSelector } from '../global/hooks';
import { useGetCustomerByIdQuery } from '../services/customerServices';
import Loading from './Loading';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

const BasicModal: React.FC<ModalProps> = ({ open, handleClose }) => {
  const globalId = useAppSelector((state) => state.app.id);

  const { data: customerInfo, isLoading } = useGetCustomerByIdQuery(globalId);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby='modal-modal-title'
      aria-describedby='modal-modal-description'
    >
      <Box sx={style}>
        {isLoading ? (
          <Loading />
        ) : (
          <>
            <h3>Detalles</h3>
            <p>{customerInfo?.data?.name}</p>
            <p>{customerInfo?.data?.lastName}</p>
            <p>{customerInfo?.data?.address}</p>
            <p>{customerInfo?.data?.phoneNumber}</p>
            <p>{customerInfo?.data?.documentNumber}</p>
          </>
        )}
      </Box>
    </Modal>
  );
};

export default BasicModal;
