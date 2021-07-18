import React, { createContext, useReducer } from 'react';
import { useLocalStorageReducer } from '../Hooks/useLocalStorageReducer';
import todoReducer from '../Reducers/todo.reducer';

const defaultTodos = [
    {id: 1, task: "Purchase new Books", completed: false},
    {id: 2, task: "Complete last module in React Specialization", completed: true}
];

export const TodosContext = createContext();
export const DispatchContext = createContext();

export function TodosProvider(props) {
    const[todos, dispatch] = useLocalStorageReducer("todos", defaultTodos, todoReducer);
    return(
        <TodosContext.Provider value={todos}>
            <DispatchContext.Provider value={dispatch}>
                {props.children}
            </DispatchContext.Provider>
        </TodosContext.Provider>
    );
}