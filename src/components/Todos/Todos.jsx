import {Stack, styled} from "@mui/material";
import Task from "./Task/Task";
import {useSelector} from "react-redux";

const TodosStack = styled(Stack)({
    display: 'flex',
    alignItems: 'center',
    padding: 10
})

function Todos() {

    const AllTasks = useSelector((state) => state.todos.tasks)

    return (
        <TodosStack spacing={2}>
            {AllTasks.map(task => <Task task={task.text} key={task.id} id={task.id}/>)}
        </TodosStack>
    );
}

export default Todos;