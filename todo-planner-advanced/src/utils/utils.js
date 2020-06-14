
export const dateTime = (date) => {
    date = new Date(date)

    const dateConfig = {
        year: 'numeric',
        month: 'short',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit'
    }
    const dateTimeFormat = new Intl.DateTimeFormat('en', dateConfig)

    const [
        { value: month },,
        { value: day },,
        { value: year },,
        { value: hour},,
        { value: minute}] = dateTimeFormat.formatToParts(date)

    return {
        date: `${day} ${month}, ${year}`,
        time: `${hour}:${minute}`
    }
}

export const toDateTime = (date, time) =>
    new Date(date + 'T' + time+':00')