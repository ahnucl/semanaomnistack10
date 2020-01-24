import React from 'react';
import { StatusBar } from 'react-native'; // Componente

import Routes from './src/routes';

/**
 * O ajuste de estilo da status bar foi feito aqui para estar presente em todas as rotas.
 * Caso se deseja-se ter um estilo apenas em uma rota, o ajuste deveria ser adiciona apenas nela
 */

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" backgroundColor="#7d40e7"/>
      <Routes />
    </>
  );
}
