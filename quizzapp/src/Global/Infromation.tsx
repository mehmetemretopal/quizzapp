import { Box, FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, Stack, Typography } from "@mui/material"
import Countdown, { CountdownRendererFn } from "react-countdown"
import data from "./data/questions.json";
import { useContext, useEffect, useState } from "react";
import { useQuiz } from "../Context/QuizProvider";


export const render: CountdownRendererFn = ({ seconds }) => {
    return <Typography>{seconds}</Typography>
}

const Information: React.FC = () => {
    const [pers, setPers] = useState<string>('');
    const [question, setQuestion] = useState<string>();

    const allperson = data.map((item) => (
        item.person
    ))
    const handleChange = (event: SelectChangeEvent) => {
        setPers(event.target.value);
        setQuestion(event.target.value)
    };

    const { currentQuestion, isLoading, currentQuestionIndex } = useQuiz()

    if (isLoading || !currentQuestion) {
        return <Typography>Bilgiler Yükleniyor...</Typography>;
    }

    const starttime = Date.now() + currentQuestion.time
    const person = currentQuestion.person


    return (
        <Stack direction={"row"} justifyContent={"space-between"} sx={{ display: "flex" }}>

            <Stack direction={"row"}>
                <Box sx={{ ml: 3, display: "flex", justifyContent: "center", alignItems: "center", minWidth: 200 }}>
                    <FormControl fullWidth>
                        <InputLabel sx={{ color: '#1976d2' }}>Yarışmacı</InputLabel>
                        <Select
                            value={pers}
                            label='Yarışmacılar'
                            onChange={handleChange}
                        >
                            {data.map((item) => (
                                <MenuItem key={item.id} value={item.person}>{item.person}</MenuItem>
                            ))}
                        </Select>
                    </FormControl>
                </Box>
            </Stack>


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