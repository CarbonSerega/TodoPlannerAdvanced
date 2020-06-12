import React, {useContext} from "react"
import {ToastContext} from "../context/toast/toastContext";

export const Toast = () => {

    const {toast, show, hide} = useContext(ToastContext)

    if(!toast.visible) {
        return null
    }
    return  (
        <div className={`alert alert-${toast.type || 'warning'} alert-dismissible`} role="alert">
            <strong>Attention! </strong>
            {toast.text}
            <button onClick={hide} type="button" className="close"  aria-label="Close">
                <span aria-hidden="true">&times;</span>
            </button>
        </div>
    )
}