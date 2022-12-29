import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { routes } from '../common/routes';
import '../index.css';

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className='nav'>
      <ul className='ul-container'>
        <li>
          <Button
            variant='text'
            onClick={() => navigate(routes.home)}
          >
            Inicio
          </Button>
        </li>
        <li>
          <Button
            variant='text'
            onClick={() => navigate(routes.listOfCustomers)}
          >
            Lista de clientes
          </Button>
        </li>
        <li>
          <Button
            variant='text'
            onClick={() => navigate(routes.registeredCustomers)}
          >
            Registrar clientes
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
