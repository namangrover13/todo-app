import { v4 as uuidv4 } from 'uuid';

const todoReducer = (state, action) => {
    switch (action.type) {
        case "ADD":
            return [...state, { id: uuidv4(), task: action.task, completed: false }];
            break;
        case "REMOVE":
            return state.filter(todo => todo.id !== action.id);
            break;
        case "TOGGLE":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, completed: !todo.completed } : todo);
            break;
        case "EDIT":
            return state.map(todo =>
                todo.id === action.id ? { ...todo, task: action.newTask } : todo);
            break;
        default:
            return state;
    }
}


// {type: "ADD", task:"Call MOM!"}
// {type: "REMOVE", id:5162351}
// {type: "TOGGLE", id: 63124}
// {type: "EDIT",id: 5162, task:"Learn PHY"}



export default todoReducer;