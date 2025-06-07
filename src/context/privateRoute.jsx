import { useContext } from 'react';
import TokenContext from './token';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const { token } = useContext(TokenContext);

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;