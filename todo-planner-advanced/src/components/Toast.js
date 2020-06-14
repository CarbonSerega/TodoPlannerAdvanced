import React, {useContext} from "react"
import {ToastContext} from "../context/toast/toastContext"
import {CSSTransition} from 'react-transition-group'

export const Toast = () => {

    const {toast, hide} = useContext(ToastContext)

    return  (
        <CSSTransition
            in={toast.visible}
            timeout={500}
            classNames={'alert'}
            mountOnEnter
            unmountOnExit>
            <div className={`alert alert-${toast.type || 'warning'} alert-dismissible`} role="alert">
                <strong>Attention! </strong>
                {toast.text}
                <button onClick={hide} type="button" className="close"  aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                </button>
            </div>
        </CSSTransition>
    )
}