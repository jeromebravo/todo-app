const initialState = {todos: [], id: 0};

function rootReducer(state=initialState, action) {
    switch(action.type) {
        case 'ADD_TODO':
            let newState = {...state};
            newState.id++;
            return {...newState, todos: [...newState.todos, {task: action.task, id: newState.id}]};

        case 'REMOVE_TODO':
            let todos = state.todos.filter(value => value.id !== action.id);
            return {...state, todos};
            
        default:
            return state;
    }
}

export default rootReducer;