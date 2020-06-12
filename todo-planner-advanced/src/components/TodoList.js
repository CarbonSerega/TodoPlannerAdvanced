import React from "react";

export const TodoList = ({todos}) => {
    return (
        <ul className="list-group">
            {
                todos.map(t =>
                    <li
                        className="list-group-item todo"
                        key={t.id}
                    >
                        <div className="todo-wrapper">
                            <strong>{t.title}</strong>
                            <div>
                                <small>{t.date} {t.time}</small>
                            </div>
                        </div>
                        <div className="list-group-item commands-wrapper">
                            <button type="button" className="btn btn-outline-warning btn-sm mr-3">&times;</button>
                            <button type="button" className="btn btn-outline-danger btn-sm ">&times;</button>
                        </div>
                    </li>
                )
            }
        </ul>
    )
}