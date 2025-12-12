import { Box, Button, Grid, Modal, Stack, Typography } from "@mui/material"
import { useEffect, useState } from "react"
import { useQuiz } from "../Context/QuizProvider";
import BasicModal from "./BasicModal";
import { render } from "./Infromation";


export const QuestionButton: React.FC = () => {

  const { currentQuestion, goToNextQuestion, questions, isLoading, currentQuestionIndex, resetGame } = useQuiz();

  const [personanswer, setPersonAnswer] = useState<string | null>(null)
  const [message, setMessage] = useState<string | null>(null);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [showResult, setShowResult] = useState<boolean>(false)
  const [openModal, setOpenModal] = useState<boolean>(false);
  const [timeExpired, setTimeExpired] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const [second, setSecond] = useState<number>()

  const hesaplatime = () => {
    const second = currentQuestion!.time
    if (second > 1) {
      setSecond(prevSecond => prevSecond! - 1)
      setTimeExpired(false)
      return second
    } else {
      setTimeExpired(true)
      return 0
    }

  }

  console.log(second);


  useEffect(() => {
    if (isLoading || questions.length === 0 || personanswer === null) {
      return;
    }

    if (!currentQuestion) return;

    if (personanswer === currentQuestion.questionanswer || hesaplatime() > 0) {
      goToNextQuestion()
      const timer = setTimeout(() => {
        setPersonAnswer(null)
      }, 500)

      return () => clearTimeout(timer)

    } else {
      setModalMessage("Kaybettiniz!");
      setOpenModal(true);
    }

  }, [personanswer, currentQuestionIndex, questions]);


  if (isLoading) {
    return <div>Sorular yükleniyor...</div>;
  }

  if (questions.length === 0) {
    return <div>{message || "Gösterilebilecek soru bulunamadı."}</div>;
  }

  const handleCevapSecimi = (secilenCevap: string) => {
    if (!selectedOption) {
      setSelectedOption(secilenCevap);
      setTimeout(() => {
        setShowResult(true);
        if (secilenCevap === currentQuestion?.questionanswer) {
          setTimeout(() => {
            goToNextQuestion();
            setSelectedOption(null);
            setShowResult(false);
          }, 1500);
        } else {
          setTimeout(() => {
            setModalMessage("Yanlış cevap! Oyun bitti. Kazanılan tutar " + currentQuestion?.price + "₺");
            setOpenModal(true);
          }, 1500);
        }
      }, 1500);
    }
  };

  const getButtonColor = (option: string) => {
    if (!selectedOption) return 'inherit';
    if (selectedOption === option) {
      if (!showResult) {
        return 'warning';
      }
      if (option === currentQuestion?.questionanswer) {
        return 'success';
      } else {
        return 'error';
      }
    }
    return 'inherit';

  };

  const handleCloseModal = () => {
    setOpenModal(false);
    resetGame()
    setSelectedOption(null)
  };


  return (
    <>
      <Stack direction={"row"} justifyContent={"space-between"} spacing={2} sx={{ display: "flex", mt: 3, pt: 2, pb: 1 }}>
        {currentQuestion?.options.map((option, index) => (
          <Button
            key={index}
            onClick={() => handleCevapSecimi(option)}
            variant="contained"
            color={getButtonColor(option)}
            sx={{
              width: '45%',
              borderWidth: 2,
              borderColor: "gray",
              borderStyle: "solid"
            }}>
            {option}
          </Button>
        ))}
      </Stack>

      <BasicModal
        open={openModal}
        onClose={handleCloseModal}
        message={modalMessage}
      />
    </>
  )
}