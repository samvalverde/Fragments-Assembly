import React, { useState } from 'react';

import MainPage from './components/MainPage';
import AlgorithmExplanation from './components/AlgorithmExplanation';
import Generator from './components/Generator';
/*import AlignmentForm from './components/AlignmentForm';
import AlignmentResult from './components/AlignmentResult';
import TextSimilarityForm from './components/TextSimilarityForm';
import TextSimilarityResult from './components/TextSimilarityResult';
import RepetitionForm from './components/RepetitionForm';
import RepetitionResult from './components/RepetitionResult';*/

export default function App() {
  const [page, setPage] = useState('main');
  const [alignmentResult, setAlignmentResult] = useState('');
  const [textInputs, setTextInputs] = useState({ text1: '', text2: '' });
  const [repetitionText, setRepetitionText] = useState('');

  const handleAlignmentSubmit = (data) => {
    // llamar acá a los algoritmos y generar el resultado
    setAlignmentResult(`${JSON.stringify(data, null, 2)}`);
    setPage('alignment-result');
  };

  return (
    <div>
      {page === 'main' && (
        <MainPage 
          goToExplanation={() => setPage('explanation')}
          goToAlignment={() => setPage('generator')}
          goToTextSimilarity={() => setPage('text-form')}
          goToRepetition={() => setPage('repetition-form')}
        />
      )}
      {page === 'explanation' && (
        <AlgorithmExplanation 
          goBack={() => setPage('main')}
        />
      )}
      {page === 'generator' && (
        <Generator
          goBack={() => setPage('main')}
        />
      )}
      {page === 'alignment-result' && (
        <AlignmentResult 
          result={alignmentResult}
          goBack={() => setPage('alignment')}
        />
      )}
      {page === 'text-form' && (
        <TextSimilarityForm
          goBack={() => setPage('main')}
          onSubmitResult={(text1, text2) => {
            setTextInputs({ text1, text2 });
            setPage('text-result');
          }}
        />
      )}
      {page === 'text-result' && (
        <TextSimilarityResult
          text1={textInputs.text1}
          text2={textInputs.text2}
          goBack={() => setPage('text-form')}
        />
      )}
      {page === 'repetition-form' && (
        <RepetitionForm
          goBack={() => setPage('main')}
          onSubmit={(text) => {
            setRepetitionText(text);
            setPage('repetition-result');
          }}
        />
      )}

      {page === 'repetition-result' && (
        <RepetitionResult
          text={repetitionText}
          goBack={() => setPage('repetition-form')}
        />
      )}
    </div>
  );
}
