import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext.jsx';

const PrivateRoute = ({ children }) => {

  const { token, setToken } = useAuth();

  return token ? children : <Navigate to="/login" replace />;
};

export default PrivateRoute;