import { Stack } from "@mui/material"
import Information from "./Global/Infromation"
import Answer from "./Global/Answer"
import { QuestionButton } from "./Global/QuestionButton"
import Stage from "./Global/Stage"
import { QuizProvider } from "./Context/QuizProvider"


const App = () => {
  return (
    <QuizProvider>
      <Stack direction={"row"} justifyContent={"center"} display={"flex"} sx={{ width: '100%', height: '100vh' }}>
        <Stack justifyContent={"center"} flexGrow={9} sx={{ m: 5, p: 5, border: 1, borderStyle: "solid" }}>
          <Information />
          <Answer />
          <QuestionButton />
        </Stack>
        <Stack display={"flex"} justifyContent={"center"} flexGrow={1} sx={{ mr: 5, my: 5, border: 1, borderStyle: "solid" }}>
          <Stage />
        </Stack>
      </Stack>
    </QuizProvider>
  )
}

export default App