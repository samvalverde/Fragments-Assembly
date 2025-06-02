import theme from '../theme';

export default function MainPage({ goToExplanation, goToAlignment, goToTextSimilarity, goToRepetition }) {
  const pageStyle = {
    minHeight: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    background: '#f5f7f6',
    padding: '2rem',
    fontFamily: "'Segoe UI', sans-serif",
  };

  const cardStyle = {
    backgroundColor: '#ffffff',
    padding: '3rem',
    borderRadius: '16px',
    boxShadow: '0 6px 18px rgba(0, 0, 0, 0.08)',
    textAlign: 'center',
    maxWidth: '600px',
    width: '100%',
  };

  const headingStyle = {
    fontSize: '2rem',
    color: '#1b1b1b',
    marginBottom: '1.5rem',
  };

  const paragraphStyle = {
    fontSize: '1.1rem',
    color: '#444',
    marginBottom: '2.5rem',
  };

  const buttonStyle = {
    ...theme.button,
    width: '100%',
    marginBottom: '1rem',
  };

  return (
    <div style={pageStyle}>
      <div style={cardStyle}>
        <h1 style={headingStyle}>Proyecto 1 - Alineamiento de Secuencias</h1>
        <p style={paragraphStyle}>
          Compara secuencias de ADN, ARN, proteínas o texto. Visualiza alineamientos, aprende cómo funcionan los algoritmos y evalúa similitud textual.
        </p>

        <button
          onClick={goToAlignment}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Alineamiento de Secuencias
        </button>

        <button
          onClick={goToTextSimilarity}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Similitud entre Textos
        </button>

        <button
          onClick={goToRepetition}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Repeticiones en Texto
        </button>

        <button
          onClick={goToExplanation}
          style={buttonStyle}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Algoritmos de alineamiento
        </button>

      </div>
    </div>
  );
}
