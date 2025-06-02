import React from 'react';
import theme from '../theme';

export default function AlgorithmExplanation({ goBack }) {
  const exampleBlock = (label, content) => (
    <div style={theme.pre}>
      <strong>{label}</strong>
      <br />
      <code>{content}</code>
    </div>
  );

  return (
    <div style={theme.container}>
      <h2 style={theme.title}>Explicación de Algoritmos de Alineamiento</h2>

      {/* GLOBAL */}
      <section style={theme.section}>
        <h3>Alineamiento Global (Needleman-Wunsch)</h3>
        <p>
          Este algoritmo proporciona un método para encontrar la alineación global óptima entre dos secuencias completas.
          Maximiza el número de coincidencias entre los caracteres alineados (por ejemplo, aminoácidos o nucleótidos) y minimiza
          la cantidad de espacios o penalizaciones necesarias para lograr dicha alineación. Needleman-Wunsch analiza
          toda la longitud de ambas secuencias sin ignorar los extremos, por lo que no es útil para buscar regiones
          locales de alta similitud dentro de secuencias más grandes.
        </p>
        <p><strong>Ejemplo:</strong></p>
        {exampleBlock('Entrada:', 'Secuencia 1: ACTGAC\nSecuencia 2: ACTGGC')}
{exampleBlock('Resultado esperado (simplificado):',
`A C T G A C
| | | |   |
A C T G G C`)}
      </section>

      {/* LOCAL */}
      <section style={theme.section}>
        <h3>Alineamiento Local (Smith-Waterman)</h3>
        <p>
          A diferencia del alineamiento global, el algoritmo Smith-Waterman busca la región de mayor similitud local
          entre dos secuencias. Esto es especialmente útil cuando se desea encontrar subsecuencias altamente conservadas
          dentro de secuencias más grandes que pueden tener variaciones importantes en sus extremos.
          Este algoritmo no penaliza los extremos no alineados, lo cual lo hace más flexible y preciso en muchos contextos biológicos.
        </p>
        <p><strong>Ejemplo:</strong></p>
        {exampleBlock('Entrada:', 'Secuencia 1: GCGTACGT\nSecuencia 2: TACG')}
{exampleBlock('Resultado esperado (simplificado):',
`T A C G
| | | |
T A C G`)}
      </section>

      {/* SEMI-GLOBAL */}
      <section style={theme.section}>
        <h3>Alineamiento Semi-Global</h3>
        <p>
          El alineamiento semi-global permite ignorar las diferencias al inicio o al final de una o ambas secuencias,
          es decir, no penaliza los gaps en los extremos. Esto es útil cuando una secuencia más corta se alinea
          con una subsecuencia central dentro de una secuencia más larga, como en casos de solapamientos parciales.
          Este método busca el valor máximo entre la última fila y la última columna de la matriz de alineamiento,
          y realiza el backtracking desde esa intersección.
        </p>
        <p><strong>Ejemplo:</strong></p>
        {exampleBlock('Entrada:', 'Secuencia 1: ACGTGCA\nSecuencia 2: ACGT')}
{exampleBlock('Resultado esperado (simplificado):',
`A C G T G C A
| | | |
A C G T`)}
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
  );
}
