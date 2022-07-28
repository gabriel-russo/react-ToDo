import {Box, Stack} from "@mui/material";
import Add from "./components/Add/Add";
import Todos from "./components/Todos/Todos";

function App() {
    return (
        <Box p={2}
             sx={{display: 'flex', justifyContent: 'center', alignContent: 'center'}}>
            <Stack spacing={2} width={'60%'}>
                <Add/>
                <Todos/>
            </Stack>
        </Box>
    );
}

export default App;
