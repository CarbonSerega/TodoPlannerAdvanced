import React, {Fragment} from "react"
import {Form} from "../components/Form";
import {TodoList} from "../components/TodoList";

export const Main = () => {
    const todos = [
        {id: 1, title: "Todo 1", date: new Date().getDate(), time: new Date().getTime()},
        {id: 2, title: "Todo 2", date: new Date().getDate(), time: new Date().getTime()},
        {id: 3, title: "Todo 3", date: new Date().getDate(), time: new Date().getTime()},
    ]
    return (
        <Fragment>
            <Form />
            <hr/>
            <TodoList todos={todos}/>
        </Fragment>
    )
}