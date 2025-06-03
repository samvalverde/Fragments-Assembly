import theme from '../theme';

export default function MainPage({ goToGenerator, goToAssembler, goToGraph, goToAbout }) {
  const pageStyle = {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f7f6',
    padding: '2rem',
    fontFamily: "'Segoe UI', sans-serif",
    minHeight: '100vh',
    width: '100vw',
    overflowX: 'hidden',
    boxSizing: 'border-box',
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    width: '100%',
    maxWidth: '700px',
    boxSizing: 'border-box',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#1b1b1b',
    marginBottom: '1.5rem',
    borderBottom: `2px solid ${theme.title.color}`,
    paddingBottom: '0.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '2.5rem',
    lineHeight: '1.6',
  };

  const buttonStyle = {
    ...theme.button,
    width: '100%',
    marginBottom: '1rem',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Proyecto 2 - Fragmentación y Ensamblaje de ADN</h1>
        <p style={paragraphStyle}>
          Esta plataforma permite simular la fragmentación aleatoria de secuencias de ADN (o texto),
          aplicar errores típicos de laboratorio como sustituciones o quimeras, y ensamblar los fragmentos
          utilizando grafos de traslape. Visualiza el proceso, comprende los algoritmos involucrados y genera
          tus propios experimentos.
        </p>

        <button
          onClick={goToGenerator}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Generador de Fragmentos
        </button>

        <button
          onClick={goToAssembler}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Ensamblador de Fragmentos
        </button>

        <button
          onClick={goToGraph}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Explorador del Grafo
        </button>

        <button
          onClick={goToAbout}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Acerca del Proyecto
        </button>
      </div>
    </div>
  );
}
