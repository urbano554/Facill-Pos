import { ReactNode } from 'react';
import Navbar from './Navbar';

import '../index.css'

type Props = {
  children: ReactNode;
};

const Wrapper: React.FC<Props> = ({ children }) => {
  return (
    <div className='wrapper-container'>
      <Navbar />
      <div className='children'>{children}</div>
    </div>
  );
};

export default Wrapper;
