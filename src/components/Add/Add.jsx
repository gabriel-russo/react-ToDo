import {Box, Button, styled, TextField} from "@mui/material";
import {Add as AddIcon} from "@mui/icons-material"
import {useState} from "react";
import {useDispatch} from "react-redux";
import {add} from '../../redux/features/Todos/todosSlice'

const AddBox = styled(Box)({
    display: 'flex',
    alignContent: 'center',
    justifyContent: 'center',
    padding: 8,
})

function Add(props) {

    const [task, setTask] = useState('');
    const dispatch = useDispatch();

    function newTask(e){
        e.preventDefault()
        dispatch(add({id: Date.now(), text: task}))
    }

    return (
        <AddBox>
            <form style={{display: 'flex', alignItems: 'baseline'}} onSubmit={event => newTask(event)}>
                <TextField label="Qual a próxima atividade?"
                           variant="standard"
                           sx={{marginRight: 5}} value={task} onChange={event => setTask(event.target.value)}/>
                <Button variant="contained" color={"success"} size={"small"} startIcon={<AddIcon/>} type={"submit"}>
                    Adicionar
                </Button>
            </form>
        </AddBox>
    );
}

export default Add;