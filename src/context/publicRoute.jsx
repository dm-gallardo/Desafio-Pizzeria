import { useContext } from 'react';
import TokenContext from './token';
import { Navigate } from 'react-router-dom';


const PublicRoute = ({ children }) => {
  const { token } = useContext(TokenContext);

  return !token ? children : <Navigate to="/" replace />;
};

export default PublicRoute;