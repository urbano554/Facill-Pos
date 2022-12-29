import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Home from './pages/Home';
import { ListOfCustomers } from './pages/ListOfCustomers';
import { RegisterCustomers } from './pages/RegisterCustomers';

import { routes } from './common/routes';

import './index.css';
import { CustomerInformation } from './pages/CustomerInformation';

const router = createBrowserRouter([
  {
    path: routes.home,
    element: <Home />,
  },
  {
    path: routes.listOfCustomers,
    element: <ListOfCustomers />,
  },
  {
    path: routes.registeredCustomers,
    element: <RegisterCustomers />,
  },
  {
    path: routes.customerInfo,
    element: <CustomerInformation />,
  },
]);

function App() {
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
