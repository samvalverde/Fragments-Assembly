import React from 'react';
import theme from '../theme';

export default function SequenceAssembler({ goBack }) {
  return (
    <div style={theme.container}>
      <h2 style={theme.title}>Ensamblador de Secuencias</h2>
      <p>
        Esta sección permite ensamblar secuencias de ADN a partir de fragmentos generados aleatoriamente. 
        Utiliza algoritmos de grafo de traslape para reconstruir la secuencia original.
      </p>
      <button onClick={goBack} style={theme.button}>
        Volver
      </button>
    </div>
  );
}