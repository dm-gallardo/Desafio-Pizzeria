//se anidan los contextos por que ambos dependen del otro

import React from 'react';
import TotalProvider from './contextTotal';
import { CartCountProvider } from './contextCantidad';

export default function contextJuntos({ children }) {
  return (
    <TotalProvider>
      <CartCountProvider>
        {children}
      </CartCountProvider>
    </TotalProvider>
  );
}
