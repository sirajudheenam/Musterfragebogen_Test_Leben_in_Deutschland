import React from 'react';

import App from './App';
import { QuizProvider } from '../contexts/QuizContext';

const DEQuiz = () => {
  return (
    <QuizProvider>
      <App />
    </QuizProvider>
  );
};
export default DEQuiz;
