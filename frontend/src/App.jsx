import { useState } from 'react';
import axios from 'axios';

function App() {
  const [fragments, setFragments] = useState([]);

  const handleGenerate = async () => {
    const res = await axios.post('http://localhost:5000/generate', {
      sequence: "ATCGTAGGCTAAGTCGATCGATGCTAGCTAGCTG",
      count: 5,
      mean_length: 8
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
    </div>
  );
}

export default App;
