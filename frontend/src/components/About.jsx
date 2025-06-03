import React from 'react';
import theme from '../theme';

export default function About({ goBack }) {
  const containerStyle = {
    ...theme.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const contentBox = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    maxWidth: '720px',
    width: '100%',
  };

  const sectionStyle = {
    backgroundColor: '#2e7d32',
    color: '#fff',
    fontWeight: 'semibold',
    border: '1px solid #d1d1d1',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '2rem',
  };

  return (
    <div style={containerStyle}>
      <div style={contentBox}>
        <h2 style={theme.title}>Acerca del Proyecto</h2>

        <section style={sectionStyle}>
          <p>
            Este proyecto simula la generación de fragmentos de ADN de forma aleatoria con errores y variaciones típicas de un laboratorio (como sustituciones, deleciones, quimeras, orientación inversa). 
            Luego, permite ensamblar estos fragmentos utilizando algoritmos de grafo de traslape para reconstruir la secuencia original.
          </p>
          <p>
            El sistema está compuesto por dos componentes: una API en Flask (Python) y una interfaz visual en React. El backend se encarga de toda la lógica de generación, error, y ensamblaje, mientras que el frontend proporciona una experiencia interactiva para los usuarios.
          </p>
        </section>

        <button
          onClick={goBack}
          style={theme.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Volver a Inicio
        </button>
      </div>
    </div>
  );
}