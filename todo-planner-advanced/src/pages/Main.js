import React, {Fragment, useContext, useEffect} from "react"
import {Form} from "../components/Form";
import {TodoList} from "../components/TodoList";
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {Loader} from "../components/Loader";

export const Main = () => {
    const {loading, todos, fetchTodo, removeTodo} = useContext(FirebaseContext)
    
    useEffect(() => {
        fetchTodo()
    }, [])
    
    return (
        <Fragment>
            <Form />
            <hr/>
            {
                loading
                    ? <Loader/>
                    : todos && <TodoList todos={todos} onRemove={removeTodo}/>

            }

        </Fragment>
    )
}