import React from 'react';
import theme from '../theme';

export default function GeneratorResult({ sequence, count, mean, fragments, goBack }) {
  const downloadTextFile = (filename, lines) => {
    const blob = new Blob([lines.join('\n')], { type: 'text/plain' });
    const link = document.createElement('a');
    link.href = URL.createObjectURL(blob);
    link.download = filename;
    link.click();
    URL.revokeObjectURL(link.href);
  };

  const generateDescriptor = () => {
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
    <div style={theme.container}>
      <h2 style={theme.title}>Fragmentos Generados</h2>

      <div style={{ ...theme.section, backgroundColor: '#ffffff', border: '1px solid #ccc' }}>
        <ul style={{ listStyle: 'none', paddingLeft: 0 }}>
          {fragments.map((f, i) => (
            <li key={i} style={{ padding: '0.25rem 0', fontFamily: 'monospace' }}>{f}</li>
          ))}
        </ul>
      </div>

      <button
        onClick={() => downloadTextFile('fragmentos.frags.txt', fragments)}
        style={{ ...theme.button, marginRight: '1rem' }}
      >
        Descargar fragmentos
      </button>

      <button
        onClick={() => downloadTextFile('fragmentos.desc.txt', [generateDescriptor()])}
        style={theme.button}
      >
        Descargar descriptor
      </button>

      <div style={{ marginTop: '2rem' }}>
        <button
          onClick={goBack}
          style={theme.button}
          onMouseOver={(e) => (e.target.style.backgroundColor = theme.buttonHover.backgroundColor)}
          onMouseOut={(e) => (e.target.style.backgroundColor = theme.button.backgroundColor)}
        >
          Volver al Generador
        </button>
      </div>
    </div>
  );
}
