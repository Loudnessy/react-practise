import { formatDistanceToNow } from 'date-fns'


export const formatter = data => {
    return formatDistanceToNow(new Date(data), { addSuffix: true })
}