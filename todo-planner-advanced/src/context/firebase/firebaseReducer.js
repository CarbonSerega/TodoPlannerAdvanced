import {ADD_TODO, FETCH_TODOS, REMOVE_TODO, SHOW_LOADER, HIDE_LOADER} from "../types";

const handlers = {
    [SHOW_LOADER]: state => ({...state, loading: true}),
    [HIDE_LOADER]: state => ({...state, loading: false}),
    [ADD_TODO]: (state, {payload}) => ({
            ...state,
            todos: [...state.todos, payload]
        }),
    [FETCH_TODOS]: (state, {payload}) =>
        ({
            ...state,
            todos: payload,
            loading: false
        }),
    [REMOVE_TODO]: (state, {payload}) =>
        ({
            ...state,
            todos: state.todos.filter(t => t.id !== payload)
        }),
    DEFAULT: state => state
}

export const firebaseReducer = (state, act) => {
    const handle = handlers[act.type] || handlers.DEFAULT
    return handle(state, act)
}