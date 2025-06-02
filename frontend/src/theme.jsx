// src/theme.js
const colors = {
    background: '#f5f7f6',
    card: '#e8f5e9',
    text: '#1b1b1b',
    title: '#000000',
    green: '#2e7d32',
    greenHover: '#256628',
    border: '#c3e6c3',
  };
  
  const theme = {
    container: {
      padding: '2rem',
      maxWidth: '960px',
      margin: '0 auto',
      backgroundColor: colors.background,
      minHeight: '100vh',
      fontFamily: "'Segoe UI', sans-serif",
      color: colors.text,
    },
    section: {
      backgroundColor: colors.card,
      border: `1px solid ${colors.border}`,
      borderRadius: '12px',
      padding: '1.5rem',
      marginBottom: '2rem',
      boxShadow: '0 4px 12px rgba(0, 0, 0, 0.05)',
    },
    pre: {
      backgroundColor: '#dfeee0',
      padding: '1rem',
      borderRadius: '8px',
      whiteSpace: 'pre-wrap',
      fontFamily: 'monospace',
      fontSize: '0.95rem',
      overflowX: 'auto',
    },
    title: {
      textAlign: 'center',
      color: colors.title,
      fontSize: '2rem',
      marginBottom: '2rem',
      borderBottom: `2px solid ${colors.title}`,
      paddingBottom: '0.5rem',
    },
    button: {
      backgroundColor: colors.green,
      color: '#fff',
      padding: '0.75rem 1.5rem',
      border: 'none',
      borderRadius: '8px',
      cursor: 'pointer',
      fontSize: '1rem',
      boxShadow: '0 2px 6px rgba(0, 0, 0, 0.15)',
      transition: 'background-color 0.2s ease',
    },
    buttonHover: {
      backgroundColor: colors.greenHover,
    },
  };
  
  export default theme;
  