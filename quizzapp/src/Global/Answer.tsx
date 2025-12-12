import { Box, Grid, ThemeProvider, Typography } from "@mui/material"
import theme from "../theme"
import { useEffect, useState } from "react";
import data from "./data/questions.json"
import { useQuiz } from "../Context/QuizProvider";


const Answer: React.FC = () => {

  const { currentQuestion, goToNextQuestion, goToPreviousQuestion, questions, isLoading } = useQuiz();

  if (isLoading) {
    return <Typography>Sorular Yükleniyor...</Typography>;
  }

  if (!currentQuestion) {
    return <Typography>Tüm sorular tamamlandı!</Typography>;
  }
  return (
    <Grid>
      <Box sx={{ border: 2, borderStyle: "solid", textAlign: "center", display: "flex", justifyContent: "center", alignItems: "center", p: 5, mt: 1, backgroundColor: 'primary.main', borderColor: 'gray' }}>
        {currentQuestion.question}
      </Box>
    </Grid>
  )
}
export default Answer