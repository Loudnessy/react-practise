import { formatDistanceToNow, formatRelative, subDays } from 'date-fns'


export const formatter = data => {
    return formatDistanceToNow(new Date(data), { addSuffix: true })
}

export const history = date => {
    return formatRelative(subDays(new Date(date), 0), new Date())
}
