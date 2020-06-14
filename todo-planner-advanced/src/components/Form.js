import React, {useContext, useState} from "react"
import {ToastContext} from "../context/toast/toastContext"
import {Toast} from "./Toast"
import {FirebaseContext} from "../context/firebase/firebaseContext";
import {toDateTime} from "../utils/utils"

export const Form = () => {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [time, setTime] = useState('')

    const toast = useContext(ToastContext)
    const firebase = useContext(FirebaseContext)
    const submitHandler = event => {
        event.preventDefault()

        if(title.trim() && date && time) {
            firebase.addTodo(title.trim(), toDateTime(date, time))
                .then(() => toast.show('Todo was created :)', 'success'))
                .catch(e => {
                    toast.show('Something was wrong :(', 'danger')
                    console.log('Add todo: '+e.message)
                })

            setTitle('')
            setDate('')
            setTime('')
        } else {
            toast.show('Fill the form correctly!')
        }
    }

    return (
        <form className="card p-4" onSubmit={submitHandler}>
            <Toast />
            <div className="form-group row">
                <label htmlFor="example-text-input" className="col-2 col-form-label">Todo title</label>
                <div className="col-10">
                    <input
                        className="form-control"
                        type="text"
                        placeholder="Example: Buy bread"
                        value={title}
                        onChange={e => setTitle(e.target.value)}/>
                </div>
            </div>

            <div className="form-group row">
                <label htmlFor="example-date-input" className="col-2 col-form-label">Planning date</label>
                <div className="col-10">
                    <input
                        className="form-control"
                        type="date"
                        id="example-date-input"
                        value={date}
                        onChange={e => setDate(e.target.value)}/>

                </div>
            </div>


            <div className="form-group row">
                <label htmlFor="example-time-input" className="col-2 col-form-label">Planning time</label>
                <div className="col-10">
                    <input
                        className="form-control"
                        type="time"
                        id="example-time-input"
                        value={time}
                        onChange={e => setTime(e.target.value)}/>
                </div>
            </div>

        </form>
    )
}