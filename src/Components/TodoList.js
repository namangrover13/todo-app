import { Divider, List, Paper } from '@material-ui/core';
import React from 'react'
import { useContext } from 'react';
import { TodosContext } from './Contexts/todos.context';
import Todo from './Todo';
const TodoList = ({removeTodo, toggleTodo, editTodo}) => {
    const todos = useContext(TodosContext);
    if(todos.length)
    return ( 
        <Paper>
            <List>
            {todos.map((todo,i) =>(
                <>  {/*To group content inside single JSX*/}
                <Todo task={todo.task} key={todo.id} id={todo.id} completed={todo.completed} removeTodo={removeTodo} toggleTodo={toggleTodo} editTodo={editTodo}/>
                {i < todos.length-1 && <Divider/>}
                </>
            ))}
            </List>
        </Paper>
     );
     return null;
}
 
export default TodoList;