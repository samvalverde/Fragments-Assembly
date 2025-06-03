import React from 'react';
import theme from '../theme';

export default function GraphVisualization({ goBack }) {
    return (
        <div style={theme.container}>
        <h2 style={theme.title}>Visualización del Grafo de Traslape</h2>
        <p>
            Esta sección muestra una visualización interactiva del grafo de traslape generado a partir de los fragmentos de ADN. 
            Permite explorar las conexiones entre los fragmentos y entender cómo se ensamblan para formar la secuencia original.
        </p>
        <button onClick={goBack} style={theme.button}>
            Volver
        </button>
        </div>
    );
}