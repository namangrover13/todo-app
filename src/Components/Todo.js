import { Checkbox, IconButton, ListItem, ListItemSecondaryAction, ListItemText } from '@material-ui/core';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import React, { memo, useContext } from 'react'
import { DispatchContext, TodosContext } from './Contexts/todos.context';
import EditTodo from './EditTodo';
import useToggle from './Hooks/useToggle';
const Todo = ({id, task, completed}) => {
    const dispatch = useContext(DispatchContext);
    const [isEditing, toggle] = useToggle(false)
    // console.log(props)
    return (
        
        <ListItem style={{height: '64px'}}>
            { isEditing ? <EditTodo id={id} task={task} toggleEdit={toggle}/> : 
            <>
            <Checkbox tabIndex={-1} checked={completed} onClick={()=>{dispatch( {type: "TOGGLE", id:id})}}/>
            <ListItemText style={{textDecoration: completed ? 'line-through' : 'none', opacity: completed ? 0.5 : 1}}>{task}</ListItemText>
            <ListItemSecondaryAction>
                <IconButton aria-label="Edit" onClick={toggle}>
                    <EditIcon/>
                </IconButton>
                <IconButton aria-label="Delete" onClick={()=>{dispatch( {type: "REMOVE", id:id})}}>
                    <DeleteIcon/>
                </IconButton>
            </ListItemSecondaryAction>
            </>
            }
        </ListItem>
    );
}

export default memo(Todo);