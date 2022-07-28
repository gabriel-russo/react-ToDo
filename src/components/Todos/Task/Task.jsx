import {Card, CardActions, CardContent, Checkbox, IconButton, Typography} from "@mui/material";
import {Delete} from "@mui/icons-material";
import {useState} from "react";
import {remove} from "../../../redux/features/Todos/todosSlice";
import {useDispatch} from "react-redux";

function Task({id, task}) {

    const [checked, setChecked] = useState(false);
    const dispatch = useDispatch()

    function removeTask(){
        dispatch(remove({id: id}))
    }

    return (
        <Card sx={{display: 'flex', flexFlow: 'row', width: 385, maxWidth: 385}}>
            <CardContent>
                <Typography variant="body1" color="text.secondary" sx={{textDecoration: checked ? 'line-through' : ''}}>
                    {task}
                </Typography>
            </CardContent>
            <CardActions sx={{marginLeft: 'auto'}}>
                <IconButton aria-label="delete" size={"small"} color={"error"} onClick={(event) => removeTask()}>
                    <Delete/>
                </IconButton>
                <Checkbox size="medium" checked={checked} onChange={(e) => setChecked(!checked)}>Learn More</Checkbox>
            </CardActions>
        </Card>
    );
}

export default Task;