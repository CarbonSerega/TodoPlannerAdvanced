import React, {useReducer} from "react"
import {ToastContext} from "./toastContext"
import {toastReducer} from "./toastReducer"
import {HIDE_TOAST, SHOW_TOAST} from "../types"

export const ToastState = ({children}) => {
    const [state, dispatch] = useReducer(toastReducer, {visible: false})

    const show = (text, type = 'warning') => {
        dispatch({
            type: SHOW_TOAST,
            payload: {text, type}
        })

        if(type !== 'warning') {
            setTimeout(() => dispatch({
                type: HIDE_TOAST
            }), 3000)
        }
    }

    const hide = () => dispatch({type: HIDE_TOAST})

    return (
        <ToastContext.Provider value={{show, hide, toast: state}}>
            {children}
        </ToastContext.Provider>
    )
}