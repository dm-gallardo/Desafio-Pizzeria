//se anidan los contextos por que ambos dependen del otro

import React from 'react';
import TotalProvider from './contextTotal';
import { CartCountProvider } from './contextCantidad';
import { AuthProvider } from '../context/UserContext.jsx';

export default function ContextJuntos({ children }) {
  return (
      <AuthProvider>
         <TotalProvider>
          <CartCountProvider>
            {children}
          </CartCountProvider>
        </TotalProvider>
      </AuthProvider>
  );
}
