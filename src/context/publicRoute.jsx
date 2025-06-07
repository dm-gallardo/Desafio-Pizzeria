import { useContext } from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from '../context/UserContext.jsx';

const PublicRoute = ({ children }) => {

  const { token, setToken } = useAuth();

  return !token ? children : <Navigate to="/" replace />;
};

export default PublicRoute;