import React, {useReducer} from "react"
import axios from 'axios'
import {FirebaseContext} from "./firebaseContext"
import {firebaseReducer} from "./firebaseReducer"
import {ADD_TODO, FETCH_TODOS, HIDE_LOADER, REMOVE_TODO, SHOW_LOADER} from "../types"

const db = 'https://todo-planner-98fef.firebaseio.com'


export const FirebaseState = ({children}) => {
    const initialState = {
        todos: [],
        loading: false
    }

    const [state, dispatch] = useReducer(firebaseReducer, initialState)

    const showLoader = () => dispatch({type: SHOW_LOADER})

    const hideLoader = () => dispatch({type: HIDE_LOADER})

    const fetchTodo = async () => {
        showLoader()
        const res = await axios.get(`${db}/todos.json`)

        if(res.data) {
            const payload = Object.keys(res.data).map(key => {
                return {
                    ...res.data[key],
                    id: key
                }
            })

            dispatch({
                type: FETCH_TODOS,
                payload
            })
        } else {
            hideLoader()
        }

    }

    const addTodo = async (title, date) => {
        const todo = {
            title,
            date: date.toJSON()
        }

        try {
            const res = await axios.post(`${db}/todos.json`, todo)
            const payload = {
                ...todo,
                id: res.data.name
            }
            dispatch({
                type: ADD_TODO,
                payload
            })
        } catch (e) {
            throw new Error(e.message)
        }
    }

    const removeTodo = async id => {
        await axios.delete(`${db}/todos/${id}.json`)

        dispatch({
            type: REMOVE_TODO,
            payload: id
        })
    }


    return (
        <FirebaseContext.Provider value={{
            showLoader, fetchTodo, addTodo, removeTodo,
            loading: state.loading,
            todos: state.todos
        }}>
            {children}
        </FirebaseContext.Provider>
    )
}