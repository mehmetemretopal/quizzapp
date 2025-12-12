import { Box, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material"
import Countdown, { CountdownRendererFn } from "react-countdown"
import data from "./data/questions.json";
import { useContext, useEffect, useState } from "react";
import { useQuiz } from "../Context/QuizProvider";


const render: CountdownRendererFn = ({ seconds, completed }) => {
     const [age, setAge] =useState('');

  const handleChange = (event: SelectChangeEvent) => {
    setAge(event.target.value as string);
  };
    if (completed) {
        return <Typography>Süre Bitti</Typography>
    } else {
        return <Typography>{seconds}</Typography>
    }
}

const Information: React.FC = () => {

    const { currentQuestion, isLoading, currentQuestionIndex } = useQuiz()

    if (isLoading || !currentQuestion) {
        return <Typography>Bilgiler Yükleniyor...</Typography>;
    }

    const starttime = Date.now() + currentQuestion.time
    const person = currentQuestion.person

    const allperson = data.map((item) => (
        item.person
    ))

    return (
        <Stack direction={"row"} justifyContent={"space-between"} sx={{ display: "flex" }}>
            
           
            <Box sx={{ ml: 3, display: "flex", justifyContent: "center", alignItems: "center" }}>
                <Select
                value={person}
                label="yarışmacılar"
            >
                <MenuItem >
                    {allperson}
                </MenuItem>
            </Select>
            </Box>
            <Stack direction={"column"}>

                <Box sx={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <img style={{ width: 150 }} src="./src/assets/yurtlogo.png" />
                </Box>
                <Box sx={{ ml: 2, display: "flex", justifyContent: "center", alignItems: "center" }}>
                    <Typography>Gölbaşı Talebe Yurdu</Typography>
                </Box>
            </Stack>

            <Box sx={{ p: 2, width: 80, textAlign: "center" }}>
                <Countdown date={starttime} renderer={render} />
            </Box>

        </Stack>
    )
}

export default Information