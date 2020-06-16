import {toDateTime} from './utils'

export const validateTitle = (title) => !!title

export const validateDateTime = (date, time) =>
    toDateTime(date, time) >= new Date().getTime()