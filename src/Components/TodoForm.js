import { Paper, TextField } from '@material-ui/core';
import useInputState from './Hooks/useInputState';
import React, { useContext } from 'react'
import { DispatchContext, TodosContext } from './Contexts/todos.context';
const TodoForm = () => {
    const [value, handleValueChange, reset] = useInputState("");
    const dispatch = useContext(DispatchContext);
    return ( 
        <Paper style={{margin: '1rem 0', padding: '0 1rem'}}>
            <form onSubmit={e=>{
                e.preventDefault();
                dispatch({type: "ADD", task: value})
                reset();
            }}>
                <TextField value={value} onChange={handleValueChange} label={'Add New Todo'} margin={'normal'} ></TextField>
            </form>
        </Paper>
     );
}
 
export default TodoForm;