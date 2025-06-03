import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import theme from '../theme';

export default function GeneratorForm({ goBack, onGenerated }) {
  const [fragments, setFragments] = useState([]);
  const [seq, setSeq] = useState('');
  const [count, setCount] = useState('');
  const [mean, setMean] = useState('');
  const [stdDev, setStdDev] = useState('');


  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const containerStyle = {
    ...theme.container,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'flex-start',
  };

  const contentBox = {
    backgroundColor: '#ffffff',
    padding: '2rem',
    borderRadius: '12px',
    boxShadow: '0 4px 12px rgba(0, 0, 0, 0.08)',
    maxWidth: '720px',
    width: '100%',
  };

  

  const handleGenerate = async () => {
    if (!seq || !count || !mean) {
      return alert('Por favor, complete todos los campos.');
    }
    const res = await axios.post('http://localhost:5000/generate', {
      sequence: seq,
      count: parseInt(count),
      mean_length: parseInt(mean),
      std_dev: parseFloat(stdDev || mean * 0.1),
    });

    onGenerated({
      sequence: seq,
      count: parseInt(count),
      mean: parseInt(mean),
      std_dev: parseFloat(stdDev || mean * 0.1),
      fragments: res.data.fragments,
    });
  };

  const downloadTextFile = (filename, lines) => {
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  return (
    <div style={containerStyle}>
      <div style={contentBox}>
        <h2 style={theme.title}>Generador de Fragmentos</h2>

        <label><strong>Secuencia base:</strong></label>
        <textarea
          style={{ ...inputStyle, height: '80px' }}
          value={seq}
          onChange={(e) => setSeq(e.target.value)}
        />

        <label><strong>Cantidad de fragmentos:</strong></label>
        <input
          type="number"
          style={inputStyle}
          value={count}
          onChange={(e) => setCount(e.target.value)}
          placeholder="Ej: 20"
        />

        <label><strong>Longitud media de fragmentos:</strong></label>
        <input
          type="number"
          style={inputStyle}
          value={mean}
          onChange={(e) => setMean(e.target.value)}
          placeholder="Ej: 12"
        />

        <label><strong>Desviación estándar de la longitud:</strong></label>
          <input
            type="number"
            style={inputStyle}
            value={stdDev}
            onChange={(e) => setStdDev(e.target.value)}
            placeholder="Ej: 2"
          />

        <div style={theme.section}>
          <h3>Cargar archivo de texto</h3>
          <FileUpload setSeq1={setSeq} n={1} />
        </div>

        <button
          onClick={handleGenerate}
          style={{ ...theme.button, marginBottom: '1rem' }}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Generar
        </button>
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
