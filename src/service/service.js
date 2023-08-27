import { formatDistanceToNow, format } from 'date-fns'


export const formatter = data => {
    return formatDistanceToNow(new Date(data), { addSuffix: true })
}

export const formatTable = date => {
    return format(new Date(date), 'Pp');
}
