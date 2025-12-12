import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import data from "../Global/data/questions.json"

interface Question {
  id: number;
  question: string;
  questionanswer: string;
  options: string[];
  time: number
  person: string
  price: number
}

interface QuizContextType {
  questions: Question[];
  currentQuestionIndex: number;
  currentQuestion: Question | undefined;
  goToNextQuestion: () => void;
  goToPreviousQuestion: () => void;
  isLoading: boolean;
  showAllNumber: () => { id: number; price: number; }[];
  resetGame:()=>void;
  allid: Question | undefined;
  
}

const defaultContextValue: QuizContextType = {
  questions: [],
  currentQuestionIndex: 0,
  currentQuestion: undefined,
  goToNextQuestion: () => { },
  goToPreviousQuestion: () => { },
  isLoading: true,
  showAllNumber: () => [],
  allid: undefined,
  resetGame:()=>{}
};

const QuizContext = createContext<QuizContextType>(defaultContextValue)

export const useQuiz = () => useContext(QuizContext)

interface QuizProviderProps {
  children: ReactNode
}

export const QuizProvider: React.FC<QuizProviderProps> = ({ children }) => {
  const [questions, setQuestions] = useState<Question[]>([]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [id, setId] = useState(0)
  


  useEffect(() => {
    setQuestions(data as Question[]);
    setIsLoading(false);
  }, []);

  const currentQuestion = questions[currentQuestionIndex];

  const allid = questions[id]

  const goToNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(prevIndex => prevIndex + 1);
    }
  };

  const goToPreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(prevIndex => prevIndex - 1);
    }
  };

  const showAllNumber = () => {
    const iddata = data.map(item =>
    ({
      id: item.id,
      price: item.price
    }));

    return iddata;
  }

  const resetGame=()=>{
    setCurrentQuestionIndex(0)
    
  }

  const contextValue: QuizContextType = {
    questions,
    currentQuestionIndex,
    currentQuestion,
    goToNextQuestion,
    goToPreviousQuestion,
    isLoading,
    showAllNumber,
    allid,
    resetGame
  };

  return (
    <QuizContext.Provider value={contextValue}>
      {children}
    </QuizContext.Provider>
  );
};