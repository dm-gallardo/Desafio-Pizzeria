import { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
    
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [token, setToken] = useState(false);
  
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);

  //funcion inicio de sesion

  const handleLogin = async (e) => {
    e.preventDefault();
    const loginData = { email, password };
    const url = 'http://localhost:5000/api/auth/login';

    try {
      const logged_user = (await axios.post(url, loginData)).data;
      localStorage.setItem('logged_user', JSON.stringify(logged_user));
      setToken(true);
    } catch (error) {
      alert('Error al iniciar sesión');
    }
  };


  //datos del usuario
  
  const fetchUserProfile = async (email) => {
  const url = 'http://localhost:5000/api/auth/me';

  try {
    const response = await axios.post(url, { email });

    setEmail(response.data.email);
    return response.data;
  } catch (error) {
    console.error('Error al obtener el perfil del usuario:', error);
    setEmail(null);
    return null;
  }
};


  const handleRegister = async (e) => {
    e.preventDefault();
    if (email === '' || password === '') {
      alert('Todos los campos son obligatorios');
      return;
    }

    if (password.length <= 6) {
      alert('Contraseña demasiado corta, debe tener al menos 6 caracteres');
      return;
    }

    const registerData = { email, password };
    const url = 'http://localhost:5000/api/auth/register';

    try {
      const response = await axios.post(url, registerData);
      alert('Usuario registrado correctamente');
      console.log(response.data);
    } catch (error) {
      alert('Error al registrar usuario');
      console.error(error);
    }
  };



  //boton logout
  const handleLogout = (resetCounts, navigate) => {
  resetCounts();
  setToken(false);
  localStorage.removeItem("logged_user");
  setTimeout(() => navigate('/'), 50);
};

  return (
    <AuthContext.Provider value={{email, password, token, setToken, handleEmail, handlePassword, handleLogin, handleRegister, handleLogout, fetchUserProfile}}>
      {children}
    </AuthContext.Provider>
  );
};