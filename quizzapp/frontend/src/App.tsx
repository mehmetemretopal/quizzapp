import { Stack } from "@mui/material"
import GlobalTime from "./Global/GlobalTime"
import GlobalAnswer from "./Global/GlobalAnswer"
import GlobalButton from "./Global/GlobalButton"


const App = () => {
  return (
    <Stack  sx={{m:5,border:1,borderStyle:"solid",alignItems:"center"}}>
      <GlobalTime/>
      <GlobalAnswer/>
      <GlobalButton/>
    </Stack>
  )
}

export default App