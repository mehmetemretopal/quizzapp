import { Stack, Typography } from '@mui/material'
import React from 'react'
import { useQuiz } from '../Context/QuizProvider'



const Stage: React.FC = () => {

  const { currentQuestion, showAllNumber } = useQuiz()

  const allIds = showAllNumber()

  return (
    <Stack alignItems={'center'} spacing={3} sx={{ m: 2 }}>
      {allIds.map((questionId, index) => (
        currentQuestion?.id === questionId.id ? (
          <Stack
            key={index}
            sx={{
              borderStyle: "solid",
              borderWidth: 2,
              borderColor: "gray",
              padding: 1
            }}
          >
            <Typography>{questionId.id} - {questionId.price} ₺</Typography>
          </Stack>
        ) : (
          <Typography key={index}>{questionId.id}- {questionId.price} ₺</Typography>
        )
      ))}
    </Stack>
  )
};

export default Stage