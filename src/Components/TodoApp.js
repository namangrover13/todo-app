import React from 'react';
import { Typography, Paper, AppBar, Toolbar, Grid } from '@material-ui/core';
import TodoList from './TodoList';
import TodoForm from './TodoForm';
import { v4 as uuidv4 } from 'uuid';
import { TodosProvider } from './Contexts/todos.context';

const TodoApp = () => {
  
    return (
        <Paper
            style={{
                padding: 0,
                margin: 0,
                height: '100vh',
                backgroundColor: "#fafafa"
            }}
            elevation={0}
        >
            <AppBar color='secondary' position='static' style={{ height: '64px' }}>
                <Toolbar>
                    <Typography color='inherit'>Hooks Todo</Typography>
                </Toolbar>
            </AppBar>
            <Grid container justify='center' style={{ marginTop: '1rem' }}>
                <Grid item xs={8}>
                    <TodosProvider>
                        <TodoForm />
                        <TodoList />
                    </TodosProvider>
                </Grid>
            </Grid>


        </Paper>
    );
}

export default TodoApp;
