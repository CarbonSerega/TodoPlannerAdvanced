import React from "react"
import {TransitionGroup, CSSTransition} from "react-transition-group";
import {dateTime} from '../utils/utils'

export const TodoList = ({todos, onRemove}) =>  {
    function changeClassName (date) {
        let className = 'list-group-item todo'
        if(new Date(date).getDate() === new Date().getDate())
            return className + ' todo-today-bg'
        else
            return className
    }

    return (
        <TransitionGroup component="ul" className="list-group">
            {
                todos.map(t =>
                    <CSSTransition
                        key={t.id}
                        classNames={'todo'}
                        timeout={500}>
                        <li
                            className={changeClassName(t.date)}>

                            <div className="todo-wrapper">
                                <strong>{t.title}</strong>
                                <div>
                                    <small>
                                        {dateTime(t.date).date}
                                        &nbsp;
                                        {dateTime(t.date).time}
                                    </small>
                                </div>
                            </div>
                            <div className="list-group-item commands-wrapper bg-transparent">
                                <button
                                    type="button"
                                    className="btn btn-outline-danger btn-sm"
                                    onClick={() => onRemove(t.id)}>&times;</button>
                            </div>
                        </li>
                    </CSSTransition>
                )
            }
        </TransitionGroup>
    )}
