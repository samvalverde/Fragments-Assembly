import React, { useState } from 'react';
import axios from 'axios';
import FileUpload from './FileUpload';
import theme from '../theme';

function Generator({ goBack }) {
  const [fragments, setFragments] = useState([]);
  const [seq, setSeq] = useState('');
  const [count, setCount] = useState('');
  const [mean, setMean] = useState('');

  const inputStyle = {
    width: '100%',
    padding: '0.5rem',
    marginBottom: '1rem',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '1rem',
  };

  const handleGenerate = async () => {
    if (!seq || !count || !mean) {
      return alert('Por favor, complete todos los campos.');
    }
    const res = await axios.post('http://localhost:5000/generate', {
      sequence: seq,
      count: parseInt(count),
      mean_length: parseInt(mean),
    });
    setFragments(res.data.fragments);
  };

  const downloadTextFile = (filename, lines) => {
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const generateDescriptor = (sequence, count, mean) => {
  return [
    `original_length=${sequence.length}`,
    `min_fragments=${count}`,
    `avg_length=${mean}`,
    `std_dev=${Math.round(mean * 0.1)}`,
    `errors=substitution:0`,
    `reverse_prob=0`,
    `chimeras=0`,
    `coverage_required=false`
  ].join('\n');
};


  return (
    <div>
      <h1>Generador de Fragmentos</h1>
      <label><strong>Secuencia 1:</strong></label><br />
      <textarea style={{ ...inputStyle, height: '80px' }} value={seq} onChange={(e) => setSeq(e.target.value)} />
      <label><strong>Cantidad de fragmentos:</strong></label><br />
      <input
        type="number"
        style={inputStyle}
        value={count}
        onChange={(e) => setCount(e.target.value)}
        placeholder="Cantidad de fragmentos"
      />
      <label><strong>Longitud media de fragmentos:</strong></label><br />
      <input
        type="number"
        style={inputStyle}
        value={mean}
        onChange={(e) => setMean(e.target.value)}
        placeholder="Longitud media de fragmentos"
      />
      <div style={theme.section}>
        <h3>Cargar archivos de texto</h3>
        <FileUpload setSeq1={setSeq}  n={1} />
      </div>
      <button onClick={handleGenerate}>Generar</button>
      <ul>
        {fragments.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
      {fragments.length > 0 && (
      <div>
        <button onClick={() => downloadTextFile('fragmentos.frags.txt', fragments)}>
          Descargar fragmentos
        </button>
        <button onClick={() => {
          const descriptor = generateDescriptor(seq, count, mean);
          downloadTextFile('fragmentos.desc.txt', [descriptor]);
        }}>
          Descargar descriptor
        </button>
      </div>
)}

      <button
        onClick={goBack}
        style={theme.button}
        onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
        onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
      >
        Volver a Inicio
      </button>

    </div>
  );
}

export default Generator;
