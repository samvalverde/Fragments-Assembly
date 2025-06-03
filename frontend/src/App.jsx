import React, { useState } from 'react';

import MainPage from './components/MainPage';
import GeneratorForm from './components/GeneratorForm';
import GeneratorResult from './components/GeneratorResult';
import SequenceAssembler from './components/SequenceAssembler';
import GraphVisualization from './components/GraphVisualization';
import About from './components/About';

// npm run dev

export default function App() {
  const [page, setPage] = useState('main');
  const [generatedData, setGeneratedData] = useState(null);
  
  return (
    <div>
      {page === 'main' && (
        <MainPage
          goToGenerator={() => setPage('generator-form')}
          goToAssembler={() => setPage('assembler')}
          goToGraph={() => setPage('graph')}
          goToAbout={() => setPage('about')}
        />
      )}
      {page === 'generator-form' && (
        <GeneratorForm
          goBack={() => setPage('main')}
          onGenerated={(data) => {
            setGeneratedData(data);
            setPage('generator-result');
          }}
        />
      )}
      {page === 'generator-result' && (
        <GeneratorResult
          sequence={generatedData.sequence}
          count={generatedData.count}
          mean={generatedData.mean}
          fragments={generatedData.fragments}
          goBack={() => setPage('generator-form')}
        />)}
      {page === 'assembler' && (
        <SequenceAssembler goBack={() => setPage('main')} />
      )}
      {page === 'graph' && (
        <GraphVisualization goBack={() => setPage('main')} />
      )}
      {page === 'about' && (
        <About goBack={() => setPage('main')} />
      )}
    </div>
  );
}
