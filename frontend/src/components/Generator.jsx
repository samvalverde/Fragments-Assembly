import React, { useState } from 'react';
import axios from 'axios';
import theme from '../theme';

function Generator({ goBack }) {
  const [fragments, setFragments] = useState([]);

  const handleGenerate = async () => {
    const res = await axios.post('http://localhost:5000/generate', {
      sequence: "ATCGTAGGCTAAGTCGATCGATGCTAGCTAGCTG",
      count: 20,
      mean_length: 5
    });
    setFragments(res.data.fragments);
  };

  return (
    <div>
      <h1>Generador de Fragmentos</h1>
      <button onClick={handleGenerate}>Generar</button>
      <ul>
        {fragments.map((f, i) => <li key={i}>{f}</li>)}
      </ul>
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
