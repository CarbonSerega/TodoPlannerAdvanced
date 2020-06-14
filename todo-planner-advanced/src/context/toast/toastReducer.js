import {HIDE_TOAST, SHOW_TOAST} from "../types"

const handlers = {
    [SHOW_TOAST]: (state, {payload}) => ({...payload, visible: true}),
    [HIDE_TOAST]: (state) => ({...state, visible: false}),
    DEFAULT: state => state
}

export const toastReducer = (state, action) => {
    const handle = handlers[action.type] || handlers.DEFAULT
    return handle(state, action)
}