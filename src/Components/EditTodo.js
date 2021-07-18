import React, { useContext } from 'react'
import { TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import { DispatchContext, TodosContext } from './Contexts/todos.context';
const EditTodo = ({id, task, toggleEdit}) => {
    const [value, handleChange, reset] = useInputState(task);
    const dispatch = useContext(DispatchContext);
    return ( 
        <form onSubmit={e=>{
            e.preventDefault();
            dispatch({type: "EDIT", id: id, newTask:value});
            reset();
            toggleEdit();
        }}
            style={{marginLeft : '1rem', width:'50%'}}
        >
            <TextField autoFocus margin="normal" value={value} onChange={handleChange} fullWidth></TextField>
        </form>
     );
}
 
export default EditTodo;